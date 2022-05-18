import React from 'react';


const tooltipBoxStyle = (theme) => ({
  height: 'auto',
  maxWidth: '60vw',
  padding: '1rem',
  background: theme === 'light' ? '#fff' : '#000',
  color: theme === 'light' ? 'rgb(99, 98, 98)' : '#A8A8A8',
  borderRadius: '4px',
  boxShadow: 'rgba(0, 0, 0, 0.55) 0px 0px 16px -3px',
})

const tooltipBodyStyle = () => ({
  maxHeight: '3.6rem',
  position: 'relative',
  lineHeight: '1.2rem',
  overflow: 'hidden',
})

const tooltipArrowStyle = ({ theme, x, y, side }) => ({
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

  const arrowPlacement = {
    top: 'bottom',
    right: 'left',
    bottom: 'top',
    left: 'right',
  }[placement.split('-')[0]];

  return (
    <div className="tooltip" {...tooltipProps} ref={ref}>
      <div className="tooltip-box" style={ tooltipBoxStyle(theme) }>
        <div className="tooltip-body" style={ tooltipBodyStyle() }>
          { children }
        </div>
      </div>
      <div className="tooltip-arrow" ref={arrowRef} style={ tooltipArrowStyle({
        theme,
        x: arrowX,
        y: arrowY,
        side: arrowPlacement
      }) }></div>
    </div>
  )
})
