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

var MdGitBranch = function (_Component) {
  _inherits(MdGitBranch, _Component);

  function MdGitBranch(props) {
    _classCallCheck(this, MdGitBranch);

    var _this = _possibleConstructorReturn(this, (MdGitBranch.__proto__ || Object.getPrototypeOf(MdGitBranch)).call(this, props));

    _this.state = { classNames: [], animationActive: false };
    _this._getClasses = _this._getClasses.bind(_this);
    return _this;
  }

  _createClass(MdGitBranch, [{
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
        _react2.default.createElement('path', { d: 'M832 320c0-70.6-57.4-128-128-128s-128 57.4-128 128c0 47.4 25.8 88.6 64 110.8v17.2c0 39.8-15.6 67.4-50.6 89.8-30.8 19.6-76.2 34.2-135 43-28 4.2-51.4 12-70.4 21.4v-299.4c38.2-22.2 64-63.4 64-110.8 0-70.6-57.4-128-128-128s-128 57.4-128 128c0 47.4 25.8 88.6 64 110.8v418.4c-38.2 22.2-64 63.4-64 110.8 0 70.6 57.4 128 128 128s128-57.4 128-128c0-33.2-12.6-63.4-33.4-86.2 3.8-9.8 19.4-32.6 58.8-38.6 77.6-11.6 137.8-31.8 184.6-61.6 72-45.6 110-114 110-197.6v-17.2c38.2-22.2 64-63.4 64-110.8zM320 112c44.2 0 80 35.8 80 80s-35.8 80-80 80-80-35.8-80-80 35.8-80 80-80zM320 912c-44.2 0-80-35.8-80-80s35.8-80 80-80 80 35.8 80 80-35.8 80-80 80zM704 400c-44.2 0-80-35.8-80-80s35.8-80 80-80 80 35.8 80 80-35.8 80-80 80z' })
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

  return MdGitBranch;
}(_react.Component);

MdGitBranch.defaultProps = {
  // style
  style: {},
  color: '#000000',
  fontSize: '22px',

  // animation
  shake: false,
  beat: false,
  rotate: false
};

MdGitBranch.propTypes = {
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

exports.default = MdGitBranch;
module.exports = exports['default'];
//# sourceMappingURL=MdGitBranch.js.map