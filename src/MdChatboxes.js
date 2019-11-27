import React from 'react'
import PropTypes from 'prop-types'

import SVG from './SVG'

const MdChatboxes = props => {
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
      <path d="M783.106 128h-667.892c-8.952 0-19.214 7.49-19.214 16.318v428.434c0 8.826 10.262 17.248 19.214 17.248h114.786v177.788l180.256-177.788h372.85c8.954 0 14.894-8.422 14.894-17.248v-428.434c0-8.828-5.942-16.318-14.894-16.318z M912.792 254h-64.792v333.14c0 31.974-13.83 52.86-50.304 52.86h-361.504l-77.81 78h259.376l180.242 178v-178h114.792c8.956 0 15.208-8.524 15.208-17.364v-428.43c0-8.828-6.252-18.206-15.208-18.206z"></path>
    </SVG>
  )
}


MdChatboxes.defaultProps = {
  // style
  style: {},
  color: '#000000',
  fontSize: '22px',

  // animation
  shake: false,
  beat: false,
  rotate: false,
}


MdChatboxes.propTypes = {
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


export default MdChatboxes
