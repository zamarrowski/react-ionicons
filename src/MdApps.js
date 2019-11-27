import React from 'react'
import PropTypes from 'prop-types'

import SVG from './SVG'

const MdApps = props => {
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
      <path d="M192 352h160v-160h-160v160zM432 832h160v-160h-160v160zM192 832h160v-160h-160v160zM192 592h160v-160h-160v160zM432 592h160v-160h-160v160zM672 192v160h160v-160h-160zM432 352h160v-160h-160v160zM672 592h160v-160h-160v160zM672 832h160v-160h-160v160z"></path>
    </SVG>
  )
}


MdApps.defaultProps = {
  // style
  style: {},
  color: '#000000',
  fontSize: '22px',

  // animation
  shake: false,
  beat: false,
  rotate: false,
}


MdApps.propTypes = {
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


export default MdApps
