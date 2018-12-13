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

var IosColorFilter = function (_Component) {
  _inherits(IosColorFilter, _Component);

  function IosColorFilter(props) {
    _classCallCheck(this, IosColorFilter);

    var _this = _possibleConstructorReturn(this, (IosColorFilter.__proto__ || Object.getPrototypeOf(IosColorFilter)).call(this, props));

    _this.state = { classNames: [], animationActive: false };
    _this._getClasses = _this._getClasses.bind(_this);
    return _this;
  }

  _createClass(IosColorFilter, [{
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
        _react2.default.createElement('path', { d: 'M732.388 424.244c2.37-13.056 3.614-26.504 3.614-40.244 0-123.712-100.292-224-224.002-224-123.714 0-224.002 100.288-224.002 224 0 13.74 1.244 27.188 3.612 40.244-94.374 26.36-163.61 112.968-163.61 215.756 0 123.71 100.288 224 224 224 62.682 0 119.34-25.758 160-67.254 40.656 41.496 97.316 67.254 159.998 67.254 123.71 0 224.002-100.29 224.002-224 0-102.788-69.238-189.394-163.612-215.756zM511.996 790.746c-0.968 0.99-1.958 1.964-2.95 2.938-6.402-6.788-12.378-13.974-17.902-21.518-27.122-37.050-43.148-82.732-43.148-132.166 0-13.738 1.244-27.188 3.614-40.242-71.498-19.972-128.562-74.52-152.028-144.486-3.188-9.504-5.744-19.294-7.644-29.318 1.884-0.58 3.764-1.178 5.67-1.708-0.092-0.504-0.17-1.014-0.258-1.518 8.372-2.098 16.926-3.734 25.64-4.86 9.496-1.23 19.178-1.868 29.010-1.868 62.682 0 119.34 25.756 160 67.252 40.656-41.496 97.316-67.252 159.998-67.252 9.832 0 19.514 0.638 29.012 1.868 8.71 1.126 17.266 2.76 25.632 4.858-0.086 0.506-0.164 1.014-0.258 1.52 1.91 0.534 3.79 1.128 5.676 1.71-1.898 10.024-4.458 19.814-7.644 29.316-23.464 69.966-80.532 124.514-152.026 144.484 2.37 13.056 3.614 26.506 3.614 40.244 0 49.434-16.028 95.116-43.148 132.166-5.524 7.544-11.504 14.734-17.906 21.52-0.992-0.974-1.982-1.948-2.954-2.94z M541.012 606.134c-9.498 1.228-19.18 1.868-29.012 1.868s-19.516-0.638-29.012-1.868c-1.964 10.996-2.992 22.312-2.992 33.866 0 39.16 11.796 75.612 32.004 106.010 20.208-30.398 32.004-66.85 32.004-106.010 0-11.552-1.028-22.87-2.992-33.866z M692.626 449.11c-6.78-0.728-13.66-1.112-20.628-1.112-54.708 0-104.138 23-139.142 59.834 13.45 18.376 24.176 38.868 31.562 60.896 59.51-16.91 107.33-61.872 128.208-119.618z M532.628 574.89c-5.25-14.524-12.21-28.238-20.628-40.902-8.418 12.664-15.378 26.378-20.628 40.902 6.778 0.728 13.66 1.112 20.628 1.112s13.85-0.382 20.628-1.112z M352 447.998c-6.968 0-13.85 0.382-20.628 1.112 20.878 57.746 68.698 102.708 128.212 119.62 7.386-22.030 18.11-42.522 31.562-60.896-35.006-36.836-84.44-59.836-139.146-59.836z' })
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

  return IosColorFilter;
}(_react.Component);

IosColorFilter.defaultProps = {
  // style
  style: {},
  color: '#000000',
  fontSize: '22px',

  // animation
  shake: false,
  beat: false,
  rotate: false
};

IosColorFilter.propTypes = {
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

exports.default = IosColorFilter;
module.exports = exports['default'];
//# sourceMappingURL=IosColorFilter.js.map