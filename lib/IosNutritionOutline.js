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

var IosNutritionOutline = function (_Component) {
  _inherits(IosNutritionOutline, _Component);

  function IosNutritionOutline(props) {
    _classCallCheck(this, IosNutritionOutline);

    var _this = _possibleConstructorReturn(this, (IosNutritionOutline.__proto__ || Object.getPrototypeOf(IosNutritionOutline)).call(this, props));

    _this.state = { classNames: [], animationActive: false };
    _this._getClasses = _this._getClasses.bind(_this);
    return _this;
  }

  _createClass(IosNutritionOutline, [{
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
        _react2.default.createElement('path', { d: 'M716 467.71l0.826-0.078c-0.274-0.274-0.092-0.202-0.37-0.474l-156.868-157.158c-11.666-12-28.386-20.308-46.97-20.308-23.622 0-44.23 12.308-55.27 32.308h-0.014c0 0-14.18 21.988-36.54 57.748l65.062 79.274c5.878 7.538 6.592 15.602 2.822 19.378l-0.228 0.142c-1.818 1.818-4.042 2.66-6.548 2.66-3.816 0-8.284-1.98-12.97-5.536l-71.744-58.836c-47.092 75.31-113.354 181.268-166.9 266.902l38.144 46.674c5.878 7.54 6.592 15.768 2.82 19.544l-0.228 0.228c-1.822 1.826-4.056 2.684-6.574 2.684-3.81 0-8.272-1.962-12.944-5.51l-42.134-33.066c-39.904 63.816-69.372 110.642-73.372 114.446v0.006c-6 10.124-8.17 22.264-8.17 35.328 0 35.31 29.314 63.934 64.57 63.934 15.642 0 29.14-6.79 41.598-15l229.302-168.218-57.676-70.716c-5.88-7.538-6.536-15.774-2.764-19.55l0.256-0.228c1.824-1.824 4.068-2.682 6.588-2.682 3.81 0 8.28 1.962 12.952 5.51l75.728 63.18c109.676-80.492 211.78-154.296 211.78-154.296h0.010c15.678-12 24.946-31.422 24.946-52.476 0-17.408-7.12-34.28-19.12-45.808v-0.006zM691.062 539.668c-5.328 3.868-93.384 67.864-191.528 139.798l-57.612-47.834c-10.49-7.962-21.326-11.996-32.216-11.996-10.93 0-21.184 4.194-28.916 11.818l-0.128 0.124-0.166 0.164-0.166 0.166c-15.616 15.642-15.522 41.646 0.222 61.834l0.22 0.286 0.226 0.276 36.446 44.624-201.312 147.792c-10.132 6.608-16.854 9.314-23.084 9.314-17.644 0-32-14.342-32-31.966 0-6.172 1.388-12.090 4.034-17.246 4.782-6.322 13.2-19.752 37.31-58.702 5.086-8.216 10.504-16.974 16.268-26.258l13.17 10.664 0.4 0.304c10.49 7.962 21.33 12 32.222 12 11.034 0 21.384-4.278 29.142-12.046l0.228-0.226c15.612-15.634 15.512-41.64-0.236-61.832l-0.226-0.288-0.23-0.284-23.628-28.91 135.504-216.692 44.652 36.586c10.508 7.976 21.356 12.020 32.246 12.020 9.908 0 19.262-3.45 26.678-9.78l0.922-0.674 1.742-1.748c15.58-15.606 15.48-41.556-0.236-61.708l-0.24-0.306-50.726-61.378c5.914-9.406 10.914-16.982 14.81-22.976l10.418-16.988c5.554-10.050 15.522-16.314 27.346-16.314 8.734 0 17.52 4.084 24.114 10.86l9.402 9.856h0.244l137.622 138.57v0.752l10.372 9.432c5.586 5.38 9.078 13.564 9.078 22.454 0 10.392-4.516 20.246-12.388 26.458z M879.988 230.35l-192.832 111.51 132.504-229.876-27.638-15.984-4.976 8.626-141.55 245.57 33.34 33.392 217.112-125.552z' })
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

  return IosNutritionOutline;
}(_react.Component);

IosNutritionOutline.defaultProps = {
  // style
  style: {},
  color: '#000000',
  fontSize: '22px',

  // animation
  shake: false,
  beat: false,
  rotate: false
};

IosNutritionOutline.propTypes = {
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

exports.default = IosNutritionOutline;
module.exports = exports['default'];
//# sourceMappingURL=IosNutritionOutline.js.map