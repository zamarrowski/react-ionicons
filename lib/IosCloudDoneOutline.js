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

var IosCloudDoneOutline = function (_Component) {
  _inherits(IosCloudDoneOutline, _Component);

  function IosCloudDoneOutline(props) {
    _classCallCheck(this, IosCloudDoneOutline);

    var _this = _possibleConstructorReturn(this, (IosCloudDoneOutline.__proto__ || Object.getPrototypeOf(IosCloudDoneOutline)).call(this, props));

    _this.state = { classNames: [], animationActive: false };
    _this._getClasses = _this._getClasses.bind(_this);
    return _this;
  }

  _createClass(IosCloudDoneOutline, [{
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
        _react2.default.createElement('path', { d: 'M618.4 432l-154 153.8-58.4-57.8-22 22 69.2 68.6c3 3 7.2 5.6 11 5.6s7.8-2.4 10.8-5.4l165-164.4-21.6-22.4z M826 452.2c-13.8-128.4-118-228.2-250-228.2-89.6 0-173 45.6-218.8 115.4-15.8-7.4-33.6-11.4-52.2-11.4-68.4 0-124 55-125 123.2-69.8 22-116 85.2-116 156.8 0 87.8 71.2 160 159 160h578c87.8 0 159-72.2 159-160 0-79.2-58-143.8-134-155.8zM801 736h-578c-70 0-127-57.6-127-128 0-28.6 8.8-54 25.6-77.2 17-23.2 40.4-40.4 68-49l22-7 0.4-23.2c0.4-24.6 10.2-47.6 27.6-64.8 17.6-17.2 40.6-26.8 65.2-26.8 13.6 0 26.6 2.8 38.8 8.4l25 11.6 15.2-23c41.6-63.6 115.8-101.4 191.6-101.4 55.6 0 105 20.6 146.2 57.8 41 37 66.6 87.4 72.6 142l2.6 24.4 24.2 3.8c29.4 4.6 56.6 19.8 76.2 42.8 19.8 23.2 30.8 51.2 30.8 81.6 0 70.4-57 128-127 128z' })
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

  return IosCloudDoneOutline;
}(_react.Component);

IosCloudDoneOutline.defaultProps = {
  // style
  style: {},
  color: '#000000',
  fontSize: '22px',

  // animation
  shake: false,
  beat: false,
  rotate: false
};

IosCloudDoneOutline.propTypes = {
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

exports.default = IosCloudDoneOutline;
module.exports = exports['default'];
//# sourceMappingURL=IosCloudDoneOutline.js.map