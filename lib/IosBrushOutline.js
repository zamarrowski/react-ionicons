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

var IosBrushOutline = function (_Component) {
  _inherits(IosBrushOutline, _Component);

  function IosBrushOutline(props) {
    _classCallCheck(this, IosBrushOutline);

    var _this = _possibleConstructorReturn(this, (IosBrushOutline.__proto__ || Object.getPrototypeOf(IosBrushOutline)).call(this, props));

    _this.state = { classNames: [], animationActive: false };
    _this._getClasses = _this._getClasses.bind(_this);
    return _this;
  }

  _createClass(IosBrushOutline, [{
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
        _react2.default.createElement('path', { d: 'M299 566.6c-103.8 0-167.8 91.4-167.8 190.2 0 45.4-20.2 78.4-67.2 96.2 28.6 55.6 124 75 191.4 75 16.8 0 31.8-1.2 43.6-3.4 71.2-12.8 160.2-49.8 181.4-154 24.6-121.2-77.6-204-181.4-204zM449 764.4c-8 39.2-27.2 69-59 91.4-25.2 17.8-57.6 30.4-96.6 37.4-7.2 1.2-19.6 2.8-38 2.8-50.8 0-108.2-11.6-141-34.2 32-24.4 48.8-60 48.8-104.8 0-42 13.8-82.8 37.6-111.8 17.4-21.2 48.6-46.4 98.2-46.4 48.4 0 96.2 21.8 124.8 56.6 17.2 21.2 35.6 57.2 25.2 109z M935.2 120.8c-15.4-15.4-33.6-24.8-52.2-24.8-12.6 0-25.4 4.4-37.6 14l-350.2 308.2c-6.8-1.8-13.2-2.8-19.4-2.8-9.6 0-18.6 2.4-26.4 7.6l-127.2 105.6c-3.2 3.2-3 8.6 0.2 11.8 1 1 2.2 1.6 3.4 2 1.2 0 2.6 0.2 3.8 0.2 0 0 0 0 0.2 0 95.8 6.8 184 75.6 180.6 181 0 1 0 2-0.2 3 0.2 1.6 1 3.4 2.2 4.6 1.6 1.6 3.8 2.4 5.8 2.4s4.2-0.8 5.8-2.4c0 0 0 0 0.2 0 0.2-0.2 0.2-0.2 0.4-0.4l108.6-124.4c8.4-12.8 9.4-28.4 4.8-45.8l308.4-350c23.4-30 14.8-64-11.2-89.8zM921.4 190l-319.2 362.4 4.6 16.6c2.2 8 2.2 14.2 0.2 18.4l-70.8 81c-9.2-36.4-28.8-69.4-57.4-96-26.6-24.6-59.6-42.8-95.8-53l85-70.4c1.6-0.8 3.8-1.6 7.6-1.6 3.2 0 7 0.6 11 1.6l16.6 4.6 362.8-319c5.8-4.4 11.4-6.6 17-6.6 9.2 0 19.8 5.4 29.6 15.4 8.4 8.4 13.8 17.6 15 25.8 0.8 4.4 1 11.6-6.2 20.8z M322.2 528.4v0 0z' })
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

  return IosBrushOutline;
}(_react.Component);

IosBrushOutline.defaultProps = {
  // style
  style: {},
  color: '#000000',
  fontSize: '22px',

  // animation
  shake: false,
  beat: false,
  rotate: false
};

IosBrushOutline.propTypes = {
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

exports.default = IosBrushOutline;
module.exports = exports['default'];
//# sourceMappingURL=IosBrushOutline.js.map