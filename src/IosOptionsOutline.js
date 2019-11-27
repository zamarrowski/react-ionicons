import React from 'react'
import PropTypes from 'prop-types'

import SVG from './SVG'

const IosOptionsOutline = props => {
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
      <path d="M704 208c17.674 0 32 14.326 32 32s-14.326 32-32 32-32-14.326-32-32 14.326-32 32-32zM704 176c-35.29 0-64 28.71-64 64s28.71 64 64 64 64-28.71 64-64-28.71-64-64-64v0z M704 752c17.674 0 32 14.326 32 32s-14.326 32-32 32-32-14.326-32-32 14.326-32 32-32zM704 720c-35.29 0-64 28.71-64 64s28.71 64 64 64 64-28.71 64-64-28.71-64-64-64v0z M320 480c17.674 0 32 14.326 32 32s-14.326 32-32 32-32-14.326-32-32 14.326-32 32-32zM320 448c-35.29 0-64 28.71-64 64s28.71 64 64 64 64-28.71 64-64-28.71-64-64-64v0z M414.64 496h545.36v32h-545.36c0.878-5.208 1.36-10.546 1.36-16s-0.48-10.792-1.36-16z M224 512c0 5.454 0.48 10.792 1.36 16h-161.36v-32h161.36c-0.88 5.208-1.36 10.546-1.36 16z M798.64 768h161.36v32h-161.36c0.878-5.208 1.36-10.546 1.36-16s-0.48-10.792-1.36-16z M608 784c0 5.454 0.48 10.792 1.36 16h-545.36v-32h545.36c-0.88 5.208-1.36 10.546-1.36 16z M798.64 224h161.36v32h-161.36c0.878-5.208 1.36-10.546 1.36-16s-0.48-10.792-1.36-16z M609.36 224c-0.878 5.208-1.36 10.546-1.36 16s0.48 10.792 1.36 16h-545.36v-32h545.36z"></path>
    </SVG>
  )
}


IosOptionsOutline.defaultProps = {
  // style
  style: {},
  color: '#000000',
  fontSize: '22px',

  // animation
  shake: false,
  beat: false,
  rotate: false,
}


IosOptionsOutline.propTypes = {
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


export default IosOptionsOutline
