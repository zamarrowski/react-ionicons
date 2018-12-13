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

var MdCog = function (_Component) {
  _inherits(MdCog, _Component);

  function MdCog(props) {
    _classCallCheck(this, MdCog);

    var _this = _possibleConstructorReturn(this, (MdCog.__proto__ || Object.getPrototypeOf(MdCog)).call(this, props));

    _this.state = { classNames: [], animationActive: false };
    _this._getClasses = _this._getClasses.bind(_this);
    return _this;
  }

  _createClass(MdCog, [{
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
        _react2.default.createElement('path', { d: 'M960 576v-128h-69.4c-4-24.2-10.4-47.6-18.6-70l60-34.6-64-110.8-60 34.6c-15.4-18.6-32.6-35.8-51.2-51.2l34.6-60-110.8-64-34.6 60c-22.4-8.4-45.8-14.6-70-18.6v-69.4h-128v69.4c-24.2 4-47.6 10.4-70 18.6l-34.6-60-110.8 64 34.6 60c-18.6 15.4-35.8 32.6-51.2 51.2l-60-34.6-64 110.8 60 34.6c-8.4 22.4-14.6 45.8-18.6 70h-69.4v128h69.4c4 24.2 10.4 47.6 18.6 70l-60 34.6 64 110.8 60-34.6c15.4 18.6 32.6 35.8 51.2 51.2l-34.6 60 110.8 64 34.6-60c22.4 8.4 45.8 14.6 70 18.6v69.4h128v-69.4c24.2-4 47.6-10.4 70-18.6l34.6 60 110.8-64-34.6-60c18.6-15.4 35.8-32.6 51.2-51.2l60 34.6 64-110.8-60-34.6c8.4-22.4 14.6-45.8 18.6-70h69.4zM754 355.8l-93.8 34.2c-22-26.6-51-47.2-84.2-59v-99.8c74.4 16.8 137.8 62.4 178 124.6zM448 231.2v99.8c-33.2 11.8-62.2 32.4-84.2 59l-93.8-34.2c40.2-62.2 103.6-107.8 178-124.6zM224 512c0-12.2 0.8-24.2 2.2-36l93.8 34.2c0 0.6 0 1.2 0 1.8 0 35.6 9.8 69 26.6 97.6l-64.2 76.4c-36.6-48.4-58.4-108.6-58.4-174zM512 800c-47.4 0-92-11.4-131.6-31.8l64.2-76.4c21 7.8 43.6 12.2 67.4 12.2s46.4-4.4 67.4-12.2l64.2 76.4c-39.6 20.4-84.2 31.8-131.6 31.8zM741.6 686l-64.2-76.4c16.8-28.6 26.6-62 26.6-97.6 0-0.6 0-1.2 0-1.8l93.8-34.2c1.4 11.8 2.2 23.8 2.2 36 0 65.4-21.8 125.6-58.4 174z' })
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

  return MdCog;
}(_react.Component);

MdCog.defaultProps = {
  // style
  style: {},
  color: '#000000',
  fontSize: '22px',

  // animation
  shake: false,
  beat: false,
  rotate: false
};

MdCog.propTypes = {
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

exports.default = MdCog;
module.exports = exports['default'];
//# sourceMappingURL=MdCog.js.map