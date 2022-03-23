import Link from "next/link";
import ReactPlayer from "react-player";

const videoLinks = [
  "youtube.com",
  "dailymotion.com",
  "vimeo.com",
  "soundcloud.com",
  "facebook.com/video",
  "twitch.com"
]

export default function CustomLink (props) {
  const isExternalLink = props.href && props.href.startsWith("http");
  const isVideoLink = props.href && videoLinks.some(str => props.href.includes(str))

  const href = !isExternalLink && props.href.replace(".md", "");

  if (isExternalLink) {
    if (isVideoLink) return <ReactPlayer url={props.href} {...props} />
    return (
      <a target="_blank" rel="noopener noreferrer" href={props.href} {...props} />
    );
  }

  return <Link {...props} href={href} />;
}
