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

var IosGitCompare = function (_Component) {
  _inherits(IosGitCompare, _Component);

  function IosGitCompare(props) {
    _classCallCheck(this, IosGitCompare);

    var _this = _possibleConstructorReturn(this, (IosGitCompare.__proto__ || Object.getPrototypeOf(IosGitCompare)).call(this, props));

    _this.state = { classNames: [], animationActive: false };
    _this._getClasses = _this._getClasses.bind(_this);
    return _this;
  }

  _createClass(IosGitCompare, [{
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
        _react2.default.createElement('path', { d: 'M447.4 692.6c-6.2-6.2-16.4-6.2-22.6 0s-6.2 16.4 0 22.6l103.2 100.8h-208c-98.4 0-114-84.6-114-176v-320.8c64.2-7 114-61.2 114-127.2 0-70.6-57.4-128-128-128s-128 57.4-128 128c0 64.6 47.8 118 110 126.8v321.2c0 28.6 0 81.8 18 126 22 54.4 66.6 82 128 82h208l-99.4 100.8c-6.2 6.2-6.2 16.4 0 22.6 3.2 3 7.2 4.6 11.4 4.6s8.2-1.4 11.4-4.6l115.2-114.8c12.6-12.6 12.6-32.8 0-45.2l-119.2-118.8zM96 192c0-53 43-96 96-96s96 43 96 96-43 96-96 96-96-43-96-96z M850 705.2v-321.2c0-28.6 0-81.8-18-126-22-54.4-66.6-82-128-82h-208l99.4-100.8c6.2-6.2 6.2-16.4 0-22.6-3.2-3-7.2-4.6-11.4-4.6s-8.2 1.4-11.4 4.6l-115.2 114.8c-12.6 12.6-12.6 32.8 0 45.2l119.2 118.8c6.2 6.2 16.4 6.2 22.6 0s6.2-16.4 0-22.6l-103.2-100.8h208c98.4 0 114 84.6 114 176v320.8c-64.2 7-114 61.2-114 127.2 0 70.6 57.4 128 128 128s128-57.4 128-128c0-64.6-47.8-118-110-126.8zM832 928c-53 0-96-43-96-96s43-96 96-96 96 43 96 96-43 96-96 96z' })
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

  return IosGitCompare;
}(_react.Component);

IosGitCompare.defaultProps = {
  // style
  style: {},
  color: '#000000',
  fontSize: '22px',

  // animation
  shake: false,
  beat: false,
  rotate: false
};

IosGitCompare.propTypes = {
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

exports.default = IosGitCompare;
module.exports = exports['default'];
//# sourceMappingURL=IosGitCompare.js.map