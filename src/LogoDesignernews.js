import React from 'react'
import PropTypes from 'prop-types'

import SVG from './SVG'

const LogoDesignernews = props => {
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
      <path d="M580.8 290l-126.8-98 127.2 204.4z M658 192v326h-72.8l-126.4-197.2 3.4 197.2h-80.2v-214l-74.6-58.6c2 2.4 4 4.8 5.8 7.4 20 27.8 30 61 30 101 0 98.4-61.2 164.2-153.8 164.2h-125.4v0.8l399.2 313.2h496.8v-403.8l-302-236.2z M259.8 356.2c0-58-28.4-90.2-79.4-90.2h-38.4v178h38c52 0 79.8-30.8 79.8-87.8z"></path>
    </SVG>
  )
}


LogoDesignernews.defaultProps = {
  // style
  style: {},
  color: '#000000',
  fontSize: '22px',

  // animation
  shake: false,
  beat: false,
  rotate: false,
}


LogoDesignernews.propTypes = {
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


export default LogoDesignernews
