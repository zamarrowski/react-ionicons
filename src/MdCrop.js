import React from 'react'
import PropTypes from 'prop-types'

import SVG from './SVG'

const MdCrop = props => {
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
      <path d="M704 625.4h75.6v-305.4c0-41.6-34-75.6-75.6-75.6h-305.4v75.6h305.4v305.4zM320 692.4v-596.4h-75.6v148.4h-148.4v75.6h148.4v372.4c0 41.6 34 75.6 75.6 75.6h384v160h75.6v-160h148.4v-75.6h-608z"></path>
    </SVG>
  )
}


MdCrop.defaultProps = {
  // style
  style: {},
  color: '#000000',
  fontSize: '22px',

  // animation
  shake: false,
  beat: false,
  rotate: false,
}


MdCrop.propTypes = {
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


export default MdCrop
