import React from 'react'
import PropTypes from 'prop-types'

import SVG from './SVG'

const IosNavigateOutline = props => {
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
      <path d="M512 129c102.2 0 198.4 39.8 270.8 112.2s112.2 168.4 112.2 270.8-39.8 198.4-112.2 270.8-168.4 112.2-270.8 112.2-198.4-39.8-270.8-112.2c-72.2-72.4-112.2-168.6-112.2-270.8s39.8-198.4 112.2-270.8c72.4-72.2 168.6-112.2 270.8-112.2zM512 96c-229.8 0-416 186.2-416 416s186.2 416 416 416c229.8 0 416-186.2 416-416s-186.2-416-416-416v0z M704 320l-447.4 192h255.4v256z"></path>
    </SVG>
  )
}


IosNavigateOutline.defaultProps = {
  // style
  style: {},
  color: '#000000',
  fontSize: '22px',

  // animation
  shake: false,
  beat: false,
  rotate: false,
}


IosNavigateOutline.propTypes = {
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


export default IosNavigateOutline
