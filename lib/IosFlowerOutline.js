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

var IosFlowerOutline = function (_Component) {
  _inherits(IosFlowerOutline, _Component);

  function IosFlowerOutline(props) {
    _classCallCheck(this, IosFlowerOutline);

    var _this = _possibleConstructorReturn(this, (IosFlowerOutline.__proto__ || Object.getPrototypeOf(IosFlowerOutline)).call(this, props));

    _this.state = { classNames: [], animationActive: false };
    _this._getClasses = _this._getClasses.bind(_this);
    return _this;
  }

  _createClass(IosFlowerOutline, [{
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
        _react2.default.createElement('path', { d: 'M770.2 460.4c-53.4 0-120.2 13.8-172.6 27-1.8-6.4-4.2-12.4-7.4-18.2 46.4-27.6 103.4-65 141-102.8 73.4-73.4 96.6-127.2 75.2-148.6-5.2-5.2-12-7.6-20.6-7.6-27.6 0-72 26.8-128 82.8-37.6 37.6-75.2 94.4-102.8 140.8-5.6-3.2-11.8-5.6-18.2-7.6 13.4-52.4 27-119 27-172.2 0-103.8-21.6-158.2-52-158.2s-52 54.4-52 158.2c0 53.2 13.6 120 27 172.2-6.4 1.8-12.4 4.4-18.2 7.6-27.6-46.4-65-103.2-102.8-140.8-56-56-100.6-82.8-128-82.8-8.6 0-15.4 2.6-20.6 7.6-21.6 21.6 1.6 75.2 75.2 148.6 37.8 37.8 94.6 75.2 141 102.8-3 5.6-5.6 11.8-7.4 18.2-52.4-13.4-119.2-27-172.6-27-103.6 0-157.4 21.2-157.4 51.6s53.8 52.4 157.8 52.4c53.4 0 120.4-13.8 172.8-27.2 1.8 6.2 4.4 12.4 7.6 18-46.6 27.6-103.6 65.2-141.4 103-73.4 73.4-96.6 127.2-75.2 148.6 5.2 5.2 12 7.6 20.6 7.6 27.6 0 72-26.8 128-82.8 37.8-37.8 75.6-95 103.2-141.6 5.6 3 11.6 5.6 18 7.4-13.4 52.4-27.2 119.6-27.2 173 0 103.8 21.6 157.2 52 157.2s52-53.4 52-157.2c0-53.6-13.8-120.6-27.2-173 6.2-1.8 12.2-4.2 18-7.4 27.6 46.6 65.2 103.8 103.2 141.6 56 56 100.6 82.8 128 82.8 8.6 0 15.4-2.6 20.6-7.6 21.6-21.6-1.6-75.2-75.2-148.6-37.8-37.8-95-75.4-141.4-103 3.2-5.6 5.6-11.6 7.6-18 52.4 13.4 119.4 27.2 172.8 27.2 103.8 0 157.8-21.6 157.8-52s-54.2-52-158.2-52zM678.8 314c65.8-65.8 97.8-73.2 105.6-74-0.4 4.2-2.4 13.6-11.8 29.6-12.6 21.6-34 47.8-62.2 75.8-25.2 25.2-63.6 54-112.4 84.4-1.2-1.2-2.4-2.4-3.6-3.6 30.4-48.4 59.4-87 84.4-112.2zM499.4 156.6c4.8-18 9.8-26.2 12.6-29.4 2.8 3.4 7.8 11.4 12.6 29.4 6.4 24.2 9.8 57.8 9.8 97.6 0 35.6-6.8 83.2-19.8 139-0.8 0-1.6 0-2.6 0-0.8 0-1.6 0-2.6 0-13-55.8-19.8-103.4-19.8-139 0.2-39.6 3.4-73.4 9.8-97.6zM426 430c-48.6-30.4-87.2-59.2-112.4-84.4-28-28-49.4-54.2-62.2-75.8-9.4-16-11.6-25.4-11.8-29.6 7.6 0.8 39.8 8.2 105.6 74 25.2 25.2 54 63.6 84.4 112.4-1.2 1-2.4 2.2-3.6 3.4zM253.8 534.8c-39.6 0-73.4-3.4-97.4-10-18-4.8-26-10-29.2-12.8 3.2-2.6 11.2-7.8 29.4-12.4 24-6.2 57.6-9.4 97.2-9.4 35.6 0 83.4 6.8 139.4 19.8 0 0.6 0 1.4 0 2 0 1 0 2 0 2.8-56 13.2-103.8 20-139.4 20zM345.2 710.8c-65.8 65.8-97.8 73.2-105.6 74 0.4-4.2 2.4-13.6 11.8-29.6 12.6-21.6 34-47.8 62.2-75.8 25.2-25.2 64-54.2 113-84.8 1 1.2 2.2 2.2 3.4 3.4-30.6 48.8-59.6 87.6-84.8 112.8zM524.6 867.8c-4.8 18-10 26-12.6 29-2.6-3.2-7.8-11-12.6-29-6.4-24-9.6-57.6-9.6-97.2 0-35.8 6.8-83.6 20-139.8 0.8 0 1.6 0 2.4 0s1.6 0 2.4 0c13 56.2 20 104.2 20 139.8-0.4 39.8-3.6 73.2-10 97.2zM512 576c-35.4 0-64-28.6-64-64s28.6-64 64-64 64 28.6 64 64-28.6 64-64 64zM597.4 594.6c49 30.4 87.8 59.4 113 84.8 28 28 49.6 54.2 62.2 75.8 9.4 16 11.6 25.4 11.8 29.6-7.6-0.8-39.8-8.2-105.6-74-25.2-25.2-54.2-64-84.8-113 1.2-1 2.4-2 3.4-3.2zM867.6 525c-24 6.4-57.8 9.6-97.4 9.6-35.6 0-83.4-6.8-139.4-19.8 0-1 0-2 0-2.8 0-0.6 0-1.4 0-2 56-13 103.8-19.8 139.4-19.8 39.6 0 73.2 3.4 97.4 9.6 18 4.8 26 9.8 29.2 12.6-3.2 2.8-11.2 8-29.2 12.6z M636.8 752.8c-17-17-33.8-37.4-49.6-59 4 26.4 6.6 52.8 6.6 76.8 0 23.4-1 45-3.2 64.2 24.6 43.6 48.6 65.4 68 65.4 3.2 0 6.4-0.6 9.4-1.8 22-9 26.6-46.6 9-108.6-12.8-10.6-26.2-23-40.2-37zM656.4 869.6c-5-2.8-17.4-11.8-35.2-41.4 1.2-14.6 2-30.4 2.2-47 9.4 9 18.4 17.6 27.4 25.2 9.4 37 7.8 56.2 5.6 63.2z M387.6 272.2c16.8 16.8 33.4 37 49.2 58.4-4-26.4-6.4-52.6-6.4-76.4 0-23.4 1-45 3.2-64.2-24.6-43.6-48.6-65.4-68-65.4-3.2 0-6.4 0.6-9.4 1.8-22 9-26.6 46.6-9 108.6 12.8 10.8 26.4 23.2 40.4 37.2zM367.6 155.4c5 2.8 17.4 11.8 35.2 41.4-1.2 14.6-2 30.2-2.2 46.8-9.2-9-18.4-17.4-27.4-25.2-9.4-36.8-7.8-56-5.6-63z M271.6 637.2c17-17 37.4-33.8 59-49.6-26.4 4-52.8 6.6-76.8 6.6-23.4 0-45-1-64.2-3.2-51 28.8-72.2 56.4-63.6 77.4 5.2 12.8 20.2 19.8 44.2 19.8 17 0 38.6-3.4 64.4-10.8 10.8-12.8 23-26.2 37-40.2zM170.2 658.6c-7.6 0-12.6-1-15.2-1.8 2.8-5.2 11.8-17.4 41.4-35.2 14.6 1.2 30.4 2 47 2.2-9 9.2-17.4 18.4-25.2 27.4-19 4.8-35.4 7.4-48 7.4z M752.4 387.6c-17 17-37.4 33.8-59 49.6 26.4-4 52.8-6.6 76.8-6.6 23.4 0 45 1 64.2 3.2 51-28.8 72.2-56.4 63.6-77.4-5.2-12.8-20.2-19.8-44.2-19.8-17 0-38.6 3.4-64.4 10.8-10.8 13-23 26.4-37 40.2zM853.8 366.4c7.6 0 12.6 1 15.2 1.8-2.8 5.2-12 17.4-41.4 35.2-14.6-1.2-30.4-2-47-2.2 9-9.2 17.4-18.4 25.2-27.4 19-5 35.4-7.4 48-7.4z M387.2 752.8c-16.6 16.6-32.6 31.2-47.6 43.2-15.6 56.4-11 90.8 9.8 99.8 3.2 1.4 6.4 2 9.8 2 20.6 0 46.4-24 73.4-72.4-1.4-16.8-2.2-35-2.2-54.6 0-24 2.6-50.4 6.6-76.8-16 21.4-32.8 41.8-49.8 58.8zM361.6 867c-1.6-5.6-4-20.8 4.2-54.2 11.2-9.4 22.8-20 34.8-31.6 0.2 13 0.6 25.4 1.6 37.2-19.4 32.8-34 45.4-40.6 48.6z M636.8 272.4c16.6-16.6 32.4-31 47.4-43 15.8-56.8 11.4-91.6-9.6-100.4-3.2-1.4-6.4-2-9.8-2-20.6 0-46.4 24-73.4 72.4 1.4 16.8 2.2 35 2.2 54.6 0 24.2-2.6 50.6-6.6 77.4 16-21.4 32.8-42 49.8-59zM662.4 157.8c1.6 5.6 4 20.8-4.4 54.8-11.2 9.4-22.8 20-34.6 31.4-0.2-13.2-0.6-25.8-1.6-37.6 19.4-32.8 34-45.2 40.6-48.6z M199.2 433c16.8-1.4 35-2.2 54.6-2.2 24 0 50.2 2.6 76.6 6.6-21.4-15.8-41.8-32.6-58.8-49.6-16.6-16.6-31.2-32.6-43.4-47.8-22.6-6.2-41.8-9.2-57.2-9.2-22.8 0-37.2 6.6-42.4 19-9.2 21.8 14.2 51.8 70.6 83.2zM171.2 360.4c10.8 0 24.6 2 40.2 5.8 9.4 11.2 20 22.8 31.6 34.8-13 0.2-25.4 0.6-37.2 1.6-32.8-19.4-45.2-34-48.6-40.6 2.8-0.8 7.2-1.6 14-1.6z M824.8 592c-16.8 1.4-35 2.2-54.6 2.2-24 0-50.4-2.6-76.8-6.6 21.6 15.8 42 32.8 59 49.6 16.6 16.6 31 32.6 43.2 47.6 22.8 6.4 41.8 9.4 57.2 9.4 22.8 0 37.2-6.6 42.4-19 9.4-22-14-51.8-70.4-83.2zM852.8 664.6c-10.8 0-24.6-2-40.4-6-9.4-11.2-20-22.8-31.6-34.8 13-0.2 25.4-0.6 37.2-1.6 32.8 19.4 45.2 34 48.6 40.6-2.6 1-7 1.8-13.8 1.8z' })
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

  return IosFlowerOutline;
}(_react.Component);

IosFlowerOutline.defaultProps = {
  // style
  style: {},
  color: '#000000',
  fontSize: '22px',

  // animation
  shake: false,
  beat: false,
  rotate: false
};

IosFlowerOutline.propTypes = {
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

exports.default = IosFlowerOutline;
module.exports = exports['default'];
//# sourceMappingURL=IosFlowerOutline.js.map