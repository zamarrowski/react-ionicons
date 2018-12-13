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

var IosHelpBuoy = function (_Component) {
  _inherits(IosHelpBuoy, _Component);

  function IosHelpBuoy(props) {
    _classCallCheck(this, IosHelpBuoy);

    var _this = _possibleConstructorReturn(this, (IosHelpBuoy.__proto__ || Object.getPrototypeOf(IosHelpBuoy)).call(this, props));

    _this.state = { classNames: [], animationActive: false };
    _this._getClasses = _this._getClasses.bind(_this);
    return _this;
  }

  _createClass(IosHelpBuoy, [{
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
        _react2.default.createElement('path', { d: 'M512 96c-229.8 0-416 186.2-416 416s186.2 416 416 416 416-186.2 416-416c0-229.8-186.2-416-416-416zM783.6 240.4c35.2 35.2 63 76.4 82.4 122 5.4 12.6 10 25.6 14 38.8l-202.2 13.6c-16.4-28-39.8-51.4-67.8-68l13-202.6c13 4 26 8.6 38.6 14 45.6 19.4 86.6 47 122 82.2zM512 672c-88.2 0-160-71.8-160-160s71.8-160 160-160 160 71.8 160 160c0 88.2-71.8 160-160 160zM240.4 240.4c35.2-35.2 76.4-63 122-82.4 12.6-5.4 25.6-10 38.6-14l13 202.6c-27.8 16.6-51.2 40-67.8 67.8l-202.2-13.4c4-13 8.6-26 14-38.6 19.6-45.6 47.2-86.6 82.4-122zM240.4 783.6c-35.2-35.2-63-76.4-82.4-122-5.4-12.6-10-25.6-14-38.6l202.6-13c16.4 27.8 39.8 51 67.6 67.6l-13.2 202.4c-13-4-26-8.6-38.6-14-45.6-19.6-86.6-47.2-122-82.4zM783.6 783.6c-35.2 35.2-76.4 63-122 82.4-12.6 5.4-25.6 10-38.6 14l-13.4-202.2c28.2-16.6 51.6-40.2 68.2-68.4l202.2 13.6c-4 13-8.6 26-14 38.8-19.6 45.4-47.2 86.4-82.4 121.8z' })
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

  return IosHelpBuoy;
}(_react.Component);

IosHelpBuoy.defaultProps = {
  // style
  style: {},
  color: '#000000',
  fontSize: '22px',

  // animation
  shake: false,
  beat: false,
  rotate: false
};

IosHelpBuoy.propTypes = {
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

exports.default = IosHelpBuoy;
module.exports = exports['default'];
//# sourceMappingURL=IosHelpBuoy.js.map