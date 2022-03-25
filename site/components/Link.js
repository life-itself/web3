import Link from "next/link";
import ReactPlayer from "react-player";

const videoLinks = [
  "youtube.com",
  "dailymotion.com",
  "vimeo.com",
  "soundcloud.com",
  "facebook.com/watch",
  "twitch.com",
];

export const Paragraph = (props) => {
  if (
    typeof props.children == "object" &&
    props.children.props &&
    props.children.props.href &&
    videoLinks.some((str) => props.children.props.href.includes(str))
  )
    return (
      <div className="relative pt-[56.25%]" {...props}>
        <ReactPlayer
          className="absolute top-0 left-0"
          width="100%"
          height="100%"
          url={props.children.props.href}
        />
      </div>
    );
  return <p {...props} />;
};
