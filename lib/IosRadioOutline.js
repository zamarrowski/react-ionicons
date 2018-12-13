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

var IosRadioOutline = function (_Component) {
  _inherits(IosRadioOutline, _Component);

  function IosRadioOutline(props) {
    _classCallCheck(this, IosRadioOutline);

    var _this = _possibleConstructorReturn(this, (IosRadioOutline.__proto__ || Object.getPrototypeOf(IosRadioOutline)).call(this, props));

    _this.state = { classNames: [], animationActive: false };
    _this._getClasses = _this._getClasses.bind(_this);
    return _this;
  }

  _createClass(IosRadioOutline, [{
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
        _react2.default.createElement('path', { d: 'M227.8 812c-4.2 0-8.4-1.6-11.6-5-78.6-82-120.2-184-120.2-295s41.6-213 120.4-295c6.2-6.4 16.2-6.6 22.6-0.4s6.6 16.2 0.4 22.6c-72.8 75.8-111.4 170.2-111.4 272.8s38.6 197 111.4 273c6.2 6.4 6 16.6-0.4 22.6-3.2 3-7.2 4.4-11.2 4.4z M796.2 812c-4 0-8-1.4-11-4.4-6.4-6.2-6.6-16.2-0.4-22.6 72.8-76 111.4-170.4 111.4-273s-38.6-197-111.4-273c-6.2-6.4-6-16.6 0.4-22.6s16.6-6 22.6 0.4c78.8 82 120.4 184 120.4 295s-41.6 213-120.4 295c-3.2 3.6-7.4 5.2-11.6 5.2z M312.2 731.2c-4.2 0-8.2-1.6-11.4-4.8-56.2-57.2-87.2-132.6-87.2-212.8 0-82 32.2-158.8 90.6-216.2 6.2-6.2 16.4-6.2 22.6 0.2s6.2 16.4-0.2 22.6c-52.4 51.4-81.2 120.2-81.2 193.4 0 71.6 27.6 139.2 78 190.2 6.2 6.4 6.2 16.4-0.2 22.6-3 3.2-7 4.8-11 4.8z M711.8 731.2c-4 0-8.2-1.6-11.2-4.6-6.2-6.2-6.4-16.4-0.2-22.6 50.2-51 78-118.6 78-190.2 0-73.4-28.8-142-81.2-193.4-6.2-6.2-6.4-16.4-0.2-22.6s16.4-6.4 22.6-0.2c58.4 57.6 90.6 134.4 90.6 216.2 0 80-31 155.6-87.2 212.8-2.8 3-7 4.6-11.2 4.6z M396 653.8c-4.2 0-8.2-1.6-11.4-4.8-35.8-36.4-55.6-84.8-55.6-135.8 0-52.4 20.6-101.4 58-138.2 6.2-6.2 16.4-6.2 22.6 0.2s6.2 16.4-0.2 22.6c-31.2 30.6-48.4 71.6-48.4 115.4 0 42.8 16.4 83 46.4 113.4 6.2 6.2 6.2 16.4-0.2 22.6-3 3-7 4.6-11.2 4.6z M628 653.8c-4 0-8.2-1.6-11.2-4.6-6.2-6.2-6.4-16.4-0.2-22.6 30-30.4 46.4-70.8 46.4-113.4 0-43.8-17.2-84.6-48.4-115.4-6.2-6.2-6.4-16.4-0.2-22.6s16.4-6.4 22.6-0.2c37.4 36.8 58 85.8 58 138.2 0 51.2-19.8 99.4-55.6 135.8-3.2 3.2-7.4 4.8-11.4 4.8z M576 512c0 35.346-28.654 64-64 64s-64-28.654-64-64c0-35.346 28.654-64 64-64s64 28.654 64 64z' })
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

  return IosRadioOutline;
}(_react.Component);

IosRadioOutline.defaultProps = {
  // style
  style: {},
  color: '#000000',
  fontSize: '22px',

  // animation
  shake: false,
  beat: false,
  rotate: false
};

IosRadioOutline.propTypes = {
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

exports.default = IosRadioOutline;
module.exports = exports['default'];
//# sourceMappingURL=IosRadioOutline.js.map