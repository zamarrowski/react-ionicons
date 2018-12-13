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

var IosInfiniteOutline = function (_Component) {
  _inherits(IosInfiniteOutline, _Component);

  function IosInfiniteOutline(props) {
    _classCallCheck(this, IosInfiniteOutline);

    var _this = _possibleConstructorReturn(this, (IosInfiniteOutline.__proto__ || Object.getPrototypeOf(IosInfiniteOutline)).call(this, props));

    _this.state = { classNames: [], animationActive: false };
    _this._getClasses = _this._getClasses.bind(_this);
    return _this;
  }

  _createClass(IosInfiniteOutline, [{
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
        _react2.default.createElement('path', { d: 'M902.458 376.196c-37.094-36.262-86.558-56.196-139.288-56.196-52.726 0-102.19 19.934-139.284 56.196l-84.458 82.374 27.298 26.894 84.458-82.612c29.866-29.058 69.528-45.146 111.756-45.146 42.226 0 81.892 16.088 111.756 45.146 61.594 60.278 61.594 158.26 0 218.296-29.864 29.058-69.53 45.146-111.756 45.146-42.228 0-81.89-16.088-111.756-45.146l-251.042-244.952c-37.33-36.262-86.792-56.196-139.288-56.196-52.726 0-102.19 19.934-139.286 56.196-38.338 37.422-57.526 86.686-57.568 135.804-0.042 49.222 19.146 98.298 57.568 135.804 37.096 36.26 86.558 56.196 139.286 56.196 52.73 0 102.19-19.936 139.29-56.196l84.222-82.372-27.294-26.658-84.458 82.374c-29.864 29.058-69.528 45.146-111.758 45.146-42.226 0-81.888-16.088-111.752-45.146-61.598-60.28-61.598-158.26 0-218.296 29.864-29.058 69.526-45.146 111.752-45.146 42.23 0 81.894 16.088 111.758 45.146l251.040 244.954c37.326 36.258 86.79 56.194 139.286 56.194 52.726 0 102.19-19.936 139.286-56.196 38.496-37.344 57.744-86.604 57.774-135.804 0.030-49.202-19.16-98.34-57.542-135.804z' })
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

  return IosInfiniteOutline;
}(_react.Component);

IosInfiniteOutline.defaultProps = {
  // style
  style: {},
  color: '#000000',
  fontSize: '22px',

  // animation
  shake: false,
  beat: false,
  rotate: false
};

IosInfiniteOutline.propTypes = {
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

exports.default = IosInfiniteOutline;
module.exports = exports['default'];
//# sourceMappingURL=IosInfiniteOutline.js.map