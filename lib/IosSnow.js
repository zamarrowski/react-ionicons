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

var IosSnow = function (_Component) {
  _inherits(IosSnow, _Component);

  function IosSnow(props) {
    _classCallCheck(this, IosSnow);

    var _this = _possibleConstructorReturn(this, (IosSnow.__proto__ || Object.getPrototypeOf(IosSnow)).call(this, props));

    _this.state = { classNames: [], animationActive: false };
    _this._getClasses = _this._getClasses.bind(_this);
    return _this;
  }

  _createClass(IosSnow, [{
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
        _react2.default.createElement('path', { d: 'M871.4 683l-58.2-34c21.4-20.8 45.4-30.8 45.6-31 16.6-6.6 25.2-25.2 19.6-42-4.2-13-16.4-21.8-30-21.8-4.2 0-8.2 0.8-12 2.4-5 2-47 19.8-80.6 59l-175.6-103.6 175.8-103.6c34.2 40.2 78.4 58.2 80.6 59.2 3.8 1.6 8 2.4 12 2.4 13.6 0 25.6-8.8 30-21.8 5.6-17-3-35.4-19.6-42-0.2-0.2-24.4-10.2-45.8-31l58.2-34c15.8-9.2 21.2-29.6 12.2-45.6-6-10.4-17-16.8-28.8-16.8-5.8 0-11.6 1.6-16.6 4.6l-58 33.8c-7-29-3.6-55-3.6-55.2 2.6-17.8-9-34.6-26.4-38.2-2.2-0.4-4.4-0.6-6.6-0.6-15.6 0-28.6 11.2-31.2 26.8l-0.2 0.6c-4.8 20.8-6.2 61.6 7 101.8l-173.2 102.2v-207.2c50-9.4 83.6-32.6 88.8-36.8 8.4-6.6 13.8-16.2 14.8-25.6 0.6-7.6-1.8-15-6.6-20.6-6.4-7.2-16.8-11.2-28.6-11.2-8.8 0-16.8 2.4-22.8 6.8-2.8 1.8-17.6 13-45.6 21v-67.6c0-18-15.6-33.4-34-33.4s-34 15.2-34 33.4v67.4c-22-7.4-37.2-17.4-45.4-22.8-8.2-5.6-18.2-8.4-24.2-8.4-5.8 0-19.6 0.2-27.4 13.2-6 9.8-5.6 18.4-4.8 23.6 1 5.8 3.8 12.6 11 20.4s46.8 32.2 90.8 40.6v206l-183.2-102.6c18.8-52 14.8-99.8 14.8-100.4-2.4-16.4-14-27.4-29.2-27.4-2.2 0-4.4 0.2-6.4 0.6-17 3.6-28 20-25.4 38.2 0.2 1.2 3.8 26.6-3.2 55.2l-59.6-33.8c-5-3-10.8-4.6-16.6-4.6-11.8 0-22.8 6.4-28.8 16.8-9 15.8-3.6 36.2 12.2 45.6l58.2 34c-21.4 20.6-45.4 30.8-45.6 31-16.6 6.6-25.2 25.2-19.6 42 4.2 13 16.4 21.8 30 21.8 4.2 0 8.2-0.8 12-2.4 2-0.8 46.2-19 80.6-59.2l179.8 103.6-179.8 103.6c-33.4-39.4-75.4-57-80.6-59-3.8-1.6-8-2.4-12-2.4-13.6 0-25.6 8.8-30 21.8-5.6 17 3 35.4 19.4 42 0.2 0.2 24.4 10.4 45.8 31l-58.2 34c-15.8 9.2-21.2 29.6-12.2 45.6 6 10.4 17 16.8 28.8 16.8 5.8 0 11.6-1.6 16.6-4.6l58-33.8c7 29 3.6 55 3.6 55.2-2.6 17.8 9 34.4 26.4 38.2 2.2 0.4 4.4 0.6 6.6 0.6 15.8 0 29-11.6 31.2-27.4 1-6.8 6.4-53.6-10.8-100.4l177.2-102.6v206c-42 8.4-79.6 32.8-90.8 42.6l-0.2 0.2c-5.8 4.6-9.2 11.2-9.8 18.6-0.8 9.2 2.8 19.2 10.2 27.4 2.4 2.8 10 11.2 21.6 11.2 6.2 0 12.2-2.4 18.4-7.2l1-0.8c2-1.8 26-17.6 50-25.4v67.4c0 18 15.6 33.4 34 33.4s34-15.2 34-33.4v-67.8c30 8 44.4 21.2 47.6 23.2 5.8 4.4 13.6 6.6 21.8 6.6 11.2 0 21.2-4 27.4-11.2 4.6-5.4 7-12.2 6.4-19.2-0.8-9.4-7-19.4-16.2-26.8-0.4-0.4-33-28.8-87-38.8v-205l173.2 102.2c-14.4 42.6-9.6 83.2-6.6 99.6v0.4c2.4 15.6 12.6 27.2 29 27.2 2.2 0 4.4-0.2 6.6-0.6 17.6-3.6 29.8-20.6 27.4-38-0.2-1.6-2.8-27.2 4-55.6l58.2 34.2c5 3 10.8 5 16.6 5 0 0 0 0 0 0 12 0 23-6.8 28.8-17.2 9-15.6 3.6-36.4-12.2-45.6z' })
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

  return IosSnow;
}(_react.Component);

IosSnow.defaultProps = {
  // style
  style: {},
  color: '#000000',
  fontSize: '22px',

  // animation
  shake: false,
  beat: false,
  rotate: false
};

IosSnow.propTypes = {
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

exports.default = IosSnow;
module.exports = exports['default'];
//# sourceMappingURL=IosSnow.js.map