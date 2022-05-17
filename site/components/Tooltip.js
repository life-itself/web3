const tooltipTextStyles = (theme) => ({
  padding: '16px 22px',
  fontSize: '11px',
  background: theme === 'light' ? '#fff' : '#000',
  // color: theme === 'light' ? 'black' : 'white',
  pointerEvents: 'none',
  borderRadius: '4px',
  position: 'absolute'
})

// const tooltipBoxStyles = (theme) => ({
//   color: theme === 'light' ? 'rgb(99, 98, 98)' : '#A8A8A8',
//   transition: "0.1s",
//   width: "50vw"
// })

export const Tooltip = (props) => {
  const { theme, content } = props;
  return (
    <div>
      <div style={ tooltipTextStyles(theme) }>
        { content }
      </div>
      {/* <div style={footer(theme)}>{wikiLogo(theme)}</div> */}
      {/* {arrow(theme)} */}
    </div>
  )
}
