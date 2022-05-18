import React from 'react';


const tooltipStyles = (theme) => ({
  height: 'auto',
  // maxWidth: '30rem',
  padding: '16px 22px',
  background: theme === 'light' ? '#fff' : '#000',
  color: theme === 'light' ? 'rgb(99, 98, 98)' : '#A8A8A8',
  borderRadius: '4px',
  boxShadow: 'rgba(0, 0, 0, 0.55) 0px 0px 16px -3px',
  fontSize: '90%'
})

const tooltipArrowStyles = ({ theme, x, y, side }) => ({
  position: "absolute",
  left: x != null ? `${x}px` : '',
  top: y != null ? `${y}px` : '',
  right: '',
  bottom: '',
  [side]: '-4px',
  height: "8px",
  width: "8px",
  background: theme === 'light' ? '#fff' : '#000',
  transform: "rotate(45deg)"
})

export const Tooltip = React.forwardRef((props, ref) => {
  const { theme, children, arrowRef, arrowX, arrowY, placement, ...tooltipProps } = props;

  console.log({ arrowRef, arrowX, arrowY, placement });

  const arrowPlacement = {
    top: 'bottom',
    right: 'left',
    bottom: 'top',
    left: 'right',
  }[placement.split('-')[0]];

  return (
    <div {...tooltipProps} ref={ref}>
      <div style={ tooltipStyles(theme) }>
        { children }
      </div>
      <div ref={arrowRef} style={ tooltipArrowStyles({
        theme,
        x: arrowX,
        y: arrowY,
        side: arrowPlacement
      }) }></div>
    </div>
  )
})
