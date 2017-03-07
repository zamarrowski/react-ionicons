import React, { Component } from 'react'

import styles from '../lib/index.css'
import ionicons from './../ionicons/css/ionicons.min.css'


class Ionicon extends Component {

  constructor(props) {
    super(props)
    this.state = {classNames: [this.props.icon], animationActive: false}
    this._getClasses = this._getClasses.bind(this)
  }

  componentWillMount() {
    this._manageAnimation('shake')
    this._manageAnimation('beat')
    this._manageAnimation('rotate')
  }

  render() {
    const style = {
      ...this.props.style,
      color: this.props.color,
      fontSize: this.props.fontSize,
    }

    return (
      <i className={this._getClasses()} style={style} />
    )
  }

  _getClasses() {
    return [...this.state.classNames].join(' ')
  }

  _manageAnimation(animation) {
    if (this.props[animation] && !this.state.animationActive) {
      this.setState({
        animationActive: true,
        classNames: [...this.state.classNames, animation]
      })
    }
  }
}


Ionicon.defaultProps = {
  // style
  style: {},
  color: '#000000',
  fontSize: '22px',

  // animation
  shake: false,
  beat: false,
  rotate: false,
}


Ionicon.propTypes = {
  // style
  style: React.PropTypes.object,
  color: React.PropTypes.string,
  fontSize: React.PropTypes.string,

  // animation
  shake: React.PropTypes.bool,
  beat: React.PropTypes.bool,
  rotate: React.PropTypes.bool
}


export default Ionicon
