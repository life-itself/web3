import { useState, useEffect } from 'react'
import {unified} from 'unified'
import rehypeParse from 'rehype-parse'
import find from 'unist-util-find'
import {toString} from 'hast-util-to-string'

const textStyles = (theme) => ({
  padding: '16px 22px',
  fontSize: '11px',
  background: theme === 'light' ? '#fff' : '#000',
})

const display = (data, theme) => {
  return (
    <div
      style={{
        color: theme === 'light' ? 'rgb(99, 98, 98)' : '#A8A8A8',
      }}
    >
      <div style={textStyles(theme)}>{data}</div>
      {/* <div style={footer(theme)}>{wikiLogo(theme)}</div> */}
      {/* {arrow(theme)} */}
    </div>
  )
}

export const Content = (props) => {
  const [state, setState] = useState({
    data: "",
    isLoaded: false,
  })

  useEffect(async () => {
    // const path = `/concepts/${props.value}`;
    // console.log(path)
    const path = "http://localhost:3000/concepts/bitcoin";
    fetch(path).then((response) => {
      if (response.status !== 200) {
        console.log(`Looks like there was a problem. Status Code: ${response.status}`)
        return
      }
      response.text().then((data) => {
        const hast = unified().use(rehypeParse).parse(data);
        console.log(hast)
        const article = find(hast, (node) => {
          return node.tagName === "article"
        })
        const main = find(article, (node) => {
          return node.tagName === "main"
        })
        const p = find(main, (node) => {
          return node.tagName === "p"
        })
        // console.log(toString(p))
        setState({
          data: toString(p),
          isLoaded: true,
        })
      })
    })
  }, [])

  const { theme } = props
  const { data, isLoaded } = state

  return isLoaded ? display(data, theme) : <div />
}
