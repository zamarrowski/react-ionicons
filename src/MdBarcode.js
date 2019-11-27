import React from 'react'
import PropTypes from 'prop-types'

import SVG from './SVG'

const MdBarcode = props => {
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
      <path d="M176 256h96v512h-96v-512z M464 256h96v512h-96v-512z M320 288h96v448h-96v-448z M608 288h96v448h-96v-448z M752 256h96v512h-96v-512z M208 208v-96h-176v800h176v-96h-80v-608z M816 112v96h80v608h-80v96h176v-800z"></path>
    </SVG>
  )
}


MdBarcode.defaultProps = {
  // style
  style: {},
  color: '#000000',
  fontSize: '22px',

  // animation
  shake: false,
  beat: false,
  rotate: false,
}


MdBarcode.propTypes = {
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


export default MdBarcode
