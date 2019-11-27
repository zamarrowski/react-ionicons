import React from 'react'
import PropTypes from 'prop-types'

import SVG from './SVG'

const IosChatboxesOutline = props => {
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
      <path d="M128 128h512v192h32v-224h-576v448h224v-32h-192z M352 352v448h325.2l128 128h26.8v-128h96v-448h-576zM896 768h-96v109.2l-110-109.2h-306v-384h512v384z"></path>
    </SVG>
  )
}


IosChatboxesOutline.defaultProps = {
  // style
  style: {},
  color: '#000000',
  fontSize: '22px',

  // animation
  shake: false,
  beat: false,
  rotate: false,
}


IosChatboxesOutline.propTypes = {
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


export default IosChatboxesOutline
