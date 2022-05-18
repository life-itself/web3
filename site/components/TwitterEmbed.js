import { useEffect, useState, useRef } from "react";

const twitterWidgetJs = "https://platform.twitter.com/widgets.js";

export default function TwitterEmbed({ url }) {
  let ref = useRef(null)
  const [isLoading, setLoading] = useState(true)
  
  const tweetId = url.split("status/").pop()

  var callbacks = [];

  const loadScript = (src, cb) => {
    if (callbacks.length === 0) {
      callbacks.push(cb);
      var s = document.createElement("script");
      s.setAttribute("src", src);
      s.setAttribute("async", "true");
      s.onload = () => callbacks.forEach((cb) => cb());
      document.head.appendChild(s);
    } else {
      callbacks.push(cb);
    }
  }

  useEffect(() => {
    if (!ref.current) return;

    const renderTweet = () => {
      window.twttr.widgets.createTweet(tweetId, ref.current, {
        theme: "dark"
      }).then(() => {
        setLoading(false)
      })
    }

    if (!window.twttr) {
      loadScript(twitterWidgetJs, renderTweet)
    } else {
      renderTweet()
    }

    return () => {
      setLoading(true);
    };
  },[]);

  return (
    <>
      {isLoading && <div className="relative my-4 w-full sm:max-w-lg bg-neutral-900 drop-shadow-md rounded-lg dark:text-gray-300">
        <div className="absolute flex flex-col gap-2 items-center justify-center bg-slate-700/70 w-full h-full rounded-lg top-0 left-0 z-10">
          <svg
            role="img"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            className="w-10"
          >
            <title>Twitter</title>
            <path
              fill="#1DA1F2"
              d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"
            />
          </svg>
          Loading tweet...
        </div>
        <div className="p-3 space-y-4">
          <div className="flex items-center">
            <div className="animate-pulse mr-2 h-10 w-10 rounded-full bg-slate-700" />
            <div className="animate-pulse w-1/3 h-4 bg-slate-700"></div>
          </div>
          <div className="space-y-2">
            <div className="animate-pulse w-2/3 h-3 bg-slate-700"></div>
            <div className="animate-pulse w-2/3 h-3 bg-slate-700"></div>
          </div>
          <div className="animate-pulse w-2/3 h-20 rounded bg-slate-700"></div>
          <div className="flex space-x-4">
            <div className="animate-pulse w-1/4 h-3 bg-slate-700"></div>
            <div className="animate-pulse w-1/4 h-3 bg-slate-700"></div>
            <div className="animate-pulse w-1/4 h-3 bg-slate-700"></div>
          </div>
        </div>
      </div>}
      <div className="twitter-tweet" ref={ref} />
    </>
  );
}
