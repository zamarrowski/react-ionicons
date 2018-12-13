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

var MdBonfire = function (_Component) {
  _inherits(MdBonfire, _Component);

  function MdBonfire(props) {
    _classCallCheck(this, MdBonfire);

    var _this = _possibleConstructorReturn(this, (MdBonfire.__proto__ || Object.getPrototypeOf(MdBonfire)).call(this, props));

    _this.state = { classNames: [], animationActive: false };
    _this._getClasses = _this._getClasses.bind(_this);
    return _this;
  }

  _createClass(MdBonfire, [{
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
        _react2.default.createElement('path', { d: 'M544.4 701.2c-1.6-16.4-16.4-29.2-34.6-29.2-16.6 0-30.4 10.8-33.8 25v0l-33.8 185c-1 4.6-1.6 9.2-1.6 14 0 35.4 31 64 69.4 64s69.4-28.6 69.4-64c0-5.8-0.8-11.4-2.4-16.8l-32.6-178z M620.2 710v0 0z M808.6 780.6c-3.8-2.8-7.2-5.8-11.2-7.8l-137.8-95c-12.6-7.6-26-7.4-35.8 1.8-9 8.2-10.2 20.8-3.6 30.8l106 131.6c2 3 4.6 5.6 7.2 8.4 17 18.2 54.4 19.2 75 0 20.8-19.6 20.6-54.4 0.2-69.8z M764.4 670v0 0z M900.8 645l-129-4.6c-8.4-1.2-16 4.2-17.4 12-1.4 7.2 3 14.2 10.2 17.6v0c0 0 0.2 0 0.2 0l125 35.6c18 3.8 38.2-4.6 38.2-23.2-0-23.8-6.6-35-27.2-37.4z M259 670v0 0z M259 670v0c7.2-3.2 11.4-10.4 10.2-17.6-1.4-8-9-13.2-17.4-12l-129 4.6c-20.8 2.4-26.8 13.6-26.8 37.2 0 18.6 19.8 27.2 37.6 23.2l125-35.6c0.2 0.2 0.2 0.2 0.4 0.2z M364.4 677.6l-137.8 94.8c-4 2.2-7.8 4.8-11.2 7.8-20.8 19.2-20.8 50.2 0 69.2 20.8 19.2 54.2 19.2 75 0 2.8-2.6 5.2-5.4 7.2-8.4l106-131.2c6.6-10 5.4-22.4-3.6-30.6-9.6-9-25.2-9.6-35.6-1.6z M512 64c0 0 60.4 70.8 60.4 128.8 0 55.6-36.4 100.6-91.8 100.6-55.8 0-97.8-45-97.8-100.6l0.8-13.8c-54.4 64.6-87 152.4-87 243.6 0 119.2 96.4 215.6 215.6 215.6s215.6-96.4 215.6-215.6c-0.2-145.2-71.8-315.2-215.8-358.6zM504.2 557.4c-48 0-86.8-37.8-86.8-84.6 0-43.6 28.2-74.4 75.8-84 47.6-9.8 97-32.6 124.6-69.6 10.6 34.8 15.8 71.4 15.8 108.8 0 71.4-58 129.4-129.4 129.4z' })
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

  return MdBonfire;
}(_react.Component);

MdBonfire.defaultProps = {
  // style
  style: {},
  color: '#000000',
  fontSize: '22px',

  // animation
  shake: false,
  beat: false,
  rotate: false
};

MdBonfire.propTypes = {
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

exports.default = MdBonfire;
module.exports = exports['default'];
//# sourceMappingURL=MdBonfire.js.map