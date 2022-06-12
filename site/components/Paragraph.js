import LiteYouTubeEmbed from "react-lite-youtube-embed";
import TwitterEmbed from "./TwitterEmbed";
import { YOUTUBE_REGEX, TWITTER_REGEX } from "../lib/constants";

export const Paragraph = (props) => {
  if (
    typeof props.children == "object" &&
    props.children.props &&
    props.children.props.href
  ) {
    if (YOUTUBE_REGEX.test(props.children.props.href)) {
      const youtubeId = props.children.props.href.split(/^|=|\//).pop();
      return <LiteYouTubeEmbed id={youtubeId} />;
    }

    if (TWITTER_REGEX.test(props.children.props.href)) {
      return <TwitterEmbed url={props.children.props.href} {...props} />;
    }
  }
  return <p {...props} />;
};
