import { Tooltip } from './Tooltip';

/**
 * Component for adding previews on hovering over anchor tags with relative paths
 */
export const Anchor = (props) => {
  /* Check if the path is relative */
  const pathIsRelative = (path) => {
    return path &&
      path.indexOf("http:") !== 0 &&
      path.indexOf("https:") !== 0 &&
      path.indexOf("#") !== 0
  }

  if (pathIsRelative(props.href)) {
    return (
      <Tooltip {...props} render={ tooltipTriggerProps => (
        <a {...tooltipTriggerProps} />
      )}
      />
    )
  }
  return <a {...props} />;
};
