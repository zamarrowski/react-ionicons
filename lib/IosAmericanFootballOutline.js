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

var IosAmericanFootballOutline = function (_Component) {
  _inherits(IosAmericanFootballOutline, _Component);

  function IosAmericanFootballOutline(props) {
    _classCallCheck(this, IosAmericanFootballOutline);

    var _this = _possibleConstructorReturn(this, (IosAmericanFootballOutline.__proto__ || Object.getPrototypeOf(IosAmericanFootballOutline)).call(this, props));

    _this.state = { classNames: [], animationActive: false };
    _this._getClasses = _this._getClasses.bind(_this);
    return _this;
  }

  _createClass(IosAmericanFootballOutline, [{
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
        _react2.default.createElement('path', { d: 'M757.21 266.79c-145.406-145.408-378.45-170.794-523.51-170.79-77.852 0.002-130.382 7.316-130.382 7.316s-59.968 430.454 163.472 653.894c145.408 145.408 378.444 170.79 523.508 170.79 77.852 0 130.384-7.316 130.384-7.316s59.97-430.452-163.472-653.894zM130.284 130.416c21.99-2.028 58.464-4.416 103.428-4.416h0.288l-0.136-0.142c54.334 0 106.334 3.508 155.584 10.44l-253.2 253.162c-2.050-14.566-3.82-29.394-5.28-44.492-9.172-94.87-4.172-176.456-0.684-214.552zM287.8 736.204c-47.7-47.704-85.586-109.876-112.608-184.792-13.946-38.664-25.020-80.746-33.14-125.732l283.624-283.58c21.344 3.858 42.128 8.382 62.282 13.608 104.054 26.984 187.566 71.416 248.278 132.128 47.702 47.7 85.572 109.856 112.594 184.772 13.948 38.666 25.018 80.75 33.134 125.742l-283.624 283.622c-21.32-3.86-42.082-8.382-62.208-13.602-104.060-26.978-187.612-71.452-248.332-132.166zM893.722 893.736c-21.988 2.024-58.46 4.55-103.42 4.55-54.384 0-106.45-3.54-155.752-10.5l253.214-253.214c2.048 14.558 3.816 29.376 5.276 44.466 9.176 94.874 4.172 176.596 0.682 214.698z M614.608 635.694l45.25 45.264-57.308 57.304 22.63 22.628 135.762-135.762-22.628-22.628-57.442 57.442-45.25-45.262 57.432-57.434-22.626-22.626-57.43 57.428-45.266-45.276 57.404-57.404-22.626-22.628-57.4 57.4-45.252-45.262 57.394-57.394-22.628-22.626-57.388 57.39-45.262-45.274 57.374-57.374-22.626-22.626-57.37 57.37-45.248-45.26 57.364-57.364-22.626-22.626-135.766 135.764 22.628 22.628 57.386-57.388 45.248 45.26-57.382 57.382 22.626 22.626 57.378-57.378 45.26 45.274-57.356 57.358 22.626 22.626 57.354-57.354 45.252 45.262-57.348 57.348 22.628 22.626 57.342-57.342 45.266 45.276-57.32 57.32 22.628 22.628z' })
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

  return IosAmericanFootballOutline;
}(_react.Component);

IosAmericanFootballOutline.defaultProps = {
  // style
  style: {},
  color: '#000000',
  fontSize: '22px',

  // animation
  shake: false,
  beat: false,
  rotate: false
};

IosAmericanFootballOutline.propTypes = {
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

exports.default = IosAmericanFootballOutline;
module.exports = exports['default'];
//# sourceMappingURL=IosAmericanFootballOutline.js.map