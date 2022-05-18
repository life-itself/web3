import ReactPlayer from "react-player";
import TwitterEmbed from "./TwitterEmbed";
import { YOUTUBE_REGEX, TWITTER_REGEX } from "../lib/constants";

export const Paragraph = (props) => {
  if (
    typeof props.children == "object" &&
    props.children.props &&
    props.children.props.href
  ) {
    if (YOUTUBE_REGEX.test(props.children.props.href)) {
      return (
        <div className="relative pt-[56.25%] my-8" {...props}>
          <ReactPlayer
            className="absolute top-0 left-0"
            width="100%"
            height="100%"
            url={props.children.props.href}
          />
        </div>
      );
    }

    if (TWITTER_REGEX.test(props.children.props.href)) {
      return <TwitterEmbed url={props.children.props.href} {...props} />;
    }
  }

  return <p {...props} />;
};
