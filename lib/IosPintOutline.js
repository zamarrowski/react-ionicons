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

var IosPintOutline = function (_Component) {
  _inherits(IosPintOutline, _Component);

  function IosPintOutline(props) {
    _classCallCheck(this, IosPintOutline);

    var _this = _possibleConstructorReturn(this, (IosPintOutline.__proto__ || Object.getPrototypeOf(IosPintOutline)).call(this, props));

    _this.state = { classNames: [], animationActive: false };
    _this._getClasses = _this._getClasses.bind(_this);
    return _this;
  }

  _createClass(IosPintOutline, [{
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
        _react2.default.createElement('path', { d: 'M736 350.4c0-39-2-163.4-38.6-231.2-9-16.4-25-23.2-63.4-23.2h-244c-38.6 0-54.4 6.8-63.4 23.2-36.6 67.8-38.6 193-38.6 232 0 182 64 186.2 64 335.6 0 73.4-32 133.4-32 185.4 0 50.2 18 55.6 64 55.6h256c46 0 64-5.8 64-55.8 0-52-32-111.4-32-184.8 0-149.4 64-154.8 64-336.8zM354.8 134c1-1.8 1.4-2 4-3 4-1.6 12.8-3 31.2-3h244c18.2 0 27 1.4 31.2 3 2.8 1 3.2 1.4 4.2 3.2 14.2 26.2 24.4 67.6 30 119.8h-374.6c5.6-52.2 15.8-94 30-120zM669.6 893.2c-2.8 1.2-10.4 2.8-29.6 2.8h-256c-19.2 0-26.8-1.6-29.8-2.8-0.8-1.8-2.2-7.6-2.2-21 0-19.6 6-42.4 12.8-68.6 9-34 19.2-72.6 19.2-116.6 0-77-16.2-119.6-31.8-160.8-16.6-43.8-32.2-85.4-32.2-175 0-22.8 0.8-44.6 2-65h380c1.4 20.4 2 42 2 64.4 0 89.6-15.6 131.4-32.4 175.6-15.6 41.4-31.6 84.2-31.6 161.2 0 44 10.2 82.4 19.2 116.2 7 26.2 12.8 49 12.8 68.6 0 13.4-1.6 19.2-2.4 21z' })
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

  return IosPintOutline;
}(_react.Component);

IosPintOutline.defaultProps = {
  // style
  style: {},
  color: '#000000',
  fontSize: '22px',

  // animation
  shake: false,
  beat: false,
  rotate: false
};

IosPintOutline.propTypes = {
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

exports.default = IosPintOutline;
module.exports = exports['default'];
//# sourceMappingURL=IosPintOutline.js.map