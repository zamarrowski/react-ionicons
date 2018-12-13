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

var IosCar = function (_Component) {
  _inherits(IosCar, _Component);

  function IosCar(props) {
    _classCallCheck(this, IosCar);

    var _this = _possibleConstructorReturn(this, (IosCar.__proto__ || Object.getPrototypeOf(IosCar)).call(this, props));

    _this.state = { classNames: [], animationActive: false };
    _this._getClasses = _this._getClasses.bind(_this);
    return _this;
  }

  _createClass(IosCar, [{
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
        _react2.default.createElement('path', { d: 'M951.8 468c-28.8-32.6-82.4-61.6-82.4-61.6l31-6.2c0 0 0 0 0 0 14.2 0 44.8-4.6 51-10.8 6.2-6.4 8.4-10.8 8.4-16.4s-3.4-15.4-9.6-22.2c-6-6.8-32-10.4-47.4-12.4-15.2-2-17.4 0-21.4 2.4-4.6 3-6 23.4-6.4 34l-16.2 3.6c-9.6-25-22.8-71.2-43-108-23-41.6-47-54.8-57-58-9.8-3-18.8-5.2-86-12.2-67.4-7.2-126-8.2-160.8-8.2s-93.4 1-161.2 8.2c-67.2 6.8-76.2 9-86 12.2-10 3.2-34 16.4-57 58-20.2 36.8-33.4 83-43 108l-16.2-3.6c-0.4-10.6-1.8-31.2-6.4-34-4-2.6-6-4.4-21.4-2.4-15.2 2-41.2 5.6-47.4 12.4-6 6.8-9.4 16.6-9.4 22.2s2.2 10.2 8.4 16.6c6.2 6.4 37 10.8 51 10.8 0 0 0 0 0 0l31 6.2c0 0-53.6 29.2-82.4 61.6 0 0-8.2 49.4-8.2 116.2 0 96 11.6 176.8 11.6 176.8 53 9.2 92.4 12.6 131.8 13.6 19.8 0.4 37.8 0.4 58.4 0.2 49.6-0.6 31.2-15 54.2-14.6 22.6 0.4 110 8 192 8s169.4-7.6 192-8c23-0.4 4.6 14.2 54.2 14.6 20.6 0.2 38.8 0.2 58.4-0.2 39.4-1 79-4.4 131.8-13.6 0 0 11.6-80.6 11.6-176.8 0.2-67.2-8-116.4-8-116.4zM220.8 309.8c8.6-20.2 28-54.2 44.2-65.6 0 0 94-20.2 247-20.2s247 20.2 247 20.2c16.2 11.2 35.6 45.2 44.2 65.6 8.6 20.2 22.8 67.6 20.6 73s2.2 8.2-26.8 5.8c-28.8-2.2-199-4.6-285-4.6s-256.2 2.4-285 4.6c-29 2.4-24.8-0.4-26.8-5.8-2.2-5.6 12-52.8 20.6-73zM247.6 541.6c-19.8 0-59.6-2-69-2.4-9.4-0.2-17.6 7.6-22.4 7.6s-51-7.2-56-29.8c-5-22.4 0-46 0-45.6 31-1.4 61-0.4 117 15.6 56.2 15.8 87.2 46.6 87.2 46.6s-37 8-56.8 8zM684.4 679.6c-25.4 3.4-117 4.4-172.4 4.4s-147-1-172.4-4.4c-26.2-3.4-59.6-34.6-36.8-60.4 15.2-17 41.6-27.2 97.8-34.6 59.6-7.6 97.2-8.6 111.2-8.6s51.6 1 111.2 8.6c56.2 7.4 86.4 19.2 97.8 34.6 20.8 27.6-10.2 56.8-36.4 60.4zM923.8 517.2c-5 22.4-51.2 29.8-56 29.8s-13-7.8-22.4-7.6c-9.4 0.4-49.2 2.4-69 2.4s-56.8-8-56.8-8 31-30.8 87.2-46.6c56-16 86-17 117-15.6-0-0.4 5 23-0 45.6z M802 824.6c0 4.2 2.4 7.4 6.2 7.4 0 0 106 0 113 0 9.8 0 11.8-7 12.4-11 2.8-16.8 4-42.6 4-42.6-51.4 9.4-97.6 11-135.6 12v34.2z M90.2 821c0.6 4 2.6 11 12.4 11 7 0 113.4 0 113.4 0 3.8 0 6.2-3.2 6.2-7.4v-34.2c-38-1-84.4-2.6-135.8-12-0.2 0.2 1 25.8 3.8 42.6z' })
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

  return IosCar;
}(_react.Component);

IosCar.defaultProps = {
  // style
  style: {},
  color: '#000000',
  fontSize: '22px',

  // animation
  shake: false,
  beat: false,
  rotate: false
};

IosCar.propTypes = {
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

exports.default = IosCar;
module.exports = exports['default'];
//# sourceMappingURL=IosCar.js.map