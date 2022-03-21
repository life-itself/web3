import { useEffect } from 'react'
import Script from 'next/script'
import { useRouter } from 'next/router'
import { DefaultSeo } from 'next-seo'
import { ThemeProvider } from 'next-themes'

import '../styles/global.css'
import siteConfig from '../config/siteConfig.js'
import Layout from '../components/Layout'
import MdxPage from '../components/MDX'
import * as gtag from '../lib/gtag'

function MyApp({ Component, pageProps }) {
  const router = useRouter()
  // Google Analytics
  if (siteConfig.analytics) {
    useEffect(() => {
      const handleRouteChange = (url) => {
        gtag.pageview(url)
      }
      router.events.on('routeChangeComplete', handleRouteChange)
      return () => {
        router.events.off('routeChangeComplete', handleRouteChange)
      }
    }, [router.events])
  }
  // end Google Analytics

  const pageTitle = (
    router.pathname != "/"
      ? // convert slug to title
        router.pathname.split("/").pop().replace(/-/g, " ")
      : "home"
  ) // capitalize first char of each word
    .replace(/(^\w{1})|(\s{1}\w{1})/g, (str) => str.toUpperCase());
  
  return (
    <ThemeProvider attribute="class" defaultTheme="dark">
      <DefaultSeo
        titleTemplate={'%s | ' + siteConfig.title}
        defaultTitle={siteConfig.title}
        description={siteConfig.description}
        {...siteConfig.nextSeo}
      />
      {/* Global Site Tag (gtag.js) - Google Analytics */}
      {siteConfig.analytics &&
        <Script
          strategy="afterInteractive"
          src={`https://www.googletagmanager.com/gtag/js?id=${siteConfig.analytics}`}
        />
      }
      {siteConfig.analytics &&
        <Script
          id="gtag-init"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${siteConfig.analytics}', {
                page_path: window.location.pathname,
              });
            `,
          }}
        />
      }
      <Layout title={pageTitle ?? siteConfig.title}>
        { 
          Component.name == 'MDXContent'
            ? <MdxPage children={{ Component, pageProps }} />
            : <Component {...pageProps} />
        }
      </Layout>
    </ThemeProvider>
  )
}

      // if this is a markdown page use this layout by default ...
      // const MyLayout = pageProps.
  

export default MyApp
