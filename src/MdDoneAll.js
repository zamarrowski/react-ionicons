import React from 'react'
import PropTypes from 'prop-types'

import SVG from './SVG'

const MdDoneAll = props => {
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
      <path d="M775.162 279.424l-61.652-61.424-279.684 278.638 61.662 61.438 279.674-278.652zM962.344 218l-466.856 462.938-182.78-182.102-61.654 61.43 244.434 245.734 528.512-526.576-61.656-61.424zM0 560.266l246.642 245.734 61.658-61.426-244.432-245.738-63.868 61.43z"></path>
    </SVG>
  )
}


MdDoneAll.defaultProps = {
  // style
  style: {},
  color: '#000000',
  fontSize: '22px',

  // animation
  shake: false,
  beat: false,
  rotate: false,
}


MdDoneAll.propTypes = {
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


export default MdDoneAll
