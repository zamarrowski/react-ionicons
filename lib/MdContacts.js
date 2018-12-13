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

var MdContacts = function (_Component) {
  _inherits(MdContacts, _Component);

  function MdContacts(props) {
    _classCallCheck(this, MdContacts);

    var _this = _possibleConstructorReturn(this, (MdContacts.__proto__ || Object.getPrototypeOf(MdContacts)).call(this, props));

    _this.state = { classNames: [], animationActive: false };
    _this._getClasses = _this._getClasses.bind(_this);
    return _this;
  }

  _createClass(MdContacts, [{
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
        _react2.default.createElement('path', { d: 'M478.416 687.874c-35.56 20.206-76.684 31.752-120.51 31.752-43.818 0-84.934-11.542-120.492-31.74-94.326 28.776-152.128 124.114-173.414 208.114h587.824c-21.278-84-79.074-179.366-173.408-208.126z M357.906 240.070c-116.958 0-211.772 94.788-211.772 211.716s94.814 211.714 211.772 211.714c116.958 0 211.772-94.788 211.772-211.714 0-116.928-94.816-211.716-211.772-211.716zM357.906 613.046c-67.342 0-124.89-45.026-147.994-101.046h295.988c-23.108 56.022-80.652 101.046-147.994 101.046z M645.204 768h314.796c-21.276-84-79.074-163.382-173.406-192.144-35.562 20.208-76.686 31.746-120.512 31.746-29.646 0-58.048-5.308-84.336-14.98-14.89 24.94-33.854 51.184-55.948 69.812 52.692 20.274 92.494 65.566 119.406 105.566z M613.090 400h200.986c-23.108 56-80.654 100.586-147.994 100.586-17.75 0-34.808-3.384-50.75-9.020-2.676 17.418-7.086 34.14-13.040 50.236 20.132 6.348 41.558 9.724 63.79 9.724 116.958 0 211.772-94.82 211.772-211.744 0-116.93-94.814-211.732-211.772-211.732-74.98 0-140.854 39.406-178.486 98.18 63.618 36.536 110.326 99.77 125.494 173.77z' })
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

  return MdContacts;
}(_react.Component);

MdContacts.defaultProps = {
  // style
  style: {},
  color: '#000000',
  fontSize: '22px',

  // animation
  shake: false,
  beat: false,
  rotate: false
};

MdContacts.propTypes = {
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

exports.default = MdContacts;
module.exports = exports['default'];
//# sourceMappingURL=MdContacts.js.map