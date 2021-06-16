import React from 'react'
import PropTypes from 'prop-types'

import SvgContainer from './SvgContainer'

const AppsSharp = props => {
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
      <svg style={props.style} className={props.cssClasses} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">{props.title ? <title>{props.title}</title> : ''}<rect x="48" y="48" width="112" height="112" rx="8" ry="8" /><rect x="200" y="48" width="112" height="112" rx="8" ry="8" /><rect x="352" y="48" width="112" height="112" rx="8" ry="8" /><rect x="48" y="200" width="112" height="112" rx="8" ry="8" /><rect x="200" y="200" width="112" height="112" rx="8" ry="8" /><rect x="352" y="200" width="112" height="112" rx="8" ry="8" /><rect x="48" y="352" width="112" height="112" rx="8" ry="8" /><rect x="200" y="352" width="112" height="112" rx="8" ry="8" /><rect x="352" y="352" width="112" height="112" rx="8" ry="8" /></svg>
    </SvgContainer>
  )
}


AppsSharp.defaultProps = {
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


AppsSharp.propTypes = {
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


export default AppsSharp