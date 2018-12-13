'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _SVG = require('./SVG');

var _SVG2 = _interopRequireDefault(_SVG);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var IosAmericanFootball = function (_Component) {
  _inherits(IosAmericanFootball, _Component);

  function IosAmericanFootball(props) {
    _classCallCheck(this, IosAmericanFootball);

    var _this = _possibleConstructorReturn(this, (IosAmericanFootball.__proto__ || Object.getPrototypeOf(IosAmericanFootball)).call(this, props));

    _this.state = { classNames: [], animationActive: false };
    _this._getClasses = _this._getClasses.bind(_this);
    return _this;
  }

  _createClass(IosAmericanFootball, [{
    key: 'render',
    value: function render() {
      var style = _extends({}, this.props.style, {
        color: this.props.color,
        fontSize: this.props.fontSize
      });

      return _react2.default.createElement(
        _SVG2.default,
        {
          style: this.props.style,
          className: this._getClasses(),
          fill: this.props.color,
          width: this.props.fontSize,
          height: this.props.fontSize,
          viewBox: '0 0 1024 1024',
          onClick: this.props.onClick,
          rotate: this.props.rotate ? 1 : 0,
          shake: this.props.shake ? 1 : 0,
          beat: this.props.beat ? 1 : 0
        },
        _react2.default.createElement('path', { d: 'M757.21 266.79c-145.406-145.408-378.448-170.794-523.51-170.79-77.852 0.002-130.382 7.316-130.382 7.316s-59.968 430.454 163.472 653.894c145.408 145.408 378.444 170.79 523.506 170.79 77.854 0 130.386-7.316 130.386-7.316s59.972-430.452-163.472-653.894zM136.248 389.456l253.166-253.164c12.246 1.722 24.328 3.65 36.224 5.798l-283.588 283.586c-2.14-11.874-4.076-23.952-5.802-36.22zM534.624 670.39l57.376-57.376-45.254-45.256-57.376 57.376-22.626-22.624 57.376-57.376-45.254-45.254-57.376 57.376-22.626-22.624 57.376-57.376-45.256-45.256-57.376 57.376-22.626-22.624 57.378-57.378-45.256-45.254-57.376 57.376-22.628-22.626 135.768-135.766 22.626 22.628-57.376 57.376 45.256 45.254 57.376-57.376 22.626 22.626-57.376 57.376 45.256 45.256 57.376-57.376 22.628 22.626-57.376 57.376 45.254 45.254 57.376-57.376 22.626 22.624-57.376 57.376 45.256 45.256 57.376-57.376 22.624 22.626-57.376 57.376 45.254 45.254 57.376-57.376 22.628 22.624-135.766 135.768-22.626-22.626 57.376-57.376-45.256-45.256-57.376 57.376-22.63-22.628zM634.518 887.782c-12.242-1.726-24.318-3.66-36.208-5.812l283.648-283.65c2.142 11.876 4.076 23.954 5.802 36.222l-253.242 253.24z' })
      );
    }
  }, {
    key: '_getClasses',
    value: function _getClasses() {
      return [].concat(_toConsumableArray(this.state.classNames), [this.props.className]).join(' ');
    }
  }, {
    key: '_getPathByIconName',
    value: function _getPathByIconName() {
      var _this2 = this;

      var icon = icons.find(function (icon) {
        return icon.tags[0] === _this2.props.icon;
      });
      if (icon) return icon.paths.join(' ');
      return '';
    }
  }]);

  return IosAmericanFootball;
}(_react.Component);

IosAmericanFootball.defaultProps = {
  // style
  style: {},
  color: '#000000',
  fontSize: '22px',

  // animation
  shake: false,
  beat: false,
  rotate: false
};

IosAmericanFootball.propTypes = {
  // style
  style: _propTypes2.default.object,
  color: _propTypes2.default.string,
  fontSize: _propTypes2.default.string,

  // animation
  shake: _propTypes2.default.bool,
  beat: _propTypes2.default.bool,
  rotate: _propTypes2.default.bool,

  // functions
  onClick: _propTypes2.default.func
};

exports.default = IosAmericanFootball;
module.exports = exports['default'];
//# sourceMappingURL=IosAmericanFootball.js.map