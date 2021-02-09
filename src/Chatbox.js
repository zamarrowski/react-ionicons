import React from 'react'
import PropTypes from 'prop-types'

import SvgContainer from './SvgContainer'

const Chatbox = props => {
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
      <svg style={props.style} className={props.cssClasses} xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 512 512">{props.title ? <title>{props.title}</title> : ''}<path d="M144 464a16 16 0 01-16-16v-64h-24a72.08 72.08 0 01-72-72V120a72.08 72.08 0 0172-72h304a72.08 72.08 0 0172 72v192a72.08 72.08 0 01-72 72H245.74l-91.49 76.29A16.05 16.05 0 01144 464z"/></svg>
    </SvgContainer>
  )
}


Chatbox.defaultProps = {
  // style
  style: {},
  color: '#000000',
  height: '22px',
  width: '22px',
  cssClasses: '',
  title: '',

  // animation
  shake: false,
  beat: false,
  rotate: false,
}


Chatbox.propTypes = {
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


export default Chatbox