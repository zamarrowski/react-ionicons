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

var IosInfinite = function (_Component) {
  _inherits(IosInfinite, _Component);

  function IosInfinite(props) {
    _classCallCheck(this, IosInfinite);

    var _this = _possibleConstructorReturn(this, (IosInfinite.__proto__ || Object.getPrototypeOf(IosInfinite)).call(this, props));

    _this.state = { classNames: [], animationActive: false };
    _this._getClasses = _this._getClasses.bind(_this);
    return _this;
  }

  _createClass(IosInfinite, [{
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
        _react2.default.createElement('path', { d: 'M913.642 364.754c-40.078-39.178-93.518-60.754-150.472-60.754s-110.39 21.576-150.42 60.708l-78.212 75.77 50.12 49.378 77.686-75.538c26.916-26.19 62.642-40.614 100.598-40.614 37.958 0 73.682 14.424 100.564 40.582 26.726 26.154 41.424 60.936 41.386 97.94-0.038 36.886-14.726 71.5-41.354 97.456-26.916 26.19-62.64 40.614-100.598 40.614-37.956 0-73.682-14.424-100.582-40.598l-251.066-244.98c-40.31-39.154-93.736-60.718-150.438-60.718-56.954 0-110.39 21.576-150.46 60.746-40.188 39.226-62.348 91.518-62.394 147.24-0.048 55.644 22.11 107.946 62.384 147.26 40.080 39.178 93.518 60.754 150.47 60.754 56.95 0 110.388-21.576 150.446-60.726l77.988-75.818-50.176-49.004-77.658 75.23c-26.916 26.19-62.642 40.614-100.6 40.614-37.954 0-73.678-14.424-100.56-40.582-26.728-26.154-41.428-60.938-41.388-97.942 0.038-36.886 14.726-71.498 41.356-97.454 26.916-26.19 62.64-40.614 100.594-40.614 37.958 0 73.684 14.424 100.584 40.598l251.064 244.978c40.308 39.156 93.734 60.72 150.436 60.72 56.952 0 110.388-21.576 150.426-60.71 40.358-39.146 62.602-91.454 62.634-147.28 0.034-55.676-22.116-107.974-62.358-147.256z' })
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

  return IosInfinite;
}(_react.Component);

IosInfinite.defaultProps = {
  // style
  style: {},
  color: '#000000',
  fontSize: '22px',

  // animation
  shake: false,
  beat: false,
  rotate: false
};

IosInfinite.propTypes = {
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

exports.default = IosInfinite;
module.exports = exports['default'];
//# sourceMappingURL=IosInfinite.js.map