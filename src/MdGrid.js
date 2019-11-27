import React from 'react'
import PropTypes from 'prop-types'

import SVG from './SVG'

const MdGrid = props => {
  return (
    <SVG
      style={props.style}
      className={props.className}
      fill={props.color}
      width={props.fontSize}
      height={props.fontSize}
      viewBox="0 0 1024 1024"
      onClick={props.onClick}
      rotate={props.rotate ? 1 : 0}
      shake={props.shake ? 1 : 0}
      beat={props.beat ? 1 : 0}
    >
      <path d="M819.2 128h-614.4c-42.2 0-76.8 34.6-76.8 76.8v614.4c0 42.2 34.6 76.8 76.8 76.8h614.4c42.2 0 76.8-34.6 76.8-76.8v-614.4c0-42.2-34.6-76.8-76.8-76.8zM358.4 819.2h-153.6v-153.6h153.6v153.6zM358.4 588.8h-153.6v-153.6h153.6v153.6zM358.4 358.4h-153.6v-153.6h153.6v153.6zM588.8 819.2h-153.6v-153.6h153.6v153.6zM588.8 588.8h-153.6v-153.6h153.6v153.6zM588.8 358.4h-153.6v-153.6h153.6v153.6zM819.2 819.2h-153.6v-153.6h153.6v153.6zM819.2 588.8h-153.6v-153.6h153.6v153.6zM819.2 358.4h-153.6v-153.6h153.6v153.6z"></path>
    </SVG>
  )
}


MdGrid.defaultProps = {
  // style
  style: {},
  color: '#000000',
  fontSize: '22px',

  // animation
  shake: false,
  beat: false,
  rotate: false,
}


MdGrid.propTypes = {
  // style
  style: PropTypes.object,
  color: PropTypes.string,
  fontSize: PropTypes.string,

  // animation
  shake: PropTypes.bool,
  beat: PropTypes.bool,
  rotate: PropTypes.bool,

  // functions
  onClick: PropTypes.func
}


export default MdGrid
