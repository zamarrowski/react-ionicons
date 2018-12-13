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

var IosHandOutline = function (_Component) {
  _inherits(IosHandOutline, _Component);

  function IosHandOutline(props) {
    _classCallCheck(this, IosHandOutline);

    var _this = _possibleConstructorReturn(this, (IosHandOutline.__proto__ || Object.getPrototypeOf(IosHandOutline)).call(this, props));

    _this.state = { classNames: [], animationActive: false };
    _this._getClasses = _this._getClasses.bind(_this);
    return _this;
  }

  _createClass(IosHandOutline, [{
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
        _react2.default.createElement('path', { d: 'M546 127.8c21 0 38 17 38 37.8v265.2c0 8.8 7.2 16 16 16s16-7.2 16-16v-233.2c0-20.8 17-37.8 38-37.8s38 17 38 37.8v297c0 8.8 7.2 16 16 16s16-7.2 16-16v-201.2c0-20.8 17-37.8 38-37.8s38 17 38 37.8v428.6c0 101.6-57.2 174-140.4 174 0 0-60 0-103 0s-73.2-22.2-73.2-22.2c-77.8-46.8-169.6-177.2-204-216.8-35.8-41-70.2-76.4-48.4-98 11.2-10.6 23.4-15.6 36.2-15.6 24.4 0 52.4 17 83 44.4l49.8 43.4v-401.6c0-20.8 17-37.8 38-37.8s38 17 38 37.8v233.2c0 8.8 7.2 16 16 16s16-7.2 16-16v-297c-0-20.8 17-38 38-38zM545.8 96c-38.6 0-69.8 31.2-69.8 69.8v5.2c-10-7-24-11.2-38-11.2-38.6 0-70 31.4-70 69.8v331c-38-33.8-70.4-49-100.6-49-21.8 0-41.6 8.2-58.6 24.2l-0.8 0.4c-11.4 11.4-27.4 36.4-5 76.2 10.2 17.8 26.4 36.4 43.6 56 2.6 3 5.4 6.2 8.2 9.2 7 8 17.2 21 29.2 36 46.2 58.4 116.2 147.2 181.8 187 7.6 5.2 42.2 27.4 90.6 27.4h103c50 0 94.8-22 126.2-60.8 30.4-37 46.4-87.8 46.4-145.2v-428.6c0-38.4-31.4-69.8-70-69.8-14 0-26 4.2-38 11.2v-37.2c0-38.4-31.6-69.8-70.2-69.8-15.8 0-30.4 5.2-42.2 14.2-9.8-26.8-35.6-46-65.8-46v0z' })
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

  return IosHandOutline;
}(_react.Component);

IosHandOutline.defaultProps = {
  // style
  style: {},
  color: '#000000',
  fontSize: '22px',

  // animation
  shake: false,
  beat: false,
  rotate: false
};

IosHandOutline.propTypes = {
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

exports.default = IosHandOutline;
module.exports = exports['default'];
//# sourceMappingURL=IosHandOutline.js.map