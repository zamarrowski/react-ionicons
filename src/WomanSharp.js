import React from 'react'
import PropTypes from 'prop-types'

import SvgContainer from './SvgContainer'

const WomanSharp = props => {
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
      <span dangerouslySetInnerHTML={{__html: '<svg xmlns="http://www.w3.org/2000/svg" class="ionicon" viewBox="0 0 512 512"><title>Woman</title><circle cx="255.75" cy="56" r="56"/><path d="M310.28 191.4h.05l7.66-2.3 36.79 122.6 46-13.8-16.21-54.16c0-.12 0-.24-.07-.36l-16.84-56.12-4.71-15.74-.9-3H362l-2.51-8.45a44.84 44.84 0 00-43-32.08H195.24a44.84 44.84 0 00-43 32.08l-2.51 8.45h-.06l-.9 3-4.71 15.74-16.84 56.12c0 .12 0 .24-.07.36l-16.21 54.16 46 13.8 36.76-122.6 7.54 2.26L148.25 368h51.5v144h52V368h8v144h52V368h51.51z"/></svg>'}} />
    </SvgContainer>
  )
}


WomanSharp.defaultProps = {
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


WomanSharp.propTypes = {
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


export default WomanSharp