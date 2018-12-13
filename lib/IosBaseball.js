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

var IosBaseball = function (_Component) {
  _inherits(IosBaseball, _Component);

  function IosBaseball(props) {
    _classCallCheck(this, IosBaseball);

    var _this = _possibleConstructorReturn(this, (IosBaseball.__proto__ || Object.getPrototypeOf(IosBaseball)).call(this, props));

    _this.state = { classNames: [], animationActive: false };
    _this._getClasses = _this._getClasses.bind(_this);
    return _this;
  }

  _createClass(IosBaseball, [{
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
        _react2.default.createElement('path', { d: 'M512 96c-16.088 0-31.95 0.946-47.564 2.722v0 0c-207.326 23.61-368.436 199.638-368.436 413.278 0 229.726 186.274 416 416 416 213.654 0 389.666-161.106 413.276-368.436v0 0c1.778-15.61 2.724-31.474 2.724-47.564 0-229.726-186.26-416-416-416zM519.878 893.228c-1.078-17.386-3.21-34.61-6.418-51.608l-43.022 13.792-9.77-30.468 45.624-14.628c-4.366-16.112-9.712-31.988-16.040-47.588-3.886-9.588-8.122-18.994-12.682-28.21l-38.928 26.372-17.944-26.494 41.488-28.108c-14.832-24.858-32.298-48.114-52.238-69.606l-33.704 33.706-22.626-22.626 33.704-33.704c-20.884-19.378-43.442-36.404-67.514-50.96l-28.432 41.976-26.494-17.946 26.806-39.576c-9.92-4.982-20.054-9.598-30.412-13.8-14.91-6.042-30.076-11.18-45.45-15.434l-15 46.784-30.472-9.77 14.23-44.384c-17.712-3.446-35.67-5.706-53.808-6.824 0.218-10.746 0.876-21.39 1.968-31.906 20.678 1.294 41.278 3.996 61.654 8.136l15.036-46.908 30.474 9.772-14.318 44.656c28.866 8.054 57.084 19.042 84.18 32.988l26.898-39.708 26.496 17.946-25.4 37.496c25.424 15.508 49.63 33.784 72.2 54.822l34.164-34.164 22.628 22.628-34.166 34.164c21.618 23.19 40.312 48.11 56.088 74.302l37.998-25.738 17.946 26.496-40.366 27.34c13.756 27.092 24.578 55.284 32.464 84.116l45.838-14.698 9.77 30.472-48.244 15.468c3.894 19.656 6.462 39.522 7.708 59.454-10.518 1.096-21.164 1.75-31.914 1.97zM821.922 550.586l-17.058 53.208-30.472-9.77 16.348-50.986c-28.248-7.928-55.88-18.658-82.436-32.232l-30.67 45.282-26.496-17.946 29.128-42.998c-25.824-15.652-50.398-34.154-73.288-55.492l-38.41 38.408-22.624-22.628 38.404-38.406c-20.762-22.27-38.854-46.124-54.228-71.18l-42.496 28.786-17.948-26.496 44.67-30.254c-13.762-26.556-24.678-54.198-32.768-82.482l-49.836 15.98-9.77-30.474 51.902-16.642c-4.894-23.326-7.886-46.964-9.044-70.674 10.378-1.288 20.892-2.136 31.508-2.568 1.014 21.486 3.718 42.668 7.944 63.614l39.488-12.718 9.814 30.424-41.578 13.316c4.102 14.436 8.982 28.676 14.666 42.696 4.352 10.726 9.156 21.206 14.348 31.462l34.63-23.458 17.946 26.492-36.954 25.032c14.418 23.692 31.238 45.914 50.348 66.508l29.458-29.462 22.628 22.626-29.464 29.462c21.204 19.672 44.124 36.926 68.604 51.626l24.704-36.47 26.496 17.946-23.024 33.988c9.554 4.766 19.312 9.178 29.27 13.216 14.708 5.964 29.674 11.042 44.842 15.262l12.968-40.44 30.466 9.77-12.208 38.086c20.232 3.968 40.572 6.622 61.252 7.648-0.43 10.624-1.286 21.144-2.57 31.536-22.972-1.128-45.874-3.97-68.49-8.598z' })
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

  return IosBaseball;
}(_react.Component);

IosBaseball.defaultProps = {
  // style
  style: {},
  color: '#000000',
  fontSize: '22px',

  // animation
  shake: false,
  beat: false,
  rotate: false
};

IosBaseball.propTypes = {
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

exports.default = IosBaseball;
module.exports = exports['default'];
//# sourceMappingURL=IosBaseball.js.map