import React from 'react'
import PropTypes from 'prop-types'

import SVG from './SVG'

const MdListBox = props => {
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
      <path d="M816 128h-608c-44.182 0-80 35.816-80 80v608c0 44.184 35.818 80 80 80h608c44.184 0 80-35.816 80-80v-608c0-44.184-35.816-80-80-80zM608 736h-320v-96h320v96zM736 560h-448v-96h448v96zM736 384h-448v-96h448v96z"></path>
    </SVG>
  )
}


MdListBox.defaultProps = {
  // style
  style: {},
  color: '#000000',
  fontSize: '22px',

  // animation
  shake: false,
  beat: false,
  rotate: false,
}


MdListBox.propTypes = {
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


export default MdListBox
