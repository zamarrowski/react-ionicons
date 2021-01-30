import React from 'react'
import PropTypes from 'prop-types'

import SvgContainer from './SvgContainer'

const BriefcaseSharp = props => {
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
      <svg style={props.style} className={props.cssClasses} xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 512 512"><title>Briefcase</title><path d="M336 288H176v-32H16v196a12 12 0 0012 12h456a12 12 0 0012-12V256H336zM496 124a12 12 0 00-12-12H384V56a8 8 0 00-8-8H136a8 8 0 00-8 8v56H28a12 12 0 00-12 12v100h480zm-152-12H168V88h176z"/></svg>
    </SvgContainer>
  )
}


BriefcaseSharp.defaultProps = {
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


BriefcaseSharp.propTypes = {
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


export default BriefcaseSharp