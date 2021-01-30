import React from 'react'
import PropTypes from 'prop-types'

import SvgContainer from './SvgContainer'

const LogInSharp = props => {
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
      <svg style={props.style} className={props.cssClasses} xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 512 512"><title>Log In</title><path d="M432 80H192a16 16 0 00-16 16v144h153.37l-64-64L288 153.37l91.31 91.32a16 16 0 010 22.62L288 358.63 265.37 336l64-64H176v144a16 16 0 0016 16h240a16 16 0 0016-16V96a16 16 0 00-16-16zM64 240h112v32H64z"/></svg>
    </SvgContainer>
  )
}


LogInSharp.defaultProps = {
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


LogInSharp.propTypes = {
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


export default LogInSharp