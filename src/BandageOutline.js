import React from 'react'
import PropTypes from 'prop-types'

import SvgContainer from './SvgContainer'

const BandageOutline = props => {
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
      <span dangerouslySetInnerHTML={{__html: '<svg xmlns="http://www.w3.org/2000/svg" class="ionicon" viewBox="0 0 512 512"><title>Bandage</title><rect x="-24.43" y="167.88" width="560.87" height="176.25" rx="88.12" ry="88.12" transform="rotate(-45 256 256.002)" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32"/><rect x="169.41" y="156.59" width="176" height="196" rx="32" ry="32" transform="rotate(45 257.409 254.582)" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32"/><circle cx="256" cy="208" r="16"/><circle cx="304" cy="256" r="16"/><circle cx="208" cy="256" r="16"/><circle cx="256" cy="304" r="16"/></svg>'}} />
    </SvgContainer>
  )
}


BandageOutline.defaultProps = {
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


BandageOutline.propTypes = {
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


export default BandageOutline