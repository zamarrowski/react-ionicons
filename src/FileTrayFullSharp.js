import React from 'react'
import PropTypes from 'prop-types'

import SvgContainer from './SvgContainer'

const FileTrayFullSharp = props => {
  return (
    <SvgContainer
      height={props.height}
      width={props.width}
      color={props.color}
      onClick={props.onClick}
      rotate={props.rotate ? 1 : 0}
      shake={props.shake ? 1 : 0}
      beat={props.beat ? 1 : 0}
    >
      <svg style={props.style} className={props.cssClasses} xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 512 512"><title>File Tray Full</title><path d="M128 128h256v38H128zM112 192h288v38H112z"/><path d="M448 64H64L32 256v192h448V256zm-12 192H320a64 64 0 01-128 0H76l22-150h316z"/></svg>
    </SvgContainer>
  )
}


FileTrayFullSharp.defaultProps = {
  // style
  style: {},
  color: '#000000',
  height: '22px',
  width: '22px',
  cssClasses: '',

  // animation
  shake: false,
  beat: false,
  rotate: false,
}


FileTrayFullSharp.propTypes = {
  // style
  style: PropTypes.object,
  color: PropTypes.string,
  height: PropTypes.string,
  width: PropTypes.string,
  cssClasses: PropTypes.string,

  // animation
  shake: PropTypes.bool,
  beat: PropTypes.bool,
  rotate: PropTypes.bool,

  // functions
  onClick: PropTypes.func
}


export default FileTrayFullSharp