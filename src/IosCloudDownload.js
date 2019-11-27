import React from 'react'
import PropTypes from 'prop-types'

import SVG from './SVG'

const IosCloudDownload = props => {
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
      <path d="M496 865.176l-141.604-141.316-23.312 23.206 180.956 180.934 181.142-180.884-23.512-23.208-141.67 141.268v-225.176h-32z M826.024 324.226c-13.732-128.436-117.942-228.226-250.024-228.226-89.676 0-173.070 45.624-218.792 115.43-15.892-7.318-33.566-11.43-52.208-11.43-68.416 0-123.962 54.974-124.954 123.154-69.862 22.072-116.046 85.162-116.046 156.846 0 87.812 71.188 160 159 160h273v-224h32v224h273c87.812 0 159-72.188 159-160 0-79.296-58.054-143.768-133.976-155.774z"></path>
    </SVG>
  )
}


IosCloudDownload.defaultProps = {
  // style
  style: {},
  color: '#000000',
  fontSize: '22px',

  // animation
  shake: false,
  beat: false,
  rotate: false,
}


IosCloudDownload.propTypes = {
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


export default IosCloudDownload
