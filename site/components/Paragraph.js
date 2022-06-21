import LiteYouTubeEmbed from "react-lite-youtube-embed";
import TwitterEmbed from "./TwitterEmbed";
import { TWITTER_REGEX, YOUTUBE_ID_REGEX } from "../lib/constants";

export const Paragraph = (props) => {
  if (
    typeof props.children == "object" &&
    props.children.props &&
    props.children.props.href
  ) {
    const href = props.children.props.href
    
    if (YOUTUBE_ID_REGEX.test(href)) {
      const youtubeId = href.match(YOUTUBE_ID_REGEX)[1];
      let startTime = href.match(/t=[0-9]*/)
      if (startTime) startTime = startTime[0].split("=").pop()
      return <LiteYouTubeEmbed id={youtubeId} params={`start=${startTime}`} />;
    }

    if (TWITTER_REGEX.test(href)) {
      return <TwitterEmbed url={href} {...props} />;
    }
  }
  return <p {...props} />;
};
