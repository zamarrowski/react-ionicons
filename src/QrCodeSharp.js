import React from 'react'
import PropTypes from 'prop-types'

import SvgContainer from './SvgContainer'

const QrCodeSharp = props => {
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
      <span dangerouslySetInnerHTML={{__html: '<svg xmlns="http://www.w3.org/2000/svg" class="ionicon" viewBox="0 0 512 512"><title>Qr Code</title><path d="M336 336h80v80h-80zM272 272h64v64h-64zM416 416h64v64h-64zM432 272h48v48h-48zM272 432h48v48h-48zM336 96h80v80h-80z"/><path d="M480 240H272V32h208zm-164-44h120V76H316zM96 96h80v80H96z"/><path d="M240 240H32V32h208zM76 196h120V76H76zM96 336h80v80H96z"/><path d="M240 480H32V272h208zM76 436h120V316H76z"/></svg>'}} />
    </SvgContainer>
  )
}


QrCodeSharp.defaultProps = {
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


QrCodeSharp.propTypes = {
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


export default QrCodeSharp