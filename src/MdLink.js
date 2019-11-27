import React from 'react'
import PropTypes from 'prop-types'

import SVG from './SVG'

const MdLink = props => {
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
      <path d="M149.2 512c0-76.6 62.2-138.8 138.8-138.8h176v-85.2h-176c-123.6 0-224 100.4-224 224s100.4 224 224 224h176v-85.2h-176c-76.6 0-138.8-62.2-138.8-138.8zM320 556h384v-88h-384v88zM736 288h-176v85.2h176c76.6 0 138.8 62.2 138.8 138.8s-62.2 138.8-138.8 138.8h-176v85.2h176c123.6 0 224-100.4 224-224s-100.4-224-224-224z"></path>
    </SVG>
  )
}


MdLink.defaultProps = {
  // style
  style: {},
  color: '#000000',
  fontSize: '22px',

  // animation
  shake: false,
  beat: false,
  rotate: false,
}


MdLink.propTypes = {
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


export default MdLink
