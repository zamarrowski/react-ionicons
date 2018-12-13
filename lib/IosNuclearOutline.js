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

var IosNuclearOutline = function (_Component) {
  _inherits(IosNuclearOutline, _Component);

  function IosNuclearOutline(props) {
    _classCallCheck(this, IosNuclearOutline);

    var _this = _possibleConstructorReturn(this, (IosNuclearOutline.__proto__ || Object.getPrototypeOf(IosNuclearOutline)).call(this, props));

    _this.state = { classNames: [], animationActive: false };
    _this._getClasses = _this._getClasses.bind(_this);
    return _this;
  }

  _createClass(IosNuclearOutline, [{
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
        _react2.default.createElement('path', { d: 'M640 544c0-47.6-26.2-89.4-65-111.4l162.4-275.8c-66.2-38.6-143.2-60.8-225.4-60.8-82.4 0-159.8 22.4-226.2 61.2l159.2 277.8c-36.6 22.6-61 63-61 109h-320c0 166.6 93.8 306.8 228.8 384l156.2-272.6c18.6 10.6 40.2 16.6 63 16.6s44.2-6 62.6-16.4l156.6 272.4c135-77.2 228.8-217.4 228.8-384h-320zM330 169.8c56.4-27.4 118.8-41.8 182-41.8 62.8 0 124.8 14.2 180.8 41.4l-147.8 251c-10.6-2.8-21.6-4.4-33-4.4-13.2 0-26 2-38 5.8l-144-252zM281.4 883.4c-51.6-34.6-94.8-79.2-126.4-130.6-33-53.6-52.6-114.2-57.8-176.8h290.8c6 23.2 18.4 43.8 35 60l-141.6 247.4zM416 544c0-34.2 18-64.2 44.8-81.2v0c0.8-0.6 1.6-1 2.4-1.6 14.2-8.4 31-13.2 48.6-13.2 53 0 96 43 96 96s-43 96-96 96-95.8-43-95.8-96zM742.4 883.4l-142.2-247c17-16.2 29.6-37 35.6-60.4h290.8c-5 62.6-24.8 123.2-57.8 176.8-31.4 51.4-74.8 96-126.4 130.6z' })
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

  return IosNuclearOutline;
}(_react.Component);

IosNuclearOutline.defaultProps = {
  // style
  style: {},
  color: '#000000',
  fontSize: '22px',

  // animation
  shake: false,
  beat: false,
  rotate: false
};

IosNuclearOutline.propTypes = {
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

exports.default = IosNuclearOutline;
module.exports = exports['default'];
//# sourceMappingURL=IosNuclearOutline.js.map