import React from 'react'
import PropTypes from 'prop-types'

import SvgContainer from './SvgContainer'

const LogoVue = props => {
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
      <span dangerouslySetInnerHTML={{__html: '<svg xmlns="http://www.w3.org/2000/svg" class="ionicon" viewBox="0 0 512 512"><title>Logo Vue</title><path d="M256 144.03l-55.49-96.11h-79.43L256 281.61 390.92 47.92h-79.43L256 144.03z"/><path d="M409.4 47.92L256 313.61 102.6 47.92H15.74L256 464.08 496.26 47.92H409.4z"/></svg>'}} />
    </SvgContainer>
  )
}


LogoVue.defaultProps = {
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


LogoVue.propTypes = {
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


export default LogoVue