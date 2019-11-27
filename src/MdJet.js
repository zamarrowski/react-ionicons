import React from 'react'
import PropTypes from 'prop-types'

import SVG from './SVG'

const MdJet = props => {
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
      <path d="M960 64c0 0-46.8-1.4-118.6 54.2-33.4 25.8-351.6 255.4-351.6 255.4l-337.6-8.4-88.2 78.8 219.6 110.4-17.2 21.6-175.8 0.2-14.4 81 126.2 97.4-53.2 119.6 120-52.8 97.4 126.2 81-14.4 0.2-175.6 21.8-17 110.6 219.4 78.6-88.2-8.4-337.4c0 0 229.8-318 255.6-351.2 55.4-72.2 54-119.2 54-119.2z"></path>
    </SVG>
  )
}


MdJet.defaultProps = {
  // style
  style: {},
  color: '#000000',
  fontSize: '22px',

  // animation
  shake: false,
  beat: false,
  rotate: false,
}


MdJet.propTypes = {
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


export default MdJet
