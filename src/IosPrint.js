import React from 'react'
import PropTypes from 'prop-types'

import SVG from './SVG'

const IosPrint = props => {
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
      <path d="M256 448h512v448h-512v-448z M255 449h512v448h-512v-448z M223 129h576v64h-576v-64z M865 225h-704c-35.29 0-66 25.684-66 60.618v316.786c0 34.936 30.71 66.598 66 66.598h62v-252h576v252h66c35.29 0 62-31.662 62-66.598v-316.786c0-34.934-26.71-60.618-62-60.618z"></path>
    </SVG>
  )
}


IosPrint.defaultProps = {
  // style
  style: {},
  color: '#000000',
  fontSize: '22px',

  // animation
  shake: false,
  beat: false,
  rotate: false,
}


IosPrint.propTypes = {
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


export default IosPrint
