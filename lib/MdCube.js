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

var MdCube = function (_Component) {
  _inherits(MdCube, _Component);

  function MdCube(props) {
    _classCallCheck(this, MdCube);

    var _this = _possibleConstructorReturn(this, (MdCube.__proto__ || Object.getPrototypeOf(MdCube)).call(this, props));

    _this.state = { classNames: [], animationActive: false };
    _this._getClasses = _this._getClasses.bind(_this);
    return _this;
  }

  _createClass(MdCube, [{
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
        _react2.default.createElement('path', { d: 'M934.6 336.2c-3.6 0-7 0.6-10.2 2l-355.2 184.2c0 0-0.2 0-0.2 0-15.2 9.4-25 25-25 42.8v371.8c0 12.8 11.2 23 25.4 23 4.4 0 8.6-1 12.2-2.8 0.4-0.2 0.8-0.4 1-0.6l350-185.6c16.4-9 27.4-25.4 27.4-44.2v-367.6c0-12.8-11.4-23-25.4-23z M908.6 237l-363.4-163.4c0 0-21.4-9.6-33.2-9.6s-33 9.6-33 9.6l-363.8 163.4c0 0-16 6.6-16 19 0 13.2 16.6 23 16.6 23l371 195.6c7.6 3.4 16.2 5.2 25.2 5.2 9.2 0 17.8-2 25.4-5.4l370.8-195.8c0 0 15-8 15-23 0.2-12.6-14.6-18.6-14.6-18.6z M455 522.4l-355.4-184.4c-3-1.2-6.6-2-10.2-2-14 0-25.4 10.2-25.4 23v367.6c0 18.8 11 35.2 27.4 44.2l0.4 0.2 349.4 185.4c3.8 2.2 8.4 3.4 13.2 3.4 14 0 25.4-10.4 25.4-23v-371.6c0.2-17.8-9.8-33.6-24.8-42.8z' })
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

  return MdCube;
}(_react.Component);

MdCube.defaultProps = {
  // style
  style: {},
  color: '#000000',
  fontSize: '22px',

  // animation
  shake: false,
  beat: false,
  rotate: false
};

MdCube.propTypes = {
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

exports.default = MdCube;
module.exports = exports['default'];
//# sourceMappingURL=MdCube.js.map