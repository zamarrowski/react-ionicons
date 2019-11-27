import React from 'react'
import PropTypes from 'prop-types'

import SVG from './SVG'

const MdHeadset = props => {
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
      <path d="M512 96c-212 0-384 176.4-384 394.2v306.6c0 72.6 57.2 131.4 128 131.4h128v-352.2h-170.6v-85.8c0-169.4 133.6-306.6 298.6-306.6s298.6 137 298.6 306.6v85.8h-170.6v352h128c70.8 0 128-58.6 128-131.4v-306.4c0-217.8-172-394.2-384-394.2z"></path>
    </SVG>
  )
}


MdHeadset.defaultProps = {
  // style
  style: {},
  color: '#000000',
  fontSize: '22px',

  // animation
  shake: false,
  beat: false,
  rotate: false,
}


MdHeadset.propTypes = {
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


export default MdHeadset
