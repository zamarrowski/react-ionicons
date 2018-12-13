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

var IosContactsOutline = function (_Component) {
  _inherits(IosContactsOutline, _Component);

  function IosContactsOutline(props) {
    _classCallCheck(this, IosContactsOutline);

    var _this = _possibleConstructorReturn(this, (IosContactsOutline.__proto__ || Object.getPrototypeOf(IosContactsOutline)).call(this, props));

    _this.state = { classNames: [], animationActive: false };
    _this._getClasses = _this._getClasses.bind(_this);
    return _this;
  }

  _createClass(IosContactsOutline, [{
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
        _react2.default.createElement('path', { d: 'M512 96c-229.8 0-416 186.2-416 416s186.2 416 416 416 416-186.2 416-416-186.2-416-416-416zM511.8 893.2c-104.8 0.2-199.8-42.4-269-111.2l-22.8-25c-6.2-7.4-12-14.8-17.6-22.6 9.4-8 20.2-15 31.6-19.2 21-8 44.8-7.6 66.6-13.2 18-4.6 40.4-11.8 54.4-24.8 12.8-12 14.2-30.4 15.4-47 1-14 0.8-27.8 0.8-41.8 0-9.8-11.4-15.4-17-23.2-9-12.2-9.4-30.4-11.2-45-0.8-6.4-1-14.6-6.4-19-6-4.8-10.4-7.4-13.4-15-4-10.4-5.4-21.6-8.6-32.4-2-7 5-13.6 7.8-19.4 5.2-10.6-3.8-27-5.6-38-5.6-32.8-5.4-68.6 18.2-94.6 47.4-52.4 156-35.8 171.6 37.8 4.8 23 1.8 49.8-4.6 72.2-2.8 9.6-6 16.6-0.4 26 8.4 13.6 4.8 22.4 0.8 37.6-3.2 12.6-7.2 18.2-16.8 26-8 6.4-6.8 22.4-8.2 31.6-1.6 11.2-2.6 23-9.4 32.4-2.6 3.6-16.8 14.8-16.8 18.6 0 22-1 44.4 2.8 66.2 5.2 31 31.2 38.4 57.2 49 26.4 10.2 57 6.4 82.6 19 26.4 13 51.8 36.8 59.4 66.2 0 0 4.4 38.2 4.2 80-44.8 18.4-94 28.8-145.6 28.8zM804.2 756.8l-0.2-0.2-23.2 25.2c-26.8 26.6-57.4 49.4-91.2 67.2l-0.6-33.2c0-59-35.6-111-91.6-130.4-27-9.4-56.2-10-83.2-19.4-8.2-2.8-24.4-6.2-27.8-15.6-3.2-9.2-3.2-20-3.8-29.6-0.4-7.6-0.6-15.2-0.6-22.8 0-5 12.8-15.6 15.6-20.2 10.8-18 11.8-42.2 13.8-62.6 17.4 4.8 19.6-27.4 22.6-37.2 2.2-6.8 10-41.8-5.2-47.2 5-8.8 7-19.6 8.4-29.4 4-25.6 5.6-53.6-2.2-78.6-16.2-52-66-81.2-118.6-82.8-53.4-1.8-107 23.8-127 75.6-9.6 25.2-8.8 52.6-5.6 79 1.4 12 3.4 25.4 9.4 36.2-12.8 5.6-9 35.4-6.8 42.6 3.2 10.2 6 46.8 24.2 41.8 1.6 16.2 3.4 32.8 7.8 48.6 3 10.6 9.2 19.6 16.4 27.8 3.6 4 5.4 4.4 5.2 9.6-0.2 15.6 0.2 32.4-3.8 47.6s-37.4 21.6-50.8 24.4c-36 7.4-69.2 10.8-99.2 33.2-0.6 0.4-1 0.8-1.4 1.2-34.4-57.2-54.2-124.2-54.2-195.6 0-210.2 171.2-381.4 381.4-381.4s381.4 171 381.4 381.4c0 59.2-13.6 115.4-37.8 165.4-8.8-25.6-30.4-44.8-57-53.6-16.2-5.2-47.4-6.8-59-20.8-5.8-7-2-33.2-2-33.2 50.4-2.8 62-12.2 62-12.2 7.8-4.6 4.2-5.4 0.2-12.2-21.8-36.6-12-83-13-123.2-0.8-33.4-9.6-70-40-88.8-15.2-9.4-39.4-13.8-62.8-13.8-19 0-37.4 2.8-50.6 8.2-84.8 34-34.8 146.4-63.8 210.8-5 10.8-12.2 14.6 0.4 21 0 0 15 8.8 57.8 12.6 0 0 0.6 25.2 0 27.8-2.2 9.8-23.6 16.6-31.6 18.8-8.2 2.2-30.8 9.2-58.2 22.6 0 0 30.4 3 50 9.8 13.6-9.2 33.8-11.4 48-17.6s20.6-11.6 23.2-26.6-1-66.4-1-66.4c-24.4 1.8-53.8-3.4-53.8-3.4 8.2-26.4 8-55.4 8-83.4 0-24.4-0.2-47.6 5.2-65.4 4.8-16 12.8-25 28-31v0 0c8.8-3.6 23.6-5.8 38.4-5.8 23.2 0 39.2 4.8 46 9 19.6 12.2 24.4 40.6 24.8 62.4 0.2 9-0.2 18.8-0.6 29.2-1 26.6-2.4 55.8 6.6 84-0.2 0-0.2 0-0.4 0 0 0-26.6 3.6-52.6 0.6l-2.8 34.6c-1.4 14.2-3.8 35.8 9.6 52 15.4 18.6 40.4 23.8 60.4 27.8 5.2 1 10.4 2.2 13.4 3 15.2 5 41.4 18.8 44.8 62.6-8.6 14-18.4 27.4-29 40z' })
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

  return IosContactsOutline;
}(_react.Component);

IosContactsOutline.defaultProps = {
  // style
  style: {},
  color: '#000000',
  fontSize: '22px',

  // animation
  shake: false,
  beat: false,
  rotate: false
};

IosContactsOutline.propTypes = {
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

exports.default = IosContactsOutline;
module.exports = exports['default'];
//# sourceMappingURL=IosContactsOutline.js.map