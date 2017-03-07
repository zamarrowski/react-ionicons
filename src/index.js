import React, { Component } from 'react';

import styles from '../lib/index.css';
import ionicons from './../ionicons/css/ionicons.min.css';


class Ionicon extends Component {

  constructor(props) {
    super(props);

    this.state = {classNames: [this.props.icon], animationActive: false};

    this._getClasses = this._getClasses.bind(this);
    this._manageBeatAnimation = this._manageBeatAnimation.bind(this);
    this._manageShakeAnimation = this._manageShakeAnimation.bind(this);
    this._manageRotateAnimation = this._manageRotateAnimation.bind(this);
  }

  componentWillMount() {
      this._manageShakeAnimation();
      this._manageBeatAnimation();
      this._manageRotateAnimation();
  }

  render() {
    const style = {
      ...this.props.style,
      color: this.props.color,
      fontSize: this.props.fontSize,
    };

    return (
      <i className={this._getClasses()} style={style} />
    )
  }

  _getClasses() {
    return [...this.state.classNames].join(' ');
  }

  _manageBeatAnimation() {
      if (this.props.beat && !this.state.animationActive) {

          this.setState({
              ...this.state,
              animationActive: 'beat',
              classNames: [...this.state.classNames, 'beat']
          })
      }
  }

  _manageShakeAnimation() {
    if (this.props.shake && !this.state.animationActive) {

      this.setState({
        ...this.state,
        animationActive: 'shake',
        classNames: [...this.state.classNames, 'shake']
      })
    }
  }

  _manageRotateAnimation() {
      if (this.props.rotate && !this.state.animationActive) {

          this.setState({
              ...this.state,
              animationActive: 'rotate',
              classNames: [...this.state.classNames, 'rotate']
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
};


Ionicon.propTypes = {
  // style
  style: React.PropTypes.object,
  color: React.PropTypes.string,
  fontSize: React.PropTypes.string,

  // animation
  shake: React.PropTypes.bool,
  beat: React.PropTypes.bool,
  rotate: React.PropTypes.bool
};


export default Ionicon
