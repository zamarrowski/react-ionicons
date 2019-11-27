import React from 'react'
import PropTypes from 'prop-types'

import SVG from './SVG'

const MdGitNetwork = props => {
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
      <path d="M896 192c0-70.6-57.4-128-128-128s-128 57.4-128 128c0 47.2 25.8 88.6 64 110.8v105.6l-192 96-192-96v-105.6c38.2-22.2 64-63.6 64-110.8 0-70.6-57.4-128-128-128s-128 57.4-128 128c0 47.2 25.8 88.6 64 110.8v184.8l256 128v105.6c-38.2 22.2-64 63.6-64 110.8 0 70.6 57.4 128 128 128s128-57.4 128-128c0-47.2-25.8-88.6-64-110.8v-105.6l256-128v-184.8c38.2-22.2 64-63.6 64-110.8zM256 112c44.2 0 80 35.8 80 80s-35.8 80-80 80-80-35.8-80-80 35.8-80 80-80zM512 912c-44.2 0-80-35.8-80-80s35.8-80 80-80 80 35.8 80 80-35.8 80-80 80zM768 272c-44.2 0-80-35.8-80-80s35.8-80 80-80 80 35.8 80 80-35.8 80-80 80z"></path>
    </SVG>
  )
}


MdGitNetwork.defaultProps = {
  // style
  style: {},
  color: '#000000',
  fontSize: '22px',

  // animation
  shake: false,
  beat: false,
  rotate: false,
}


MdGitNetwork.propTypes = {
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


export default MdGitNetwork
