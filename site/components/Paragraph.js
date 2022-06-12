import LiteYouTubeEmbed from "react-lite-youtube-embed";
import { YOUTUBE_REGEX } from "../lib/constants";

export const Paragraph = (props) => {
  if (
    typeof props.children == "object" &&
    props.children.props &&
    props.children.props.href &&
    YOUTUBE_REGEX.test(props.children.props.href)
  ) {
    const youtubeId = props.children.props.href.split(/^|=|\//).pop();
    return <LiteYouTubeEmbed id={youtubeId} />;
  }
  return <p {...props} />;
};
