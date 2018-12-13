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

var IosClock = function (_Component) {
  _inherits(IosClock, _Component);

  function IosClock(props) {
    _classCallCheck(this, IosClock);

    var _this = _possibleConstructorReturn(this, (IosClock.__proto__ || Object.getPrototypeOf(IosClock)).call(this, props));

    _this.state = { classNames: [], animationActive: false };
    _this._getClasses = _this._getClasses.bind(_this);
    return _this;
  }

  _createClass(IosClock, [{
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
        _react2.default.createElement('path', { d: 'M806.2 217.8c-162.4-162.4-425.8-162.4-588.4 0s-162.4 425.8 0 588.4c162.4 162.4 425.8 162.4 588.4 0 162.4-162.4 162.4-426 0-588.4zM512 160c8.8 0 16 7.2 16 16s-7.2 16-16 16-16-7.2-16-16c0-8.8 7.2-16 16-16zM207.2 336c4.4-7.6 14.2-10.2 21.8-5.8s10.2 14.2 5.8 21.8c-4.4 7.6-14.2 10.2-21.8 5.8s-10.2-14.2-5.8-21.8zM176 528c-8.8 0-16-7.2-16-16s7.2-16 16-16 16 7.2 16 16c0 8.8-7.2 16-16 16zM229 693.8c-7.6 4.4-17.4 1.8-21.8-5.8s-1.8-17.4 5.8-21.8 17.4-1.8 21.8 5.8c4.4 7.6 1.8 17.4-5.8 21.8zM357.8 811c-4.4 7.6-14.2 10.2-21.8 5.8s-10.2-14.2-5.8-21.8c4.4-7.6 14.2-10.2 21.8-5.8s10.2 14.2 5.8 21.8zM352 234.8c-7.6 4.4-17.4 1.8-21.8-5.8s-1.8-17.4 5.8-21.8c7.6-4.4 17.4-1.8 21.8 5.8s1.8 17.4-5.8 21.8zM512 864c-8.8 0-16-7.2-16-16s7.2-16 16-16 16 7.2 16 16c0 8.8-7.2 16-16 16zM528 539.8v228.2c0 8.8-7.2 16-16 16s-16-7.2-16-16v-228.4c-4.8-2.8-8.8-6.6-11.8-11.6-6-10.4-5.4-23 0.4-32.6l-59.2-109.8c-4.6-7.6-2-17.4 5.4-22 7.6-4.6 17.4-2 22 5.4l60 110.8c10.8 0.2 21.2 6 26.8 16 9 15.6 3.8 35-11.6 44zM688 816.8c-7.6 4.4-17.4 1.8-21.8-5.8s-1.8-17.4 5.8-21.8c7.6-4.4 17.4-1.8 21.8 5.8s1.8 17.4-5.8 21.8zM693.8 229c-4.4 7.6-14.2 10.2-21.8 5.8s-10.2-14.2-5.8-21.8c4.4-7.6 14.2-10.2 21.8-5.8s10.2 14.2 5.8 21.8zM816.8 688c-4.4 7.6-14.2 10.2-21.8 5.8s-10.2-14.2-5.8-21.8c4.4-7.6 14.2-10.2 21.8-5.8s10.2 14.2 5.8 21.8zM811 357.8c-7.6 4.4-17.4 1.8-21.8-5.8s-1.8-17.4 5.8-21.8 17.4-1.8 21.8 5.8c4.4 7.6 1.8 17.4-5.8 21.8zM848 528c-8.8 0-16-7.2-16-16s7.2-16 16-16 16 7.2 16 16c0 8.8-7.2 16-16 16z' })
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

  return IosClock;
}(_react.Component);

IosClock.defaultProps = {
  // style
  style: {},
  color: '#000000',
  fontSize: '22px',

  // animation
  shake: false,
  beat: false,
  rotate: false
};

IosClock.propTypes = {
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

exports.default = IosClock;
module.exports = exports['default'];
//# sourceMappingURL=IosClock.js.map