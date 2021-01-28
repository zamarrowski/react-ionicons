import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'

import SvgContainer from './SvgContainer'

const ReactIonicon = props => {

  const [importedIconRef, setImportedIconRef] = useState(null)

  useEffect(() => {
    import(`!!@svgr/webpack?-svgo,+titleProp,+ref!./svgicons/${props.icon}.svg`).then(icon => {
      setImportedIconRef(icon.default)
    })
  }, [props.icon])

  if (importedIconRef) {
    const Icon = importedIconRef
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
        <Icon style={props.style} className={props.cssClasses} />
      </SvgContainer>
    )
  }
  if (!importedIconRef) return null
}


ReactIonicon.defaultProps = {
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


ReactIonicon.propTypes = {
  // style
  icon: PropTypes.string.isRequired,
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


export default ReactIonicon