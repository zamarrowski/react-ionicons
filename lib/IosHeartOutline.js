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

var IosHeartOutline = function (_Component) {
  _inherits(IosHeartOutline, _Component);

  function IosHeartOutline(props) {
    _classCallCheck(this, IosHeartOutline);

    var _this = _possibleConstructorReturn(this, (IosHeartOutline.__proto__ || Object.getPrototypeOf(IosHeartOutline)).call(this, props));

    _this.state = { classNames: [], animationActive: false };
    _this._getClasses = _this._getClasses.bind(_this);
    return _this;
  }

  _createClass(IosHeartOutline, [{
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
        _react2.default.createElement('path', { d: 'M718.77 160c-78.838 0-164.428 35.198-206.77 105.6-42.34-70.402-127.932-105.6-206.77-105.6-137.936 0-241.23 86.476-241.23 231.558 0 62.576 25.124 143.848 81.846 211.314 56.718 67.47 90.458 103.4 200.306 176 109.848 72.604 165.848 85.128 165.848 85.128s56-12.524 165.848-85.128c109.846-72.6 143.588-108.53 200.306-176 56.722-67.466 81.846-148.738 81.846-211.314 0-145.082-103.294-231.558-241.23-231.558zM853.66 582.282c-53.704 63.88-84.36 97.79-193.458 169.894-80.474 53.192-130.504 72.602-148.204 78.466-17.7-5.866-67.728-25.278-148.204-78.466-109.096-72.104-139.752-106.012-193.458-169.896-24.13-28.702-43.714-62.548-56.632-97.886-11.58-31.684-17.704-63.786-17.704-92.836 0-60.568 20.262-111.286 58.594-146.67 18.28-16.874 40.316-29.984 65.504-38.968 25.89-9.238 54.532-13.92 85.132-13.92 76.036 0 146.434 35.364 179.348 90.092l27.422 45.596 27.422-45.596c32.916-54.728 103.314-90.092 179.348-90.092 30.6 0 59.242 4.682 85.132 13.918 25.188 8.986 47.224 22.096 65.504 38.968 38.332 35.386 58.594 86.104 58.594 146.672 0 29.050-6.124 61.152-17.708 92.836-12.916 35.336-32.5 69.184-56.632 97.888z' })
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

  return IosHeartOutline;
}(_react.Component);

IosHeartOutline.defaultProps = {
  // style
  style: {},
  color: '#000000',
  fontSize: '22px',

  // animation
  shake: false,
  beat: false,
  rotate: false
};

IosHeartOutline.propTypes = {
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

exports.default = IosHeartOutline;
module.exports = exports['default'];
//# sourceMappingURL=IosHeartOutline.js.map