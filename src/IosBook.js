import React from 'react'
import PropTypes from 'prop-types'

import SVG from './SVG'

const IosBook = props => {
  return (
    <SVG
      style={props.style}
      className={props.className}
      fill={props.color}
      width={props.fontSize}
      height={props.fontSize}
      viewBox="0 0 1024 1024"
      onClick={props.onClick}
      rotate={props.rotate ? 1 : 0}
      shake={props.shake ? 1 : 0}
      beat={props.beat ? 1 : 0}
    >
      <path d="M328.932 128c-110.4 0-200.932 51.96-200.932 158v566h44.282c25.72-52.668 88.476-84 156.65-84 80.448 0 147.754 55.056 163.232 128h3.836v-705.308c-34.48-42.79-98.038-62.692-167.068-62.692z M695.242 128c-68.664 0-133.426 19.702-167.242 62.022v705.978h3.594c15.478-72.944 82.99-128 163.444-128 68.17 0 122.298 23.332 156.858 84h44.104v-566c0-106.040-90.354-158-200.758-158z"></path>
    </SVG>
  )
}


IosBook.defaultProps = {
  // style
  style: {},
  color: '#000000',
  fontSize: '22px',

  // animation
  shake: false,
  beat: false,
  rotate: false,
}


IosBook.propTypes = {
  // style
  style: PropTypes.object,
  color: PropTypes.string,
  fontSize: PropTypes.string,

  // animation
  shake: PropTypes.bool,
  beat: PropTypes.bool,
  rotate: PropTypes.bool,

  // functions
  onClick: PropTypes.func
}


export default IosBook
