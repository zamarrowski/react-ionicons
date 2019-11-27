import React from 'react'
import PropTypes from 'prop-types'

import SVG from './SVG'

const MdDocument = props => {
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
      <path d="M576 96h-304c-44.184 0-80 35.816-80 80v672c0 44.184 35.816 80 80 80h480c44.184 0 80-35.816 80-80v-496l-256-256zM544 384v-224l224 224h-224z"></path>
    </SVG>
  )
}


MdDocument.defaultProps = {
  // style
  style: {},
  color: '#000000',
  fontSize: '22px',

  // animation
  shake: false,
  beat: false,
  rotate: false,
}


MdDocument.propTypes = {
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


export default MdDocument
