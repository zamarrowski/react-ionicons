import React from 'react'
import PropTypes from 'prop-types'

import SvgContainer from './SvgContainer'

const ApertureSharp = props => {
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
      <svg style={props.style} className={props.cssClasses} xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 512 512">{props.title ? <title>{props.title}</title> : ''}<path d="M216 48l129.49 128.18V48H216zM181.47 58.38L80 134h176l-74.53-75.62zM336 344h128V216L336 344zM454 182L378 80v176l76-74zM48 166v128l128-128H48zM330 454l102-76H256l74 76zM58 330l76 102V256l-76 74zM345.49 222.12l-55.55-55.46h-67.88l-55.55 55.46v67.76l55.62 55.52c.44 0 .88-.06 1.33-.06h66.48l55.55-55.46zM165.98 336.09L166 464h128L165.98 336.09z"/></svg>
    </SvgContainer>
  )
}


ApertureSharp.defaultProps = {
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


ApertureSharp.propTypes = {
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


export default ApertureSharp