import React from 'react'
import PropTypes from 'prop-types'

import SVG from './SVG'

const IosPhoneLandscape = props => {
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
      <path d="M64 352.6v317c0 36.6 29.2 66.2 65.8 66.2h762c36.8 0 68.2-29.6 68.2-66.2v-317c0-36.6-31.4-64.6-68.2-64.6h-762c-36.6 0-65.8 28-65.8 64.6zM110 542v-60c0-4.4 3.6-8 8-8s8 3.6 8 8v60c0 4.4-3.6 8-8 8s-8-3.6-8-8zM938 511c0 19.2-15.6 34.8-34.8 34.8s-34.8-15.6-34.8-34.8c0-19.2 15.6-34.8 34.8-34.8s34.8 15.6 34.8 34.8zM848 320v384h-682v-384h682z M883.2 511c0 11 9 20 19.8 20 11 0 20-9 20-20s-9-20-20-20c-10.8 0.2-19.8 9-19.8 20z"></path>
    </SVG>
  )
}


IosPhoneLandscape.defaultProps = {
  // style
  style: {},
  color: '#000000',
  fontSize: '22px',

  // animation
  shake: false,
  beat: false,
  rotate: false,
}


IosPhoneLandscape.propTypes = {
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


export default IosPhoneLandscape
