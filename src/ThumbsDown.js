import React from 'react'
import PropTypes from 'prop-types'

import SvgContainer from './SvgContainer'

const ThumbsDown = props => {
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
      <svg style={props.style} className={props.cssClasses} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">{props.title ? <title>{props.title}</title> : ''}<path d="M39.94 178l144.16 6.12c4.61.36 23.9 1.22 23.9 25.88 0 23.8-19.16 25.33-24.14 25.88L39.94 242C27.27 241.87 16 227.56 16 210s11.27-31.87 23.94-32zm141.45 131.66L74.65 318C62 318 48 301.31 48 284.12v-.33c0-16.33 11.14-29.63 24.88-29.79l108.45 1.72C208 259 208 275.16 208 282.12c0 22.88-21.8 27.14-26.61 27.54zM90.15 32l89.37 8.93C204 41.86 208 58.18 208 68.4c0 18.39-13.41 24.6-26.67 24.6l-91 3C75.78 95.78 64 81.51 64 64s11.68-31.66 26.15-32zm-34.36 71.5l126.4 6.22c9.39.63 25.81 3 25.81 26.36 0 12-4.35 25.62-25 27.53L55.79 167.5C42.65 167.35 32 154 32 136.08s10.65-32.43 23.79-32.58z" /><path d="M378.45 273.93A15.84 15.84 0 01386 272a15.93 15.93 0 00-7.51 1.91zM337.86 343.22l-.13.22a2.53 2.53 0 01.13-.22c20.5-35.51 30.36-55 33.82-62-3.47 7.06-13.34 26.51-33.82 62z" fill="none" /><path d="M372.66 279.16l-1 2a16.29 16.29 0 016.77-7.26 16.48 16.48 0 00-5.77 5.26z" /><path d="M195.94 459.38C205.37 472.67 221 480 240 480a16 16 0 0014.31-8.85c3-6.06 15.25-24 28.19-42.9 18-26.33 40.35-59.08 55.23-84.81l.13-.22c20.48-35.49 30.35-54.94 33.82-62l1-2a16.48 16.48 0 015.79-5.23A15.93 15.93 0 01386 272h25.32A84.7 84.7 0 00496 187.3v-38.6A84.7 84.7 0 00411.31 64h-48.79a17.46 17.46 0 01-9.58-2.89C330 46.13 286.66 32 240 32c-7.45 0-14.19.14-20.27.38a8 8 0 00-6.2 12.68l.1.14C222.2 57.59 224 71 224 80a61.16 61.16 0 01-5.19 24.77 17.38 17.38 0 000 14.06 63.81 63.81 0 010 50.39 17.32 17.32 0 000 14 62.13 62.13 0 010 49.58 18.13 18.13 0 000 14.68A60.41 60.41 0 01224 273c0 8.2-2 21.3-8 31.18a15.66 15.66 0 00-1.14 13.65c.38 1 .76 2.06 1.13 3.17a24.8 24.8 0 01.86 11.57c-3 19.35-9.67 36.3-16.74 54.16-3.08 7.78-6.27 15.82-9.22 24.27-6.14 17.56-4.3 35.2 5.05 48.38z" /></svg>
    </SvgContainer>
  )
}


ThumbsDown.defaultProps = {
  // style
  style: {},
  color: 'inherit',
  height: '22px',
  width: '22px',
  cssClasses: '',
  title: '',

  // animation
  shake: false,
  beat: false,
  rotate: false,
}


ThumbsDown.propTypes = {
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


export default ThumbsDown