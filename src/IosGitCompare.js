import React from 'react'
import PropTypes from 'prop-types'

import SVG from './SVG'

const IosGitCompare = props => {
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
      <path d="M447.4 692.6c-6.2-6.2-16.4-6.2-22.6 0s-6.2 16.4 0 22.6l103.2 100.8h-208c-98.4 0-114-84.6-114-176v-320.8c64.2-7 114-61.2 114-127.2 0-70.6-57.4-128-128-128s-128 57.4-128 128c0 64.6 47.8 118 110 126.8v321.2c0 28.6 0 81.8 18 126 22 54.4 66.6 82 128 82h208l-99.4 100.8c-6.2 6.2-6.2 16.4 0 22.6 3.2 3 7.2 4.6 11.4 4.6s8.2-1.4 11.4-4.6l115.2-114.8c12.6-12.6 12.6-32.8 0-45.2l-119.2-118.8zM96 192c0-53 43-96 96-96s96 43 96 96-43 96-96 96-96-43-96-96z M850 705.2v-321.2c0-28.6 0-81.8-18-126-22-54.4-66.6-82-128-82h-208l99.4-100.8c6.2-6.2 6.2-16.4 0-22.6-3.2-3-7.2-4.6-11.4-4.6s-8.2 1.4-11.4 4.6l-115.2 114.8c-12.6 12.6-12.6 32.8 0 45.2l119.2 118.8c6.2 6.2 16.4 6.2 22.6 0s6.2-16.4 0-22.6l-103.2-100.8h208c98.4 0 114 84.6 114 176v320.8c-64.2 7-114 61.2-114 127.2 0 70.6 57.4 128 128 128s128-57.4 128-128c0-64.6-47.8-118-110-126.8zM832 928c-53 0-96-43-96-96s43-96 96-96 96 43 96 96-43 96-96 96z"></path>
    </SVG>
  )
}


IosGitCompare.defaultProps = {
  // style
  style: {},
  color: '#000000',
  fontSize: '22px',

  // animation
  shake: false,
  beat: false,
  rotate: false,
}


IosGitCompare.propTypes = {
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


export default IosGitCompare
