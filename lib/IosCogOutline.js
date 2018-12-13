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

var IosCogOutline = function (_Component) {
  _inherits(IosCogOutline, _Component);

  function IosCogOutline(props) {
    _classCallCheck(this, IosCogOutline);

    var _this = _possibleConstructorReturn(this, (IosCogOutline.__proto__ || Object.getPrototypeOf(IosCogOutline)).call(this, props));

    _this.state = { classNames: [], animationActive: false };
    _this._getClasses = _this._getClasses.bind(_this);
    return _this;
  }

  _createClass(IosCogOutline, [{
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
        _react2.default.createElement('path', { d: 'M522.2 160l11.2 44.8 5 19.8 20 3.8 44 8.6 12-15.8 28.4-37.2 13.2 5.4-6.8 45.4-3 19.8 16.6 11.4 21.4 14.6 16.6 11.4 17.4-10 39.2-22.6 10.2 10.2-33.2 55.8 12 17 15 21.2 11.2 16 19.4-2.6 44.2-6.2 5.6 13.4-51.4 39 3.6 19.4 5 26.4 3.8 19.8 61.8 16.4v14.6l-62 16.2-3.6 20.2-5 27-3.6 19.4 15.8 11.8 34.6 26-5.6 13.2-62.6-9-11.2 16.2-15.8 22.8-11.6 16.8 31.4 54.2-10.4 10.4-37-21.4-18-10.6-37.2 27-15.6 11.4 2.8 19.2 6.4 42.8-13.4 5.6-26.4-34.6-12.2-15.8-19.6 4-27.2 5.4-19.8 4-4.8 19.6-11 42.4h-14.4l-11.4-42.8-5-19.2-19.4-4-46.8-9.8-12.2 16.4-26.4 35.6-13.4-5.6 5.8-44.2 2.6-20-16.8-11-22.4-14.6-16.8-11-17.2 10.4-39 23.4-10-10 23.4-40 9.8-16.8-10.4-16.4-14.2-22.6-11-17.6-20.6 3-45.2 6.8-5.6-13.2 53-39.8-4-19.8-5-25-4-19.8-19.4-5-46-11.6v-14.2l65.2-16.4 4.2-19.4 5.2-24.4 4.4-20-16.4-12.4-38-28.6 5.6-13.4 46.4 6.6 20.4 2.8 11-17.4 24-37.6-10.2-17-24.8-41.6 10-10 41.2 24.6 16.6 10 40-24.6 17.8-11-2.8-20.6-6.4-47 13.4-5.6 40.2 54.2 19.8-3.8 44-8.4 5.2-19.6 12-45.6h14.2zM547 128h-64l-18.4 69.4-24.2 4.6-43-58.2-59.2 24.6 9.6 71.4-23.4 14.4-62.4-37.6-45.2 45.2 37.6 63-13.4 21-71-10-24.4 59.2 57.8 43.4-5.4 24.4-70 17.8v64l69.8 17.8 5 25-56.6 42.6 24.6 59 70-10 14.2 22.6-35.8 61.2 45.2 45.2 60.4-36.4 22.4 14.6-9 68.6 59.2 24.4 41.2-55.6 26.8 5.6 17.6 66.8h64l16.6-66.8 27.2-5.4 41.4 54 59.2-24.4-10-67.4 20.4-14.8 58 33.8 45.2-45.2-33.6-57.8 15.8-22.8 67.6 9.6 24.6-59-54.4-41 5-27 66-17.2v-64l-66-17.4-5-26.4 55.4-41.8-24.4-59.4-68.8 9.6-15-21.2 35.4-59.4-45.2-45.2-60.4 34.8-21.4-14.6 10.6-70-59-24.6-43.2 56.6-24.6-4.8-17.4-68.8z M512 256c-141.4 0-256 114.6-256 256s114.6 256 256 256 256-114.6 256-256-114.6-256-256-256zM290.8 547c-1.8-11.6-2.8-23.2-2.8-35 0-59.8 23.4-116 65.6-158.4 42.4-42.2 98.6-65.6 158.4-65.6 12 0 23.8 1 35.6 2.8 2.8 0.4 5.8 1 8.6 1.6l-55.6 207.8-208.4 55.8c-0.4-3-1-6-1.4-9zM651.4 687.4c-39.4 31.4-88.2 48.6-139.4 48.6-59.8 0-116-23.4-158.4-65.6-22.2-22.2-39-48-50.2-76.4-0.8-2.2-1.8-4.4-2.4-6.6l206.8-55 149.8 149.8c-2 1.8-4 3.4-6.2 5.2zM685.8 653.2c-1.8 2.2-3.6 4.4-5.6 6.6l-150-150 56-209.2c2.2 0.8 4.4 1.6 6.6 2.4 28.6 11.2 54.8 28.2 77.2 50.4 42.6 42.6 66 98.8 66 158.6 0 52-17.6 101.4-50.2 141.2z' })
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

  return IosCogOutline;
}(_react.Component);

IosCogOutline.defaultProps = {
  // style
  style: {},
  color: '#000000',
  fontSize: '22px',

  // animation
  shake: false,
  beat: false,
  rotate: false
};

IosCogOutline.propTypes = {
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

exports.default = IosCogOutline;
module.exports = exports['default'];
//# sourceMappingURL=IosCogOutline.js.map