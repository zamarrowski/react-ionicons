import React from 'react'
import PropTypes from 'prop-types'

import SvgContainer from './SvgContainer'

const ScanCircle = props => {
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
      <svg style={props.style} className={props.cssClasses} xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 512 512">{props.title ? <title>{props.title}</title> : ''}<path d="M256 48C141.31 48 48 141.31 48 256s93.31 208 208 208 208-93.31 208-208S370.69 48 256 48zm-40 320h-28a44.05 44.05 0 01-44-44v-28a16 16 0 0132 0v28a12 12 0 0012 12h28a16 16 0 010 32zm0-192h-28a12 12 0 00-12 12v28a16 16 0 01-32 0v-28a44.05 44.05 0 0144-44h28a16 16 0 010 32zm152 148a44.05 44.05 0 01-44 44h-28a16 16 0 010-32h28a12 12 0 0012-12v-28a16 16 0 0132 0zm0-108a16 16 0 01-32 0v-28a12 12 0 00-12-12h-28a16 16 0 010-32h28a44.05 44.05 0 0144 44z"/></svg>
    </SvgContainer>
  )
}


ScanCircle.defaultProps = {
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


ScanCircle.propTypes = {
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


export default ScanCircle