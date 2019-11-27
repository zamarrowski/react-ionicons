import React from 'react'
import PropTypes from 'prop-types'

import SVG from './SVG'

const IosMailOpenOutline = props => {
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
      <path d="M512 128l-384 256v512h768v-512l-384-256zM864 864h-704v-427.2l229.8 174.2-135.8 154.4 4 4 157.4-138.8 96.6 73.4 96.2-73.4 157.6 139 4-4-136-154.6 230-175.6v428.6zM512 663.6l-306.6-235.6h178.6v-6.4l-219.8-25.4-0.6-0.4 348.4-227.6 349.2 228-221.2 25.4v6.4h180.8l-308.8 235.6z"></path>
    </SVG>
  )
}


IosMailOpenOutline.defaultProps = {
  // style
  style: {},
  color: '#000000',
  fontSize: '22px',

  // animation
  shake: false,
  beat: false,
  rotate: false,
}


IosMailOpenOutline.propTypes = {
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


export default IosMailOpenOutline
