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

var MdHelpBuoy = function (_Component) {
  _inherits(MdHelpBuoy, _Component);

  function MdHelpBuoy(props) {
    _classCallCheck(this, MdHelpBuoy);

    var _this = _possibleConstructorReturn(this, (MdHelpBuoy.__proto__ || Object.getPrototypeOf(MdHelpBuoy)).call(this, props));

    _this.state = { classNames: [], animationActive: false };
    _this._getClasses = _this._getClasses.bind(_this);
    return _this;
  }

  _createClass(MdHelpBuoy, [{
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
        _react2.default.createElement('path', { d: 'M512 96c-229.8 0-416 186.2-416 416s186.2 416 416 416 416-186.2 416-416-186.2-416-416-416zM634 808l-24.4-79.2c26-11.6 49.8-28 70.6-48.8s37.2-44.6 48.8-70.6l79 24.2c-15.8 38.6-39.4 74-69.8 104.4-30.2 30.6-65.6 54.2-104.2 70zM390 216l24.4 79.2c-26 11.6-49.8 28-70.6 48.8s-37.2 44.6-48.8 70.6l-79-24.2c15.8-38.6 39.4-74 69.8-104.4 30.2-30.6 65.6-54.2 104.2-70zM512 384c70.6 0 128 57.4 128 128s-57.4 128-128 128-128-57.4-128-128c0-70.6 57.4-128 128-128zM738.2 285.8c30.4 30.4 53.8 65.8 69.8 104.2l-79 24.4c-11.8-26-28-49.8-48.8-70.6s-44.6-37.2-70.6-48.8l24.2-79c38.6 15.8 74 39.4 104.4 69.8zM285.8 738.2c-30.4-30.2-54-65.6-69.8-104.2l79-24.4c11.8 26 28 49.8 48.8 70.6s44.6 37.2 70.6 48.8l-24.2 79c-38.6-15.8-74-39.4-104.4-69.8z' })
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

  return MdHelpBuoy;
}(_react.Component);

MdHelpBuoy.defaultProps = {
  // style
  style: {},
  color: '#000000',
  fontSize: '22px',

  // animation
  shake: false,
  beat: false,
  rotate: false
};

MdHelpBuoy.propTypes = {
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

exports.default = MdHelpBuoy;
module.exports = exports['default'];
//# sourceMappingURL=MdHelpBuoy.js.map