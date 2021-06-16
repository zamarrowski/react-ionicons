import React from 'react'
import PropTypes from 'prop-types'

import SvgContainer from './SvgContainer'

const CellularOutline = props => {
  return (
    <SvgContainer
      height={props.height}
      width={props.width}
      color={props.color}
      onClick={props.onClick}
      rotate={props.rotate ? 1 : 0}
      shake={props.shake ? 1 : 0}
      beat={props.beat ? 1 : 0}
      className={props.className}
    >
      <svg style={props.style} className={props.cssClasses} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">{props.title ? <title>{props.title}</title> : ''}<rect x="416" y="96" width="64" height="320" rx="8" ry="8" fill="none" stroke="currentColor" strokeLinejoin="round" strokeWidth="32" /><rect x="288" y="176" width="64" height="240" rx="8" ry="8" fill="none" stroke="currentColor" strokeLinejoin="round" strokeWidth="32" /><rect x="160" y="240" width="64" height="176" rx="8" ry="8" fill="none" stroke="currentColor" strokeLinejoin="round" strokeWidth="32" /><rect x="32" y="304" width="64" height="112" rx="8" ry="8" fill="none" stroke="currentColor" strokeLinejoin="round" strokeWidth="32" /></svg>
    </SvgContainer>
  )
}


CellularOutline.defaultProps = {
  // style
  style: {},
  color: 'inherit',
  height: '22px',
  width: '22px',
  cssClasses: '',
  title: '',

  // animation
  shake: false,
  beat: false,
  rotate: false,
}


CellularOutline.propTypes = {
  // style
  style: PropTypes.object,
  color: PropTypes.string,
  height: PropTypes.string,
  width: PropTypes.string,
  cssClasses: PropTypes.string,
  title: PropTypes.string,

  // animation
  shake: PropTypes.bool,
  beat: PropTypes.bool,
  rotate: PropTypes.bool,

  // functions
  onClick: PropTypes.func
}


export default CellularOutline