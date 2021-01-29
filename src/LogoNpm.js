import React from 'react'
import PropTypes from 'prop-types'

import SvgContainer from './SvgContainer'

const LogoNpm = props => {
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
      <span dangerouslySetInnerHTML={{__html: '<svg xmlns="http://www.w3.org/2000/svg" class="ionicon" viewBox="0 0 512 512"><title>Logo Npm</title><path d="M227.6 213.1H256v57.1h-28.4z"/><path d="M0 156v171.4h142.2V356H256v-28.6h256V156zm142.2 142.9h-28.4v-85.7H85.3v85.7H28.4V184.6h113.8zm142.2 0h-56.9v28.6h-56.9V184.6h113.8zm199.2 0h-28.4v-85.7h-28.4v85.7h-28.4v-85.7H370v85.7h-56.9V184.6h170.7v114.3z"/></svg>'}} />
    </SvgContainer>
  )
}


LogoNpm.defaultProps = {
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


LogoNpm.propTypes = {
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


export default LogoNpm