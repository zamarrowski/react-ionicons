import React from 'react'
import PropTypes from 'prop-types'

import SvgContainer from './SvgContainer'

const HelpBuoy = props => {
  return (
    <SvgContainer
      height={props.height}
      width={props.width}
      color={props.color}
      onClick={props.onClick}
      rotate={props.rotate ? 1 : 0}
      shake={props.shake ? 1 : 0}
      beat={props.beat ? 1 : 0}
      className={props.className}
    >
      <svg style={props.style} className={props.cssClasses} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">{props.title ? <title>{props.title}</title> : ''}<path d="M414.39 97.61A224 224 0 1097.61 414.39 224 224 0 10414.39 97.61zM192.13 260.18a64 64 0 1159.69 59.69 64.07 64.07 0 01-59.69-59.69zm240-66.64l-96.37 5.84a4.06 4.06 0 01-3.44-1.59 96 96 0 00-18.07-18.07 4.06 4.06 0 01-1.59-3.44l5.84-96.37a4 4 0 015.42-3.51A193 193 0 01435.6 188.12a4 4 0 01-3.51 5.42zM193.54 79.91l5.84 96.37a4.06 4.06 0 01-1.59 3.44 96 96 0 00-18.07 18.07 4.06 4.06 0 01-3.44 1.59l-96.37-5.84a4 4 0 01-3.51-5.42A193 193 0 01188.12 76.4a4 4 0 015.42 3.51zM79.91 318.46l96.37-5.84a4.06 4.06 0 013.44 1.59 96 96 0 0018.07 18.07 4.06 4.06 0 011.59 3.44l-5.84 96.37a4 4 0 01-5.42 3.51A193 193 0 0176.4 323.88a4 4 0 013.51-5.42zm238.55 113.63l-5.84-96.37a4.06 4.06 0 011.59-3.44 96 96 0 0018.07-18.07 4.06 4.06 0 013.44-1.59l96.37 5.84a4 4 0 013.51 5.42A193 193 0 01323.88 435.6a4 4 0 01-5.42-3.51z" /></svg>
    </SvgContainer>
  )
}


HelpBuoy.defaultProps = {
  // style
  style: {},
  color: 'inherit',
  height: '22px',
  width: '22px',
  cssClasses: '',
  title: '',

  // animation
  shake: false,
  beat: false,
  rotate: false,
}


HelpBuoy.propTypes = {
  // style
  style: PropTypes.object,
  color: PropTypes.string,
  height: PropTypes.string,
  width: PropTypes.string,
  cssClasses: PropTypes.string,
  title: PropTypes.string,

  // animation
  shake: PropTypes.bool,
  beat: PropTypes.bool,
  rotate: PropTypes.bool,

  // functions
  onClick: PropTypes.func
}


export default HelpBuoy