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

var IosBowtie = function (_Component) {
  _inherits(IosBowtie, _Component);

  function IosBowtie(props) {
    _classCallCheck(this, IosBowtie);

    var _this = _possibleConstructorReturn(this, (IosBowtie.__proto__ || Object.getPrototypeOf(IosBowtie)).call(this, props));

    _this.state = { classNames: [], animationActive: false };
    _this._getClasses = _this._getClasses.bind(_this);
    return _this;
  }

  _createClass(IosBowtie, [{
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
        _react2.default.createElement('path', { d: 'M581.6 427c-9.6-17-27.6-22.6-49.6-22.6v-0.4c-12 0-28.6 2.6-45.2 5.8-23.8 4.6-39.4 14.2-39.4 14.2s7.2 54.6 0.2 117c-7 62.4-15.8 85-15.8 85s10.6 24.2 80 30c7.8 0.6 15.2 1 22 1 49 0 72.8-14.6 72.8-14.6s6.6-10.8 8.6-44.2c3.8-64.4-14-137-33.6-171.2z M423.4 417.6c-44-80.4-184.4-193.6-254.6-193.6-53-0-104.8 137-104.8 288s46 288 103 288c66.8 0 233-160 233-160s11.4-25.2 19.8-67.2l3.6-20.8c1.4-9.4 2.6-19.4 3.4-30 0.6-7 1-13.6 1.2-19.8l0.6-19.6c1.4-32-5.2-65-5.2-65zM230 448c0-2 1.4-3.6 3.4-3.8 1.2-0.2 29.8-5 86 6 42 8.2 70.2 19.2 85.4 26.4l-2.6 28.6c-5.2-1.8-10.6-3.6-17-6-9.4-3.4-21-7.4-38-13.4-76.2-26.2-113.4-33.8-113.8-33.8-2-0.4-3.4-2.2-3.4-4zM395 578.2c-40.2 9.4-118.8 15.4-122.2 15.6-2 0.2-4-1.2-4.2-3.4-0.4-2 1-4 3-4.6 0 0 42-11 76-20 23-6 42.2-13 52.8-17l-5.4 29.4z M855.2 224c-72.8 0-204.8 113-248.6 193.6l-1.6 2.8c0 0 2.8 5 3.8 6.8 6.8 12 13.4 28.6 18.8 48l5.8 23.4c4.4 20.4 7.4 42.4 8.4 64.4l0.4 18c0 5.8-0.2 11.4-0.6 17-2 33.4-9.2 44.2-9.2 44.2 15.2 21 150 157.8 224.4 157.8 57 0 103-137 103-288s-51.6-288-104.6-288zM719.6 446.2c39.8-14 70.4-19.2 70.6-19.2 2-0.4 4 0.8 4.4 2.8 0.6 2-0.4 4-2.2 4.8-1 0.4-101.4 45.8-136.4 67 0 0 0 0.4 0 0.4v0c0 0 0-0.2 0-0.4l-7.6-30.6v-0.2c20-6.6 47-16.2 71.2-24.6zM802.4 606.2c-0.4 1.8-2 3.2-4 3.2-0.2 0-0.2 0-0.4 0-4.2-0.4-98.8-9.8-136-23.2-4-23.2 1.8-24.8 1.8-25.8 11.8 4.6 31.6 11.8 54.8 18 37.6 10 80.6 23 81 23 2 0.8 3.2 2.8 2.8 4.8z' })
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

  return IosBowtie;
}(_react.Component);

IosBowtie.defaultProps = {
  // style
  style: {},
  color: '#000000',
  fontSize: '22px',

  // animation
  shake: false,
  beat: false,
  rotate: false
};

IosBowtie.propTypes = {
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

exports.default = IosBowtie;
module.exports = exports['default'];
//# sourceMappingURL=IosBowtie.js.map