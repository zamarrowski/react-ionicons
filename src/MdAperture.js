import React, { Component } from 'react'
import PropTypes from 'prop-types'

import SVG from './SVG'

class MdAperture extends Component {

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
        <path d="M512 64c-247.424 0-448 200.576-448 448s200.576 448 448 448 448-200.576 448-448-200.576-448-448-448zM783.53 783.53c-72.53 72.526-168.96 112.47-271.53 112.47s-199-39.944-271.53-112.47c-72.526-72.53-112.47-168.96-112.47-271.53s39.944-199 112.47-271.53c72.53-72.526 168.96-112.47 271.53-112.47s199 39.944 271.53 112.47c72.526 72.53 112.47 168.96 112.47 271.53s-39.944 199-112.47 271.53z M400.086 212.134c-81.262 30.342-146.868 92.764-181.434 171.866h293.348l-111.914-171.866z M825.594 576c4.198-20.68 6.406-42.082 6.406-64 0-73.248-24.628-140.734-66.032-194.668l-143.968 258.668h203.594z M719.946 268.79c-55.932-47.868-128.558-76.79-207.946-76.79-15.932 0-31.588 1.182-46.896 3.43l156.6 252.57 98.242-179.21z M198.408 448c-4.2 20.68-6.408 42.082-6.408 64 0 73.278 24.648 140.788 66.082 194.732l143.918-258.732h-203.592z M623.918 811.864c81.262-30.342 146.866-92.764 181.43-171.864h-293.348l111.918 171.864z M304.092 755.242c55.926 47.848 128.536 76.758 207.908 76.758 15.938 0 31.598-1.184 46.912-3.432l-156.584-252.568-98.236 179.242z"></path>
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


MdAperture.defaultProps = {
  // style
  style: {},
  color: '#000000',
  fontSize: '22px',

  // animation
  shake: false,
  beat: false,
  rotate: false,
}


MdAperture.propTypes = {
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


export default MdAperture
