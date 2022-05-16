import Trigger from 'rc-trigger'
import { Content } from './Content'

const position = {
  bottom: {
    points: ['tc', 'bc'],
    offset: [0, 10]
  },
  right: {
    points: ['tl', 'tc'],
    offset: [20, 0]
  },
  top: {
    points: ['bc', 'tc'],
    offset: [0, -10]
  }
}

export const Tooltip = (props) => {
  const { children, value, theme, mouseEnterDelay = 0.5 } = props;
  return (
    <Trigger
      action={['hover']}
      popup={<Content theme={theme} value={value} />}
      mouseEnterDelay={mouseEnterDelay}
      prefixCls='trigger'
      popupAlign={position.bottom}
    >
    {children}
    </Trigger>
  )
}
