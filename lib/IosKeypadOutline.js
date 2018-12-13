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

var IosKeypadOutline = function (_Component) {
  _inherits(IosKeypadOutline, _Component);

  function IosKeypadOutline(props) {
    _classCallCheck(this, IosKeypadOutline);

    var _this = _possibleConstructorReturn(this, (IosKeypadOutline.__proto__ || Object.getPrototypeOf(IosKeypadOutline)).call(this, props));

    _this.state = { classNames: [], animationActive: false };
    _this._getClasses = _this._getClasses.bind(_this);
    return _this;
  }

  _createClass(IosKeypadOutline, [{
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
        _react2.default.createElement('path', { d: 'M789.2 682.4c-59 0-106.8 47.8-106.8 106.8s47.8 106.8 106.8 106.8c59 0 106.8-47.8 106.8-106.8s-47.8-106.8-106.8-106.8zM789.2 864c-41.2 0-74.8-33.6-74.8-74.8s33.6-74.8 74.8-74.8 74.8 33.6 74.8 74.8c0 41.2-33.6 74.8-74.8 74.8z M512 682.4c-59 0-106.8 47.8-106.8 106.8s47.8 106.8 106.8 106.8c59 0 106.8-47.8 106.8-106.8s-47.8-106.8-106.8-106.8zM512 864c-41.2 0-74.8-33.6-74.8-74.8s33.6-74.8 74.8-74.8 74.8 33.6 74.8 74.8c0 41.2-33.6 74.8-74.8 74.8z M234.8 682.4c-59 0-106.8 47.8-106.8 106.8s47.8 106.8 106.8 106.8c59 0 106.8-47.8 106.8-106.8s-47.8-106.8-106.8-106.8zM234.8 864c-41.2 0-74.8-33.6-74.8-74.8s33.6-74.8 74.8-74.8 74.8 33.6 74.8 74.8c0 41.2-33.4 74.8-74.8 74.8z M789.2 405.2c-59 0-106.8 47.8-106.8 106.8s47.8 106.8 106.8 106.8c59 0 106.8-47.8 106.8-106.8s-47.8-106.8-106.8-106.8zM789.2 586.8c-41.2 0-74.8-33.6-74.8-74.8s33.6-74.8 74.8-74.8 74.8 33.6 74.8 74.8c0 41.2-33.6 74.8-74.8 74.8z M512 405.2c-59 0-106.8 47.8-106.8 106.8s47.8 106.8 106.8 106.8c59 0 106.8-47.8 106.8-106.8s-47.8-106.8-106.8-106.8zM512 586.8c-41.2 0-74.8-33.6-74.8-74.8s33.6-74.8 74.8-74.8 74.8 33.6 74.8 74.8c0 41.2-33.6 74.8-74.8 74.8z M234.8 405.2c-59 0-106.8 47.8-106.8 106.8s47.8 106.8 106.8 106.8c59 0 106.8-47.8 106.8-106.8s-47.8-106.8-106.8-106.8zM234.8 586.8c-41.2 0-74.8-33.6-74.8-74.8s33.6-74.8 74.8-74.8 74.8 33.6 74.8 74.8c0 41.2-33.4 74.8-74.8 74.8z M789.2 341.6c59 0 106.8-47.8 106.8-106.8s-47.8-106.8-106.8-106.8c-59 0-106.8 47.8-106.8 106.8s47.8 106.8 106.8 106.8zM789.2 160c41.2 0 74.8 33.6 74.8 74.8s-33.6 74.8-74.8 74.8-74.8-33.6-74.8-74.8c-0-41.2 33.4-74.8 74.8-74.8z M512 128c-59 0-106.8 47.8-106.8 106.8s47.8 106.8 106.8 106.8c59 0 106.8-47.8 106.8-106.8s-47.8-106.8-106.8-106.8zM512 309.6c-41.2 0-74.8-33.6-74.8-74.8s33.6-74.8 74.8-74.8 74.8 33.6 74.8 74.8c0 41.2-33.6 74.8-74.8 74.8z M234.8 128c-59 0-106.8 47.8-106.8 106.8s47.8 106.8 106.8 106.8c59 0 106.8-47.8 106.8-106.8s-47.8-106.8-106.8-106.8zM234.8 309.6c-41.2 0-74.8-33.6-74.8-74.8s33.6-74.8 74.8-74.8 74.8 33.6 74.8 74.8c0 41.2-33.4 74.8-74.8 74.8z' })
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

  return IosKeypadOutline;
}(_react.Component);

IosKeypadOutline.defaultProps = {
  // style
  style: {},
  color: '#000000',
  fontSize: '22px',

  // animation
  shake: false,
  beat: false,
  rotate: false
};

IosKeypadOutline.propTypes = {
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

exports.default = IosKeypadOutline;
module.exports = exports['default'];
//# sourceMappingURL=IosKeypadOutline.js.map