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

var IosLeafOutline = function (_Component) {
  _inherits(IosLeafOutline, _Component);

  function IosLeafOutline(props) {
    _classCallCheck(this, IosLeafOutline);

    var _this = _possibleConstructorReturn(this, (IosLeafOutline.__proto__ || Object.getPrototypeOf(IosLeafOutline)).call(this, props));

    _this.state = { classNames: [], animationActive: false };
    _this._getClasses = _this._getClasses.bind(_this);
    return _this;
  }

  _createClass(IosLeafOutline, [{
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
        _react2.default.createElement('path', { d: 'M907.8 765.4c-103.6-16-109.8-25.4-109.8-25.4 31.2-148-46.4-308.2-154.2-397.2-143.6-118.4-361.8-32.4-531.8-212.4-1.6-1.6-3-2.4-4.4-2.4-33.2 0-4 481 200.6 667.8 85.6 78.4 179.8 100.2 255.4 100.2 61.6 0 111-14.6 133.6-25 45.6-21.2 77.4-67.8 77.4-67.8 74 23.2 114.6 24.4 122.6 24.4 1 0 1.4 0 1.4 0 0.8 0.2 1.6 0.2 2.4 0.2 27.6-0 40.6-57.2 6.8-62.4zM683.8 842c-17.8 8.2-63 22-120 22-39.2 0-77.4-6.4-113.4-19-43.8-15.2-84.2-39.8-120.4-72.8-40.8-37.2-77.2-90.4-108-158-26.6-58-48.6-125-65.2-199-13.6-60-23-123.6-26.8-178.8-1.2-19-1.8-34.6-1.8-47.2 92.8 76.4 195.6 92.8 287.6 107.6 77.8 12.4 151.2 24.2 207.8 70.8 51 42.2 93.4 99.4 119.2 161.2 28 66.8 31.8 133.8 25.4 201.4-360-126-529-341-529-341s145 250.4 504.6 401.6c-10.2 13-26.6 35.6-60 51.2z' })
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

  return IosLeafOutline;
}(_react.Component);

IosLeafOutline.defaultProps = {
  // style
  style: {},
  color: '#000000',
  fontSize: '22px',

  // animation
  shake: false,
  beat: false,
  rotate: false
};

IosLeafOutline.propTypes = {
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

exports.default = IosLeafOutline;
module.exports = exports['default'];
//# sourceMappingURL=IosLeafOutline.js.map