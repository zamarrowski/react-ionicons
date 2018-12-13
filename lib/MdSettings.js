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

var MdSettings = function (_Component) {
  _inherits(MdSettings, _Component);

  function MdSettings(props) {
    _classCallCheck(this, MdSettings);

    var _this = _possibleConstructorReturn(this, (MdSettings.__proto__ || Object.getPrototypeOf(MdSettings)).call(this, props));

    _this.state = { classNames: [], animationActive: false };
    _this._getClasses = _this._getClasses.bind(_this);
    return _this;
  }

  _createClass(MdSettings, [{
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
        _react2.default.createElement('path', { d: 'M827.934 553.6c2.12-12.47 2.12-27.036 2.12-41.6s-2.12-27.036-2.12-41.6l89.334-68.636c8.52-6.236 10.638-16.634 4.26-27.036l-85.098-143.528c-4.258-8.328-17.014-12.47-25.534-8.328l-106.372 41.602c-21.276-16.636-46.788-31.202-72.32-41.602l-14.896-110.234c-2.12-8.308-10.638-16.636-21.276-16.636h-170.196c-10.636 0-19.154 8.328-21.274 16.636l-17.016 110.234c-25.534 10.4-48.928 24.964-72.342 41.602l-106.372-41.602c-10.638-4.142-21.276 0-25.534 8.328l-85.098 143.53c-4.238 8.306-2.122 20.798 4.258 27.036l91.482 68.634c0 14.564-2.12 27.036-2.12 41.6s2.12 27.036 2.12 41.6l-89.336 68.636c-8.52 6.236-10.636 16.634-4.26 27.036l85.098 143.528c4.26 8.328 17.016 12.47 25.534 8.328l106.374-41.602c21.274 16.636 46.788 31.202 72.32 41.602l17.016 110.234c2.138 10.4 10.636 16.636 21.274 16.636h170.196c10.638 0 19.156-8.328 21.276-16.636l17.036-110.234c25.514-10.4 48.928-24.964 72.32-41.602l106.374 41.602c10.636 4.142 21.274 0 25.534-8.328l85.098-143.53c4.258-8.306 2.12-20.798-4.26-27.036l-93.6-68.634zM510.936 657.6c-82.978 0-148.92-64.47-148.92-145.6s65.942-145.6 148.92-145.6 148.922 64.47 148.922 145.6-65.944 145.6-148.922 145.6z' })
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

  return MdSettings;
}(_react.Component);

MdSettings.defaultProps = {
  // style
  style: {},
  color: '#000000',
  fontSize: '22px',

  // animation
  shake: false,
  beat: false,
  rotate: false
};

MdSettings.propTypes = {
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

exports.default = MdSettings;
module.exports = exports['default'];
//# sourceMappingURL=MdSettings.js.map