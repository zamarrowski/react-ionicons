import React from 'react'
import PropTypes from 'prop-types'

import SvgContainer from './SvgContainer'

const EllipsisHorizontalOutline = props => {
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
      <svg style={props.style} className={props.cssClasses} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">{props.title ? <title>{props.title}</title> : ''}<circle cx="256" cy="256" r="32" fill="none" stroke="currentColor" strokeMiterlimit="10" strokeWidth="32" /><circle cx="416" cy="256" r="32" fill="none" stroke="currentColor" strokeMiterlimit="10" strokeWidth="32" /><circle cx="96" cy="256" r="32" fill="none" stroke="currentColor" strokeMiterlimit="10" strokeWidth="32" /></svg>
    </SvgContainer>
  )
}


EllipsisHorizontalOutline.defaultProps = {
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


EllipsisHorizontalOutline.propTypes = {
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


export default EllipsisHorizontalOutline