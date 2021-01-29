import React from 'react'
import PropTypes from 'prop-types'

import SvgContainer from './SvgContainer'

const TrainSharp = props => {
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
      <span dangerouslySetInnerHTML={{__html: '<svg xmlns="http://www.w3.org/2000/svg" class="ionicon" viewBox="0 0 512 512"><title>Train</title><path d="M384 32h-64a16 16 0 00-16-16h-96a16 16 0 00-16 16h-64c-16 0-32 16-32 32v288c0 23.92 160 80 160 80s160-56.74 160-80V64c0-16-16-32-32-32zM256 352a48 48 0 1148-48 48 48 0 01-48 48zm112-152a8 8 0 01-8 8H152a8 8 0 01-8-8v-80a8 8 0 018-8h208a8 8 0 018 8z"/><path d="M314 432l15.32 16H182.58L198 432l-32-13-76.62 77h45.2l16-16h210.74l16 16h45.3l-76.36-77.75L314 432z"/></svg>'}} />
    </SvgContainer>
  )
}


TrainSharp.defaultProps = {
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


TrainSharp.propTypes = {
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


export default TrainSharp