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

var IosLocate = function (_Component) {
  _inherits(IosLocate, _Component);

  function IosLocate(props) {
    _classCallCheck(this, IosLocate);

    var _this = _possibleConstructorReturn(this, (IosLocate.__proto__ || Object.getPrototypeOf(IosLocate)).call(this, props));

    _this.state = { classNames: [], animationActive: false };
    _this._getClasses = _this._getClasses.bind(_this);
    return _this;
  }

  _createClass(IosLocate, [{
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
        _react2.default.createElement('path', { d: 'M768 512c0-8.8 7.2-16 16-16h111.6c-8.2-199.4-168.2-359.4-367.6-367.6v111.6c0 8.8-7.2 16-16 16s-16-7.2-16-16v-111.6c-199.4 8.2-359.4 168.2-367.6 367.6h111.6c8.8 0 16 7.2 16 16s-7.2 16-16 16h-111.6c8.2 199.4 168.4 359.4 367.6 367.6v-111.6c0-8.8 7.2-16 16-16s16 7.2 16 16v111.6c199.4-8.2 359.4-168.4 367.6-367.6h-111.6c-8.8 0-16-7.2-16-16zM512 640c-70.6 0-128-57.4-128-128s57.4-128 128-128 128 57.4 128 128-57.4 128-128 128z M944 496h-48.4c0.2 5.4 0.4 10.6 0.4 16s-0.2 10.6-0.4 16h48.4c8.8 0 16-7.2 16-16s-7.2-16-16-16z M128.4 496h-48.4c-8.8 0-16 7.2-16 16s7.2 16 16 16h48.4c-0.2-5.4-0.4-10.6-0.4-16s0.2-10.6 0.4-16z M496 895.6v48.4c0 8.8 7.2 16 16 16s16-7.2 16-16v-48.4c-5.4 0.2-10.6 0.4-16 0.4s-10.6-0.2-16-0.4z M528 128.4v-48.4c0-8.8-7.2-16-16-16s-16 7.2-16 16v48.4c5.4-0.2 10.6-0.4 16-0.4s10.6 0.2 16 0.4z' })
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

  return IosLocate;
}(_react.Component);

IosLocate.defaultProps = {
  // style
  style: {},
  color: '#000000',
  fontSize: '22px',

  // animation
  shake: false,
  beat: false,
  rotate: false
};

IosLocate.propTypes = {
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

exports.default = IosLocate;
module.exports = exports['default'];
//# sourceMappingURL=IosLocate.js.map