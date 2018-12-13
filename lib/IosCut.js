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

var IosCut = function (_Component) {
  _inherits(IosCut, _Component);

  function IosCut(props) {
    _classCallCheck(this, IosCut);

    var _this = _possibleConstructorReturn(this, (IosCut.__proto__ || Object.getPrototypeOf(IosCut)).call(this, props));

    _this.state = { classNames: [], animationActive: false };
    _this._getClasses = _this._getClasses.bind(_this);
    return _this;
  }

  _createClass(IosCut, [{
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
        _react2.default.createElement('path', { d: 'M616 554.4c51-66 161-223 180.4-270.8 14.4-35.2 21.2-65.6 20.8-92.4-0.4-35.8-12-58.6-36.6-81.2-10.4-9.6-27-13.8-40-13.8l-254.6 341.8c0 0-0.2 0.2-0.2 0.2l-29 39.4c-0.2 0.2-0.4 0.6-0.6 0.8-1 1.6-15 21.8-30.4 45.4-6 9.2-12.2 19-18 28.2-7 11.2-13.2 22-17.6 30.4-7.2 14.2-14.6 28.8-21.4 43-7.4 15-14.4 29.2-20.8 41.4-20.4-14.6-44-22.2-68.6-22.2-35 0-67.4 15.4-91.6 43.2-23 26.4-35.8 61.4-35.8 98.4s12.8 72 35.8 98.6c24.2 27.8 56.8 43.2 91.6 43.2 28.8 0 56-10.4 78.4-30 21-18.2 36-42.6 43.6-70.8 2-6.2 23.2-69.4 52.2-114.6 18.4-28.8 44.4-46.8 59.2-55.6l27-19.4c0 0.2 25.4-17.4 76.2-83.2zM279.8 842.2c-26.6 0-48-25.2-48-56s21.4-56 48-56c26.6 0 48 25.2 48 56s-21.6 56-48 56zM512.2 576.4c-17.6 0-32-14.4-32-32s14.4-32 32-32c17.6 0 32 14.4 32 32s-14.4 32-32 32z M383 520.8c1.4 2 3.2 3.8 5 5.4 3.4-5.6 7.2-11.4 10.8-17.2l93-131.6-210-281.4c-17.8 0-28.8 1.8-37 7.8-23.8 17.8-38.2 51.2-38.6 87.2-0.4 27 6.6 57.2 20.8 92.4 17.2 42 85.2 140.4 156 237.4z M744 644.6c-24.6 0-48.2 7.6-68.6 22.2-6.4-12.2-13.4-26.4-20.8-41.4-6.8-13.8-13.8-28-20.8-41.6l-21.8 27.8-72.8 66.2c10.4 9.2 21.4 20.8 30.6 35 29 45.2 50 108.4 52.2 114.6 7.6 28.2 22.6 52.6 43.6 70.8 22.6 19.6 49.8 30 78.4 30 70.6 0 128-63.6 128-141.8s-57.4-141.8-128-141.8zM744.2 842.2c-26.6 0-48-25.2-48-56s21.4-56 48-56c26.6 0 48 25.2 48 56s-21.4 56-48 56z' })
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

  return IosCut;
}(_react.Component);

IosCut.defaultProps = {
  // style
  style: {},
  color: '#000000',
  fontSize: '22px',

  // animation
  shake: false,
  beat: false,
  rotate: false
};

IosCut.propTypes = {
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

exports.default = IosCut;
module.exports = exports['default'];
//# sourceMappingURL=IosCut.js.map