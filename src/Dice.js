import React from 'react'
import PropTypes from 'prop-types'

import SvgContainer from './SvgContainer'

const Dice = props => {
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
      <svg style={props.style} className={props.cssClasses} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">{props.title ? <title>{props.title}</title> : ''}<path d="M440.88 129.37L288.16 40.62a64.14 64.14 0 00-64.33 0L71.12 129.37a4 4 0 000 6.9L254 243.85a4 4 0 004.06 0L440.9 136.27a4 4 0 00-.02-6.9zM256 152c-13.25 0-24-7.16-24-16s10.75-16 24-16 24 7.16 24 16-10.75 16-24 16zM238 270.81L54 163.48a4 4 0 00-6 3.46v173.92a48 48 0 0023.84 41.39L234 479.48a4 4 0 006-3.46V274.27a4 4 0 00-2-3.46zM96 368c-8.84 0-16-10.75-16-24s7.16-24 16-24 16 10.75 16 24-7.16 24-16 24zm96-32c-8.84 0-16-10.75-16-24s7.16-24 16-24 16 10.75 16 24-7.16 24-16 24zM458 163.51L274 271.56a4 4 0 00-2 3.45V476a4 4 0 006 3.46l162.15-97.23A48 48 0 00464 340.86V167a4 4 0 00-6-3.49zM320 424c-8.84 0-16-10.75-16-24s7.16-24 16-24 16 10.75 16 24-7.16 24-16 24zm0-88c-8.84 0-16-10.75-16-24s7.16-24 16-24 16 10.75 16 24-7.16 24-16 24zm96 32c-8.84 0-16-10.75-16-24s7.16-24 16-24 16 10.75 16 24-7.16 24-16 24zm0-88c-8.84 0-16-10.75-16-24s7.16-24 16-24 16 10.75 16 24-7.16 24-16 24z" /></svg>
    </SvgContainer>
  )
}


Dice.defaultProps = {
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


Dice.propTypes = {
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


export default Dice