import React from 'react'
import PropTypes from 'prop-types'

import SvgContainer from './SvgContainer'

const CheckmarkDoneCircleSharp = props => {
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
      <span dangerouslySetInnerHTML={{__html: '<svg xmlns="http://www.w3.org/2000/svg" class="ionicon" viewBox="0 0 512 512"><title>Checkmark Done Circle</title><path d="M256 48C141.31 48 48 141.31 48 256s93.31 208 208 208 208-93.31 208-208S370.69 48 256 48zm48.19 121.42l24.1 21.06-73.61 84.1-24.1-23.06zM191.93 342.63L121.37 272 144 249.37 214.57 320zm65 .79L185.55 272l22.64-22.62 47.16 47.21 111.13-127.17 24.1 21.06z"/></svg>'}} />
    </SvgContainer>
  )
}


CheckmarkDoneCircleSharp.defaultProps = {
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


CheckmarkDoneCircleSharp.propTypes = {
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


export default CheckmarkDoneCircleSharp