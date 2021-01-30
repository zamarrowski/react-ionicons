import React from 'react'
import PropTypes from 'prop-types'

import SvgContainer from './SvgContainer'

const Bus = props => {
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
      <svg style={props.style} className={props.cssClasses} xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 512 512"><title>Bus</title><path d="M400 32H112a48 48 0 00-48 48v320a47.91 47.91 0 0016 35.74V454a26 26 0 0026 26h28a26 26 0 0026-26v-6h192v6a26 26 0 0026 26h28a26 26 0 0026-26v-18.26A47.91 47.91 0 00448 400V80a48 48 0 00-48-48zM147.47 399.82a32 32 0 1128.35-28.35 32 32 0 01-28.35 28.35zM236 288H112a16 16 0 01-16-16V144a16 16 0 0116-16h124a4 4 0 014 4v152a4 4 0 01-4 4zm20-192H112.46c-8.6 0-16-6.6-16.44-15.19A16 16 0 01112 64h287.54c8.6 0 16 6.6 16.44 15.19A16 16 0 01400 96H256zm20 32h124a16 16 0 0116 16v128a16 16 0 01-16 16H276a4 4 0 01-4-4V132a4 4 0 014-4zm60.18 243.47a32 32 0 1128.35 28.35 32 32 0 01-28.35-28.35z"/></svg>
    </SvgContainer>
  )
}


Bus.defaultProps = {
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


Bus.propTypes = {
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


export default Bus