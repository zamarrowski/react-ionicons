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

var MdPlanet = function (_Component) {
  _inherits(MdPlanet, _Component);

  function MdPlanet(props) {
    _classCallCheck(this, MdPlanet);

    var _this = _possibleConstructorReturn(this, (MdPlanet.__proto__ || Object.getPrototypeOf(MdPlanet)).call(this, props));

    _this.state = { classNames: [], animationActive: false };
    _this._getClasses = _this._getClasses.bind(_this);
    return _this;
  }

  _createClass(MdPlanet, [{
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
        _react2.default.createElement('path', { d: 'M271.4 302c-5 6-9.8 12-14.4 18.4 64.4 72.6 152.2 153 248.4 227.4 75.6 58.4 152.6 110.4 222.8 150.2 11.8 6.6 23.4 13 34.6 18.8 5-6 9.8-12 14.4-18.4 23.4-32.2 36.2-66.4 46.6-107.2 1.6-6.4 3-12.8 4.2-19 31.6-166-71.2-329.8-237-371.8-74-18.8-148.2-10.2-212.6 19.4-42.8 19.8-76.4 45.8-107 82.2z M836.4 653.6c-8.2 22-14.8 35-14.8 35 36.4 42.2 49.2 67.8 63.8 92.8 4.8 8.2 14.8 26.2 1.8 24.8-3.4-0.6-7-1.4-11-2.6-42.6-10.8-102.4-37.4-168.6-74.8-71.6-40.6-149.8-93.4-226.6-152.6-102.2-79-195-164.6-261.2-241-30.6-35.2-55.2-68.4-71.4-95.8-4.8-8.2-7.8-12.6-11.2-20.8-5-12.4 10-10.2 14-9.2 29.8 7.6 70 19.8 116.4 47.6 0 0 8.6-9.6 27.8-22.8-45.6-30.8-89.2-55.4-130.4-71-46.2-17.6-82.2-13.6-95 7.4-24.4 39.8 28 144.6 130.6 264-43 172 61.2 346.6 233 390 82.2 20.8 164.8 7.8 233.6-30 76.2 35.2 144.2 57.2 193.8 69.8 47.8 12.2 80.8 11 93.6-9.8 22.2-36.4-24.2-103.6-118.2-201z' })
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

  return MdPlanet;
}(_react.Component);

MdPlanet.defaultProps = {
  // style
  style: {},
  color: '#000000',
  fontSize: '22px',

  // animation
  shake: false,
  beat: false,
  rotate: false
};

MdPlanet.propTypes = {
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

exports.default = MdPlanet;
module.exports = exports['default'];
//# sourceMappingURL=MdPlanet.js.map