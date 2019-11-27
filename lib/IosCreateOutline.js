'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _SVG = require('./SVG');

var _SVG2 = _interopRequireDefault(_SVG);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var IosCreateOutline = function IosCreateOutline(props) {
  return _react2.default.createElement(
    _SVG2.default,
    {
      style: props.style,
      className: props.className,
      fill: props.color,
      width: props.fontSize,
      height: props.fontSize,
      viewBox: '0 0 1024 1024',
      onClick: props.onClick,
      rotate: props.rotate ? 1 : 0,
      shake: props.shake ? 1 : 0,
      beat: props.beat ? 1 : 0
    },
    _react2.default.createElement('path', { d: 'M736 832h-576v-544h448.234l32-32h-512.234v608h640v-480.234l-32 32z M475.246 568.168l-19.412-19.414 342.646-342.646-22.626-22.628-359.854 359.822v64.698h64.432l360.090-359.968-22.628-22.572z M888.426 160.624l-24.93-24.932c-5.328-4.758-12.384-7.692-20.004-7.692-7.624 0-14.608 2.936-19.858 7.7l-24.302 24.3 64.786 64.786 24.3-24.3c4.766-5.25 7.582-12.234 7.582-19.858 0-7.62-2.816-14.678-7.574-20.004z' })
  );
};

IosCreateOutline.defaultProps = {
  // style
  style: {},
  color: '#000000',
  fontSize: '22px',

  // animation
  shake: false,
  beat: false,
  rotate: false
};

IosCreateOutline.propTypes = {
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

exports.default = IosCreateOutline;
module.exports = exports['default'];
//# sourceMappingURL=IosCreateOutline.js.map