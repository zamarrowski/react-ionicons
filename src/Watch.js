import React from 'react'
import PropTypes from 'prop-types'

import SvgContainer from './SvgContainer'

const Watch = props => {
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
      <svg style={props.style} className={props.cssClasses} xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 512 512">{props.title ? <title>{props.title}</title> : ''}<rect x="136" y="136" width="240" height="240" rx="56" ry="56"/><path d="M336 96V32a16 16 0 00-16-16H192a16 16 0 00-16 16v64a80.09 80.09 0 00-80 80v160a80.09 80.09 0 0080 80v64a16 16 0 0016 16h128a16 16 0 0016-16v-64a80.09 80.09 0 0080-80V176a80.09 80.09 0 00-80-80zm56 224a72.08 72.08 0 01-72 72H192a72.08 72.08 0 01-72-72V192a72.08 72.08 0 0172-72h128a72.08 72.08 0 0172 72z"/></svg>
    </SvgContainer>
  )
}


Watch.defaultProps = {
  // style
  style: {},
  color: '#000000',
  height: '22px',
  width: '22px',
  cssClasses: '',
  title: '',

  // animation
  shake: false,
  beat: false,
  rotate: false,
}


Watch.propTypes = {
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


export default Watch