import React from 'react'
import PropTypes from 'prop-types'

import SvgContainer from './SvgContainer'

const Disc = props => {
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
      <span dangerouslySetInnerHTML={{__html: '<svg xmlns="http://www.w3.org/2000/svg" class="ionicon" viewBox="0 0 512 512"><title>Disc</title><path d="M256 176a80 80 0 1080 80 80.09 80.09 0 00-80-80zm0 112a32 32 0 1132-32 32 32 0 01-32 32z"/><path d="M414.39 97.61A224 224 0 1097.61 414.39 224 224 0 10414.39 97.61zM256 368a112 112 0 11112-112 112.12 112.12 0 01-112 112z"/></svg>'}} />
    </SvgContainer>
  )
}


Disc.defaultProps = {
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


Disc.propTypes = {
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


export default Disc