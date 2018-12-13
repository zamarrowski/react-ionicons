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

var IosThumbsDownOutline = function (_Component) {
  _inherits(IosThumbsDownOutline, _Component);

  function IosThumbsDownOutline(props) {
    _classCallCheck(this, IosThumbsDownOutline);

    var _this = _possibleConstructorReturn(this, (IosThumbsDownOutline.__proto__ || Object.getPrototypeOf(IosThumbsDownOutline)).call(this, props));

    _this.state = { classNames: [], animationActive: false };
    _this._getClasses = _this._getClasses.bind(_this);
    return _this;
  }

  _createClass(IosThumbsDownOutline, [{
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
        _react2.default.createElement('path', { d: 'M428.6 96c77 0 160.4 8.2 225.2 16.2 43 5.2 68.2 15 92.8 24.2 31.8 12.2 62 23.6 133.4 23.6 8.8 0 16 7.2 16 16s-7.2 16-16 16c-77.4 0-111.6-13-144.8-25.8-23.6-9-46-17.6-85.2-22.4-97.2-12-223-22-330.8-8.2-74.8 9.4-112.2 25-124.4 54.6-4.2 10 1 21.8 5.4 32.2 3 7 5.8 13.2 5.8 19.6 0 11-8.2 17.8-17.8 25.6-12.6 10.4-28.2 23.2-28.2 41.6 0 18.2 9.6 29.6 18.8 40.6 7.4 9 15.2 18.2 15.2 30.2 0 11.2-5.8 19-10.6 25.2-6.4 8.4-13.4 17.8-13.4 42.8 0 17.6 9 25 19.2 33.6 9.2 7.6 28.4 23.6 11.8 47.6-14.6 21-5 45.2 4.8 56.2 10.6 12 16.4 15.6 67.2 12.6 34.4-2 108.4-13.6 157.4-21.2 22.4-3.6 38.6-6 44.8-6.6 9.8-1 23-2.4 35.6 0.8 16.6 4.4 27.6 15.8 31.8 33.2 3.8 15.6-3 29-12.2 47.8-7.4 15.2-17.8 36-27 66.8-14.6 48-19.4 120 2.6 159.6 5.4 9.8 13.8 15.6 25.2 17.4 12 1.8 22-1.8 24.6-3.8 3-5 8-25 12-41 6.6-26.2 14.6-64.8 25.8-89.4 16.4-36.2 69.4-84.8 122-131.4 8-7 14.8-13.2 19.6-17.6 14.8-13.6 31.6-38.2 46.4-60 12-17.6 22.4-33 31.2-41.6 18.8-18.8 45.4-31.2 67.4-31.2 8.8 0 16 7.2 16 16s-7.2 16-16 16c-11.4 0-30.4 7.4-44.6 21.8-6.6 6.6-16.8 21.4-27.4 37-15.8 23-33.6 49.2-51 65.4-5 4.8-12.2 11-20.2 18.2-34.6 30.6-99 87.6-114 120.8-10 22-17.8 59-24 84-7.6 30.6-11.6 45.6-18.4 53.6-9.2 11-26.8 15.8-49.8 15.8s-41.6-14.4-52.6-34.2c-23.4-42-25.4-118-5.4-184.4 10-33.4 21-55.4 29-71.6 6-12.2 10.8-21.8 9.8-26-2.4-9.6-7.4-12.4-32.8-9.8-5.4 0.6-23 3.4-43.2 6.4-49.6 7.8-124.4 19.4-160.4 21.6-52.2 3-72 0.2-92.8-23.4-20.4-23-29.6-63.2-7.4-95.4-1.6-1.4-3.8-3.4-5.8-5-11.8-9.8-31.2-25.8-31.2-58.6 0-35.8 12-51.6 20-62.2 1.4-1.8 3.2-4.4 3.8-5.6-1.2-2.2-4.8-6.6-7.6-10-10.4-12.4-26.2-31.4-26.2-61.2 0-33.6 25-54.2 39.8-66.4 1.4-1.2 3.2-2.6 4.8-4-0.6-1.2-1.2-2.6-1.6-3.8-5.6-13-15.2-34.6-5.6-57.4 21.8-52.4 88.2-66.8 150.4-74 33-3.4 72-7.4 112.8-7.4z' })
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

  return IosThumbsDownOutline;
}(_react.Component);

IosThumbsDownOutline.defaultProps = {
  // style
  style: {},
  color: '#000000',
  fontSize: '22px',

  // animation
  shake: false,
  beat: false,
  rotate: false
};

IosThumbsDownOutline.propTypes = {
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

exports.default = IosThumbsDownOutline;
module.exports = exports['default'];
//# sourceMappingURL=IosThumbsDownOutline.js.map