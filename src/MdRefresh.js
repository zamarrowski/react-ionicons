import React from 'react'
import PropTypes from 'prop-types'

import SVG from './SVG'

const MdRefresh = props => {
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
      <path d="M512 776c-145.194 0-264-118.81-264-264 0-145.202 118.806-264 264-264 72.6 0 138.598 30.8 184.812 79.202l-140.812 140.798h308v-308l-103.396 103.404c-63.792-63.808-151.792-103.404-248.604-103.404-193.594 0-352 158.406-352 352s156.188 352 352 352c162.090 0 296.574-108.268 338.802-256h-93.102c-37.49 99.122-134.276 168-245.7 168z"></path>
    </SVG>
  )
}


MdRefresh.defaultProps = {
  // style
  style: {},
  color: '#000000',
  fontSize: '22px',

  // animation
  shake: false,
  beat: false,
  rotate: false,
}


MdRefresh.propTypes = {
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


export default MdRefresh
