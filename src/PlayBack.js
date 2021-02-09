import React from 'react'
import PropTypes from 'prop-types'

import SvgContainer from './SvgContainer'

const PlayBack = props => {
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
      <svg style={props.style} className={props.cssClasses} xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 512 512">{props.title ? <title>{props.title}</title> : ''}<path d="M30.71 229.47l188.87-113a30.54 30.54 0 0131.09-.39 33.74 33.74 0 0116.76 29.47v79.05l180.72-108.16a30.54 30.54 0 0131.09-.39A33.74 33.74 0 01496 145.52v221A33.73 33.73 0 01479.24 396a30.54 30.54 0 01-31.09-.39L267.43 287.4v79.08A33.73 33.73 0 01250.67 396a30.54 30.54 0 01-31.09-.39l-188.87-113a31.27 31.27 0 010-53z"/></svg>
    </SvgContainer>
  )
}


PlayBack.defaultProps = {
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


PlayBack.propTypes = {
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


export default PlayBack