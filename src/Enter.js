import React from 'react'
import PropTypes from 'prop-types'

import SvgContainer from './SvgContainer'

const Enter = props => {
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
      <span dangerouslySetInnerHTML={{__html: '<svg xmlns="http://www.w3.org/2000/svg" class="ionicon" viewBox="0 0 512 512"><title>Enter</title><path d="M160 136v104h153.37l-52.68-52.69a16 16 0 0122.62-22.62l80 80a16 16 0 010 22.62l-80 80a16 16 0 01-22.62-22.62L313.37 272H160v104a56.06 56.06 0 0056 56h208a56.06 56.06 0 0056-56V136a56.06 56.06 0 00-56-56H216a56.06 56.06 0 00-56 56zM48 240a16 16 0 000 32h112v-32z"/></svg>'}} />
    </SvgContainer>
  )
}


Enter.defaultProps = {
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


Enter.propTypes = {
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


export default Enter