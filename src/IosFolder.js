import React from 'react'
import PropTypes from 'prop-types'

import SVG from './SVG'

const IosFolder = props => {
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
      <path d="M944 352h-864c-8.822 0-16 7.178-16 16v478c0 26.634 23.366 50 50 50h800c25.366 0 46-22.43 46-50v-478c0-8.822-7.178-16-16-16z M914 192h-484c-5.582 0-8.542-1.17-12.188-4.816l-45.338-45.326c-9.744-9.192-17.752-13.858-34.474-13.858h-224c-27.57 0-50 20.634-50 46v148.752c5.008-1.776 10.39-2.752 16-2.752h864c5.61 0 10.992 0.976 16 2.752v-84.752c0-26.654-19.346-46-46-46z"></path>
    </SVG>
  )
}


IosFolder.defaultProps = {
  // style
  style: {},
  color: '#000000',
  fontSize: '22px',

  // animation
  shake: false,
  beat: false,
  rotate: false,
}


IosFolder.propTypes = {
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


export default IosFolder
