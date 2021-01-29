import React from 'react'
import PropTypes from 'prop-types'

import SvgContainer from './SvgContainer'

const DiscOutline = props => {
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
      <span dangerouslySetInnerHTML={{__html: '<svg xmlns="http://www.w3.org/2000/svg" class="ionicon" viewBox="0 0 512 512"><title>Disc</title><circle cx="256" cy="256" r="208" fill="none" stroke="currentColor" stroke-miterlimit="10" stroke-width="32"/><circle cx="256" cy="256" r="96" fill="none" stroke="currentColor" stroke-miterlimit="10" stroke-width="32"/><circle cx="256" cy="256" r="32"/></svg>'}} />
    </SvgContainer>
  )
}


DiscOutline.defaultProps = {
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


DiscOutline.propTypes = {
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


export default DiscOutline