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

var IosPaw = function (_Component) {
  _inherits(IosPaw, _Component);

  function IosPaw(props) {
    _classCallCheck(this, IosPaw);

    var _this = _possibleConstructorReturn(this, (IosPaw.__proto__ || Object.getPrototypeOf(IosPaw)).call(this, props));

    _this.state = { classNames: [], animationActive: false };
    _this._getClasses = _this._getClasses.bind(_this);
    return _this;
  }

  _createClass(IosPaw, [{
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
        _react2.default.createElement('path', { d: 'M648.6 160.6c-2.4-0.4-4.8-0.6-7.2-0.6v0.2c-0.2 0-0.4 0-0.8 0-44 0-85.8 51.8-95.6 120.6-10.6 73.2 18.8 138 65.4 144.8 2.6 0.4 5.4 0.6 8 0.6 44 0 85.8-51.8 95.6-120.6 10.6-73.4-18.8-138.2-65.4-145z M641.2 160v0 0z M884.6 338.8c-7-2.8-14.2-4.2-21.8-4.2-0.2 0-0.6 0-0.8 0v0 0c-39.4 0.6-83.6 38.4-106.8 95.6-27.8 68.4-15 138.4 28.8 156.4 7 2.8 14.2 4.2 21.8 4.2 39.6 0 84.4-38 107.8-95.6 27.6-68.4 14.6-138.4-29-156.4z M655.2 590.8c-55.6-87.2-79.6-120-143.2-120s-87.8 33-143.4 120c-47.6 74.4-143.8 80.6-167.8 143.8-4.8 11.2-7.2 23.4-7.2 36.4 0 51.4 41.6 93 92.8 93 63.6 0 150.2-48 225.8-48s161.8 48 225.4 48c51.2 0 92.6-41.6 92.6-93 0-13-2.6-25.2-7.4-36.4-24-63.4-120-69.4-167.6-143.8z M405.6 426c2.6 0 5.4-0.2 8-0.6 46.8-6.8 76-71.6 65.4-144.8-10-69-51.8-120.6-95.6-120.6-2.6 0-5.4 0.2-8 0.6-46.8 6.8-76 71.6-65.4 144.8 10 68.8 51.8 120.6 95.6 120.6z M240.2 586.6c43.8-18 56.6-88 28.8-156.4-23.4-57.6-68.2-95.6-107.8-95.6-7.6 0-14.8 1.4-21.8 4.2-43.8 18-56.6 88-28.8 156.4 23.4 57.6 68.2 95.6 107.8 95.6 7.6-0 14.8-1.4 21.8-4.2z' })
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

  return IosPaw;
}(_react.Component);

IosPaw.defaultProps = {
  // style
  style: {},
  color: '#000000',
  fontSize: '22px',

  // animation
  shake: false,
  beat: false,
  rotate: false
};

IosPaw.propTypes = {
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

exports.default = IosPaw;
module.exports = exports['default'];
//# sourceMappingURL=IosPaw.js.map