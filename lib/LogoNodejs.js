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

var LogoNodejs = function (_Component) {
  _inherits(LogoNodejs, _Component);

  function LogoNodejs(props) {
    _classCallCheck(this, LogoNodejs);

    var _this = _possibleConstructorReturn(this, (LogoNodejs.__proto__ || Object.getPrototypeOf(LogoNodejs)).call(this, props));

    _this.state = { classNames: [], animationActive: false };
    _this._getClasses = _this._getClasses.bind(_this);
    return _this;
  }

  _createClass(LogoNodejs, [{
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
        _react2.default.createElement('path', { d: 'M511.834 960c-11.54 0-23.072-3.124-33.266-9.198l-105.97-64.88c-15.828-9.124-8.046-12.406-2.886-14.282 21.13-7.562 27.426-11.314 49.894-24.57 2.412-1.334 5.494-0.848 7.91 0.644l79.42 47.008c2.952 1.7 7.114 1.7 9.862 0l310.376-184.492c2.95-1.754 4.83-5.292 4.83-8.882v-373.61c0-3.7-1.88-7.184-4.898-9.056l-310.24-189.344c-2.956-1.788-6.842-1.788-9.796 0l-310.038 189.41c-3.088 1.806-5.032 5.396-5.032 8.99v373.61c0 3.626 1.944 7.026 4.962 8.778l79.858 47.944c47.22 24.408 75.18-0.34 75.18-29.222v-367.398c0-5.304 4.094-9.454 9.192-9.454h45.618c5.030 0 9.194 4.144 9.194 9.454v367.396c0 65.126-38.706 102.496-98.398 102.496-18.312 0-32.794 0-73.104-20.558l-83.168-49.562c-20.592-12.304-33.334-35.292-33.334-59.91v-378.93c0-24.632 12.742-47.568 33.33-59.834l317.37-189.728c20.054-11.76 46.748-11.76 66.664 0l317.3 189.728c20.596 12.298 33.336 35.25 33.336 59.834v378.93c0 24.618-12.74 47.5-33.336 59.906l-317.3 189.548c-10.194 6.072-21.664 9.198-33.396 9.198l-0.134 0.036z M609.886 703.996c-129.22 0-168.012-63.22-168.012-118.542 0-5.258 4.096-9.458 9.124-9.458h41.042c4.564 0 8.454 3.4 9.124 8.032 6.168 43.204 33.496 62.3 108.648 62.3 66.798 0 94.182-20.692 94.182-57.368 0-21.184-6.926-36.848-110.814-47.394-86.854-8.882-140.576-28.746-140.576-100.59 0-66.27 53.992-104.98 144.468-104.98 92.256 0 152.924 28 158.346 101.658 0.204 2.674-0.736 5.258-2.482 7.288-1.742 1.93-4.156 3.054-6.706 3.054h-41.182c-4.292 0-8.048-3.124-8.918-7.426-8.802-33.906-33.94-46.804-99.126-46.804-72.972 0-81.492 25.506-81.492 45.214 0 23.926 10.062 30.882 108.588 44.344 97.522 13.326 143.866 32.234 143.866 103.104 0 71.562-57.616 117.566-158.15 117.566l0.070 0.002z' })
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

  return LogoNodejs;
}(_react.Component);

LogoNodejs.defaultProps = {
  // style
  style: {},
  color: '#000000',
  fontSize: '22px',

  // animation
  shake: false,
  beat: false,
  rotate: false
};

LogoNodejs.propTypes = {
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

exports.default = LogoNodejs;
module.exports = exports['default'];
//# sourceMappingURL=LogoNodejs.js.map