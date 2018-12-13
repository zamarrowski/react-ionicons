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

var IosCloudyNight = function (_Component) {
  _inherits(IosCloudyNight, _Component);

  function IosCloudyNight(props) {
    _classCallCheck(this, IosCloudyNight);

    var _this = _possibleConstructorReturn(this, (IosCloudyNight.__proto__ || Object.getPrototypeOf(IosCloudyNight)).call(this, props));

    _this.state = { classNames: [], animationActive: false };
    _this._getClasses = _this._getClasses.bind(_this);
    return _this;
  }

  _createClass(IosCloudyNight, [{
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
        _react2.default.createElement('path', { d: 'M553.2 590.4c-5 0-9.8 0-14.6 0.4-1.4 0.2-2.8 0.2-4.2 0.4-8.6-38.2-29-71.8-57.2-97-2-1.8-4.2-3.6-6.2-5.4-2-1.6-4-3.2-6-4.6-2.8-2.2-5.8-4.2-8.8-6-5.6-3.6-11.2-7-17.2-10-2.2-1.2-4.6-2.2-6.8-3.4-23.2-10.8-49-16.8-76.2-16.8 0 0 0 0 0 0-2 0-3.8 0-5.8 0-0.2 0-0.4-0.2-0.6-0.2-1.8 0-3.8 0-5.6 0 0 0 0 0 0 0s0 0.2 0 0.2c-96 6.2-171 85.8-171 183 0 6.2 0.4 12.2 1 18.2-61.6 5.4-110 59.4-110 122.6 0 4.2 0.2 8.4 0.6 12.4 6 61.4 56.8 111.6 119.4 111.6h369.2c75.6 0 138.2-56.4 149.2-129.2 0 0 0 0 0 0v0 0c0.4-2.2 0.6-4.2 0.8-6.4 0-0.8 0.2-1.6 0.2-2.4 0.2-1.6 0.2-3.2 0.4-4.8 0-0.8 0-1.4 0.2-2.2 0.2-2.2 0.2-4.6 0.2-7 0-10.4-1-20.6-3-30.6-14.4-69.2-75.2-122.8-148-122.8z M900 612c-5 0.2-10 0.4-15 0.4-82.8 0-160.8-31.6-219.4-88.8s-90.8-133.2-90.8-214.2c0-46 10.4-90.6 30.4-131 8.8-17.8 17.8-34.6 30-50.6h-0.6c-21.6 2.4-40.4 6.6-60.6 12.8-123.6 38-215.6 145.4-228.2 275.4 3.6-0.2 7-0.2 10.6-0.2 49 0 97 17 135.2 48.2 30.4 24.8 53.6 57.6 67 94.2 47 1.2 91 20.8 124.6 55.2 34.4 35.2 53.2 81.6 53.2 130.4 0 6.2-0.4 12.2-0.8 18.2 75-14 140.8-52.8 188.4-107.4 13.8-15.8 26-30.6 36.6-49-20 5-40.2 5.4-60.6 6.4z' })
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

  return IosCloudyNight;
}(_react.Component);

IosCloudyNight.defaultProps = {
  // style
  style: {},
  color: '#000000',
  fontSize: '22px',

  // animation
  shake: false,
  beat: false,
  rotate: false
};

IosCloudyNight.propTypes = {
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

exports.default = IosCloudyNight;
module.exports = exports['default'];
//# sourceMappingURL=IosCloudyNight.js.map