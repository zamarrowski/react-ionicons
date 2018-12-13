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

var IosThumbsUp = function (_Component) {
  _inherits(IosThumbsUp, _Component);

  function IosThumbsUp(props) {
    _classCallCheck(this, IosThumbsUp);

    var _this = _possibleConstructorReturn(this, (IosThumbsUp.__proto__ || Object.getPrototypeOf(IosThumbsUp)).call(this, props));

    _this.state = { classNames: [], animationActive: false };
    _this._getClasses = _this._getClasses.bind(_this);
    return _this;
  }

  _createClass(IosThumbsUp, [{
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
        _react2.default.createElement('path', { d: 'M896 714.8c0-29.8-15.8-48.6-26.2-61.2-2.8-3.2-6.4-7.6-7.6-10 0.6-1.2 2.4-3.8 3.8-5.6 8-10.4 20-26.4 20-62.2 0-32.8-19.4-48.8-30.8-58.2-1.8-1.6-4.2-3.4-5.8-5 22.2-32.2 13-72.4-7.4-95.4-21-23.6-40.6-26.4-92.8-23.4-36 2.2-111 13.8-160.4 21.6-20.2 3.2-37.8 6-43.2 6.4-25.4 2.6-30.4 0-32.8-9.8-1-4.2 3.8-13.8 9.8-26 8-16.2 19-38.4 29-71.6 20.2-66.4 18-142.4-5.4-184.4-11-19.8-29.6-34.2-52.6-34.2s-40.6 4.8-49.8 15.8c-6.8 8-10.6 23.2-18.4 53.6-6.2 24.8-14 61.8-24 84-15 33.2-79.4 90.2-114 120.8-8.2 7.2-15.2 13.4-20.2 18.2-17.4 16.2-35.2 42.2-51 65.4-10.8 15.6-20.8 30.4-27.4 37-14.2 14.2-33.2 21.8-44.6 21.8-8.8 0-16 7.2-16 16v319.6c0 8.8 7.2 16 16 16 71.4 0 101.4 11.4 133.4 23.6 24.4 9.4 49.8 19 92.8 24.2 64.8 8 148.4 16.2 225.2 16.2 40.8 0 79.8-4 113.2-7.8 62-7.2 128.4-21.6 150.4-74 9.4-22.8 0-44.4-5.6-57.4-0.6-1.2-1-2.4-1.6-3.8 1.6-1.2 3.2-2.8 4.8-4 14.2-12.2 39.2-32.6 39.2-66.2z' })
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

  return IosThumbsUp;
}(_react.Component);

IosThumbsUp.defaultProps = {
  // style
  style: {},
  color: '#000000',
  fontSize: '22px',

  // animation
  shake: false,
  beat: false,
  rotate: false
};

IosThumbsUp.propTypes = {
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

exports.default = IosThumbsUp;
module.exports = exports['default'];
//# sourceMappingURL=IosThumbsUp.js.map