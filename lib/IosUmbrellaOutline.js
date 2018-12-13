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

var IosUmbrellaOutline = function (_Component) {
  _inherits(IosUmbrellaOutline, _Component);

  function IosUmbrellaOutline(props) {
    _classCallCheck(this, IosUmbrellaOutline);

    var _this = _possibleConstructorReturn(this, (IosUmbrellaOutline.__proto__ || Object.getPrototypeOf(IosUmbrellaOutline)).call(this, props));

    _this.state = { classNames: [], animationActive: false };
    _this._getClasses = _this._getClasses.bind(_this);
    return _this;
  }

  _createClass(IosUmbrellaOutline, [{
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
        _react2.default.createElement('path', { d: 'M542 129.6c0-0.6 0-1 0-1.6 0-17.6-13.6-32-30-32s-30 14.4-30 32c0 0.4 0 1 0 1.4-216 16-385.6 207.4-385.6 444 0 0.8-0.4 1.6-0.4 2.6h6.4c12.8-46 52.4-79.6 99.2-79.6 46.6 0 86 33.8 99 79.6h9.8c12.8-46 52.8-79.6 99.6-79.6 36.8 0 70 21 88 52.6v299c0 26.4-22 48-48.4 48s-48.2-21.6-48.2-48c0-8.8-7.2-16-16.2-16-8.8 0-16 7.2-16 16 0 44.2 36.4 80 80.4 80s80.4-35.8 80.4-80v-297.6c18-32.4 50.6-54 88-54 46.6 0 85.6 33.8 98.6 79.6h9.8c12.8-46 52.4-80 99.2-80 47 0 86.8 33.8 99.4 80h3.2c-4-233.2-172.2-429.6-386.2-446.4zM825.6 463.8c-41.8 0-79.2 20.2-104.2 51.8-24.8-31.6-62.2-51.6-104-51.6s-79.2 20.2-104 51.8c-24.8-31.6-62.2-51.8-104-51.8s-79.2 20.2-104 51.8c-24.8-31.6-62.2-51.8-104-51.8-23 0-44.6 6-63.6 16.8 15-71.4 47.2-137.4 94.4-191.4 66-75.4 155.6-121 252-128.2 0 0 13.2-0.8 28.6-0.8 15.6 0 26.4 1 26.4 1 96 7.6 185.6 55 252.4 133.8 44.6 52.6 76 115.2 92 182.6-17.6-9.2-37.4-14-58-14z' })
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

  return IosUmbrellaOutline;
}(_react.Component);

IosUmbrellaOutline.defaultProps = {
  // style
  style: {},
  color: '#000000',
  fontSize: '22px',

  // animation
  shake: false,
  beat: false,
  rotate: false
};

IosUmbrellaOutline.propTypes = {
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

exports.default = IosUmbrellaOutline;
module.exports = exports['default'];
//# sourceMappingURL=IosUmbrellaOutline.js.map