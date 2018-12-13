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

var IosBookmarksOutline = function (_Component) {
  _inherits(IosBookmarksOutline, _Component);

  function IosBookmarksOutline(props) {
    _classCallCheck(this, IosBookmarksOutline);

    var _this = _possibleConstructorReturn(this, (IosBookmarksOutline.__proto__ || Object.getPrototypeOf(IosBookmarksOutline)).call(this, props));

    _this.state = { classNames: [], animationActive: false };
    _this._getClasses = _this._getClasses.bind(_this);
    return _this;
  }

  _createClass(IosBookmarksOutline, [{
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
        _react2.default.createElement('path', { d: 'M864 128h-300.8c-20.6 0-38.6 9.2-51.2 23.4v0 0c-12.4-14.4-30.6-23.4-51.2-23.4h-300.8c-37.6 0-66 26.6-66 64v572.2c0 37.6 28.4 67.8 66 67.8 0 0 259 0 286.6 0s49.4 8.4 49.4 38.8c0 18.2 0 25.2 0 25.2h32c0 0 0-6.8 0-25.2 0-30.6 21.8-38.8 49.4-38.8s286.6 0 286.6 0c37.6 0 66-30.2 66-67.8v-572.2c0-37.4-28.4-64-66-64zM496 822.2c-9.4-15.6-27-22.2-47.6-22.2h-288.4c-18.8 0-32-17-32-35.8v-572.2c0-18.8 13.2-32 32-32 0 0 261.2 0 286.6 0 25.6 0 49.4 25.6 49.4 44.4v617.8zM640 160c37.6 0 86 0 128 0v200.8l-45.8-29-18.2-12.8-18.2 12.8-45.8 29v-200.8zM896 764.2c0 18.8-13.2 35.8-32 35.8h-288.4c-20.6 0-38.2 4.6-47.6 22.2v-617.8c0-18.8 23.8-44.4 49.4-44.4 4.4 0 15.4 0 30.6 0v262l96-64 96 64v-262c37.2 0 64 0 64 0 18.8 0 32 13.4 32 32v572.2z' })
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

  return IosBookmarksOutline;
}(_react.Component);

IosBookmarksOutline.defaultProps = {
  // style
  style: {},
  color: '#000000',
  fontSize: '22px',

  // animation
  shake: false,
  beat: false,
  rotate: false
};

IosBookmarksOutline.propTypes = {
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

exports.default = IosBookmarksOutline;
module.exports = exports['default'];
//# sourceMappingURL=IosBookmarksOutline.js.map