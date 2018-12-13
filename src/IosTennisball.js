import React, { Component } from 'react'
import PropTypes from 'prop-types'

import SVG from './SVG'

class IosTennisball extends Component {

  constructor(props) {
    super(props)
    this.state = {classNames: [], animationActive: false}
    this._getClasses = this._getClasses.bind(this)
  }

  render() {
    const style = {
      ...this.props.style,
      color: this.props.color,
      fontSize: this.props.fontSize,
    }

    return (
      <SVG
        style={this.props.style}
        className={this._getClasses()}
        fill={this.props.color}
        width={this.props.fontSize}
        height={this.props.fontSize}
        viewBox="0 0 1024 1024"
        onClick={this.props.onClick}
        rotate={this.props.rotate ? 1 : 0}
        shake={this.props.shake ? 1 : 0}
        beat={this.props.beat ? 1 : 0}
      >
        <path d="M96.1 503.112c-0.002 0.078-0.006 0.154-0.008 0.232 0 0 0.004 0 0.006 0 0-0.076 0-0.154 0.002-0.232z M520.622 927.83c0.132-0.004 0.266-0.012 0.398-0.014-0.132 0.002-0.266 0.002-0.398 0.008 0-0 0 0.002 0 0.006z M512 96.002c-5.172 0-10.58 0.128-15.704 0.316l-0.296-0.012c0 0.006 0 0.008 0 0.012-10 0.398-20 1.204-32 2.41 0-0.004 0-0.008 0-0.016 0 0.010 0.166 0.016 0.144 0.024-193.948 22.122-347.308 177.95-366.26 372.82-0.008 0.036 0.090 0.444 0.084 0.444 0.006 0 0.008 0 0.014 0-1.026 10-1.652 20-1.872 32-0.002 0-0.006 0-0.008 0l0.006-0.304c-0.056 2.86-0.108 5.554-0.108 8.43 0 229.704 185.954 415.876 415.682 415.876 13.712 0 28.318-0.766 40.318-2.062 0 0.004 0 0.012 0 0.012 0-0.008 0.426-0.016 0.48-0.028 194.872-18.972 350.494-172.172 372.624-366.072 0.008-0.028 0.176 0.148 0.184 0.148-0.004 0-0.012 0-0.016 0 1.778-16 2.726-31.718 2.726-47.808 0.002-229.702-186.258-416.19-415.998-416.19zM261.26 533.706c-41.79-16.948-85.576-26.86-130.488-29.632 0.22-10.748 0.876-21.39 1.972-31.904 105.136 6.55 208.406 49.954 288.75 130.292s123.752 183.594 130.304 288.718c-10.514 1.096-21.158 1.752-31.908 1.97-2.77-44.906-12.684-88.688-29.632-130.472-20.918-51.58-51.668-97.874-91.392-137.59-39.722-39.72-86.020-70.466-137.606-91.382zM595.444 428.53c-81.928-81.918-125.462-187.67-130.664-294.934 10.5-1.304 21.136-2.16 31.882-2.586 2.146 47.3 12.21 93.404 30.014 137.308 20.922 51.58 51.67 97.872 91.392 137.59 39.724 39.718 86.020 70.464 137.606 91.382 43.908 17.802 90.016 27.866 137.32 30.014-0.426 10.74-1.286 21.378-2.586 31.878-107.28-5.204-213.036-48.732-294.964-130.652z"></path>
      </SVG>
    )
  }

  _getClasses() {
    return [...this.state.classNames, this.props.className].join(' ')
  }

  _getPathByIconName() {
    let icon = icons.find(icon => icon.tags[0] === this.props.icon)
    if (icon) return icon.paths.join(' ')
    return ''
  }

}


IosTennisball.defaultProps = {
  // style
  style: {},
  color: '#000000',
  fontSize: '22px',

  // animation
  shake: false,
  beat: false,
  rotate: false,
}


IosTennisball.propTypes = {
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


export default IosTennisball
