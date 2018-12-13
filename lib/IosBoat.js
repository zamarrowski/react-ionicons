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

var IosBoat = function (_Component) {
  _inherits(IosBoat, _Component);

  function IosBoat(props) {
    _classCallCheck(this, IosBoat);

    var _this = _possibleConstructorReturn(this, (IosBoat.__proto__ || Object.getPrototypeOf(IosBoat)).call(this, props));

    _this.state = { classNames: [], animationActive: false };
    _this._getClasses = _this._getClasses.bind(_this);
    return _this;
  }

  _createClass(IosBoat, [{
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
        _react2.default.createElement('path', { d: 'M704 864c-52.2 18.2-132.8 31.6-192 31.6s-139.8-13.4-192-31.6c0 0-70 45-160 64 64.6 0 106.6-18 160-32 46 18 133.4 31.6 192 31.6s148-11.6 192-31.6c53.4 14 94 32 160 32-87.6-19-160-64-160-64z M891 526c0 0 0 0 0 0l-379-174-379 174c0 0 0 0 0 0-12.4 5.8-21 18.2-21 32.8 0 4.8 1 9.2 2.6 13.4l109.4 291.8c55 0 113.4-38 113.4-38 36 18 106.2 34.2 158.6 37.2 5.6 0.4 11 0.4 16 0.4s10.4-0.2 16-0.4c52.4-3 122.6-19 158.6-37.2 0 0 58.4 38 113.4 38l109.4-291.8c1.6-4.2 2.6-8.6 2.6-13.4 0-14.6-8.6-27-21-32.8zM424 576c-13.2 0-24-19.6-24-44s10.8-44 24-44 24 19.6 24 44-10.8 44-24 44zM600 576c-13.2 0-24-19.6-24-44s10.8-44 24-44 24 19.6 24 44-10.8 44-24 44z M783.8 254v-0.2c-11.2-53.2-35-93.8-79.8-93.8h-69.2l-16.4-64h-213.4l-16.2 64h-68.8c-45.8 0-70.2 41.4-79.6 94l-39.4 208.8 68.4-31.4 33.2-175.4c5-21.4 14.6-32 32.2-32h354.2c17.8 0 26.2 10 32.2 32l33.2 175.4 68.6 31.4-39.2-208.8z' })
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

  return IosBoat;
}(_react.Component);

IosBoat.defaultProps = {
  // style
  style: {},
  color: '#000000',
  fontSize: '22px',

  // animation
  shake: false,
  beat: false,
  rotate: false
};

IosBoat.propTypes = {
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

exports.default = IosBoat;
module.exports = exports['default'];
//# sourceMappingURL=IosBoat.js.map