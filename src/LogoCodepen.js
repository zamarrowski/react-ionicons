import React, { Component } from 'react'
import PropTypes from 'prop-types'

import SVG from './SVG'

class LogoCodepen extends Component {

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
        <path d="M482.478 607.872c-30.644-20.714-61.484-41.138-92.124-61.86-4.060-2.746-6.86-2.944-11.004-0.058l-77.742 52.308c62.324 41.548 186.392 124.372 186.392 124.372v-107.572c-0.024-2.448-3.106-5.56-5.522-7.19z M390.184 481.332c30.908-20.32 61.702-40.818 92.218-61.72 2.972-2.036 5.55-7.018 5.598-10.668v-103.412c0 0-124.066 82.248-186.524 123.884 27.4 18.318 53.342 35.826 79.574 52.886 2.040 1.324 6.792 0.568 9.134-0.97z M539.676 418.708c31.622 21.406 63.366 42.628 95.254 63.63 1.832 1.208 5.84 1.204 7.678 0l79.502-52.934-186.11-124.436v106.7c0.020 2.402 1.61 5.642 3.676 7.040z M516.218 460.738c-2.42-1.604-7.222-1.056-9.486 0.336-9.634 5.924-18.926 12.406-28.328 18.71-16.496 11.060-50.712 34.046-50.712 34.046l77.684 51.73c3.496 2.314 8.872 2.44 12.52 0.222l78.028-51.986c0.002 0-68.158-45.402-79.706-53.058z M282 474.232v79.218l59.244-39.676z M512 64c-247.424 0-448 200.576-448 448s200.576 448 448 448 448-200.576 448-448-200.576-448-448-448zM790 594.012c0 11.57-5.304 19.736-15.022 26.188-82.284 54.628-164.502 109.428-246.572 164.376-11.708 7.836-22.348 7.508-33.968-0.274-81.566-54.628-163.438-109.092-245.25-163.352-10.22-6.778-15.188-15.114-15.188-27.46v-159.458c0-12.282 5.042-20.664 15.248-27.432 81.812-54.26 163.878-108.726 245.448-163.352 11.636-7.792 22.188-8.014 33.876-0.19 82.072 54.948 164.252 109.738 246.522 164.39 9.356 6.212 14.906 13.886 14.906 25.32v161.244z M632.494 546.468c-30.108 20.444-60.376 40.652-90.772 60.664-4.824 3.176-5.776 6.636-5.722 12.378v102.692l186.078-124.008-77.054-51.764c-4.69-3.208-7.86-3.134-12.53 0.038z M740 553.352v-79.232l-59.18 39.746z"></path>
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


LogoCodepen.defaultProps = {
  // style
  style: {},
  color: '#000000',
  fontSize: '22px',

  // animation
  shake: false,
  beat: false,
  rotate: false,
}


LogoCodepen.propTypes = {
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


export default LogoCodepen
