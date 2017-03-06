'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _index = require('../lib/index.css');

var _index2 = _interopRequireDefault(_index);

var _ioniconsMin = require('./../ionicons/css/ionicons.min.css');

var _ioniconsMin2 = _interopRequireDefault(_ioniconsMin);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Ionicon = function (_Component) {
  _inherits(Ionicon, _Component);

  function Ionicon(props) {
    _classCallCheck(this, Ionicon);

    var _this = _possibleConstructorReturn(this, (Ionicon.__proto__ || Object.getPrototypeOf(Ionicon)).call(this, props));

    _this.state = { classNames: [_this.props.icon], animationActive: false };

    _this._getClasses = _this._getClasses.bind(_this);
    _this._manageBeatAnimation = _this._manageBeatAnimation.bind(_this);
    _this._manageShakeAnimation = _this._manageShakeAnimation.bind(_this);
    _this._manageRotateAnimation = _this._manageRotateAnimation.bind(_this);
    return _this;
  }

  _createClass(Ionicon, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      this._manageShakeAnimation();
      this._manageBeatAnimation();
      this._manageRotateAnimation();
    }
  }, {
    key: 'render',
    value: function render() {
      var style = _extends({}, this.props.style, {
        color: this.props.color,
        fontSize: this.props.fontSize
      });

      return _react2.default.createElement('i', { className: this._getClasses(), style: style });
    }
  }, {
    key: '_getClasses',
    value: function _getClasses() {
      return [].concat(_toConsumableArray(this.state.classNames)).join(' ');
    }
  }, {
    key: '_manageBeatAnimation',
    value: function _manageBeatAnimation() {
      if (this.props.beat && !this.state.animationActive) {

        this.setState(_extends({}, this.state, {
          animationActive: 'beat',
          classNames: [].concat(_toConsumableArray(this.state.classNames), ['beat'])
        }));
      }
    }
  }, {
    key: '_manageShakeAnimation',
    value: function _manageShakeAnimation() {
      if (this.props.shake && !this.state.animationActive) {

        this.setState(_extends({}, this.state, {
          animationActive: 'shake',
          classNames: [].concat(_toConsumableArray(this.state.classNames), ['shake'])
        }));
      }
    }
  }, {
    key: '_manageRotateAnimation',
    value: function _manageRotateAnimation() {
      if (this.props.rotate && !this.state.animationActive) {

        this.setState(_extends({}, this.state, {
          animationActive: 'rotate',
          classNames: [].concat(_toConsumableArray(this.state.classNames), ['rotate'])
        }));
      }
    }
  }]);

  return Ionicon;
}(_react.Component);

Ionicon.defaultProps = {
  // style
  style: {},
  color: '#000000',
  fontSize: '22px',

  // animation
  shake: false,
  beat: false,
  rotate: false
};

Ionicon.propTypes = {
  // style
  style: _react2.default.PropTypes.object,
  color: _react2.default.PropTypes.string,
  fontSize: _react2.default.PropTypes.string,

  // animation
  shake: _react2.default.PropTypes.bool,
  beat: _react2.default.PropTypes.bool,
  rotate: _react2.default.PropTypes.bool
};

exports.default = Ionicon;
module.exports = exports['default'];
//# sourceMappingURL=index.js.map