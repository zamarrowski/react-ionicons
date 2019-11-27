import React from 'react'
import PropTypes from 'prop-types'

import SVG from './SVG'

const IosFilmOutline = props => {
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
      <path d="M112 176v672h800v-672h-800zM256 816h-112v-96h112v96zM256 688h-112v-96h112v96zM256 560h-112v-96h112v96zM256 432h-112v-96h112v96zM256 304h-112v-96h112v96zM736 816h-448v-288h448v288zM736 496h-448v-288h448v288zM880 816h-112v-96h112v96zM880 688h-112v-96h112v96zM880 560h-112v-96h112v96zM880 432h-112v-96h112v96zM880 304h-112v-96h112v96z"></path>
    </SVG>
  )
}


IosFilmOutline.defaultProps = {
  // style
  style: {},
  color: '#000000',
  fontSize: '22px',

  // animation
  shake: false,
  beat: false,
  rotate: false,
}


IosFilmOutline.propTypes = {
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


export default IosFilmOutline
