import React from 'react'
import PropTypes from 'prop-types'

import SvgContainer from './SvgContainer'

const ChatboxEllipsesSharp = props => {
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
      <span dangerouslySetInnerHTML={{__html: '<svg xmlns="http://www.w3.org/2000/svg" class="ionicon" viewBox="0 0 512 512"><title>Chatbox Ellipses</title><path d="M456 48H56a24 24 0 00-24 24v288a24 24 0 0024 24h72v80l117.74-80H456a24 24 0 0024-24V72a24 24 0 00-24-24zM160 248a32 32 0 1132-32 32 32 0 01-32 32zm96 0a32 32 0 1132-32 32 32 0 01-32 32zm96 0a32 32 0 1132-32 32 32 0 01-32 32zM456 80z"/></svg>'}} />
    </SvgContainer>
  )
}


ChatboxEllipsesSharp.defaultProps = {
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


ChatboxEllipsesSharp.propTypes = {
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


export default ChatboxEllipsesSharp