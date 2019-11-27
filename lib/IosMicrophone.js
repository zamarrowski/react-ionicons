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

var IosMicrophone = function IosMicrophone(props) {
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
    _react2.default.createElement('path', { d: 'M608 384v-32h192v-16c0-115.6-82.8-212.8-192-235.2v123.2h-32v-127.4c-5.2-0.4-10.6-0.6-16-0.6h-32v160h-32v-160h-32c-5.4 0-10.8 0.2-16 0.6v127.4h-32v-123.2c-109.2 22.4-192 119.6-192 235.2v16h192v32h-192v64h192v32h-192v64h192v32h-192v16c0 40.4 10.2 78.6 28 112h520c17.8-33.4 28-71.6 28-112v-16h-192v-32h192v-64h-192v-32h192v-64h-192z M751.6 736h-479.2c41.2 54.6 105.4 91.4 177.6 95.6l-2 0.4v96h128v-96l-3-0.4c72.8-4 137.2-40.6 178.6-95.6z' })
  );
};

IosMicrophone.defaultProps = {
  // style
  style: {},
  color: '#000000',
  fontSize: '22px',

  // animation
  shake: false,
  beat: false,
  rotate: false
};

IosMicrophone.propTypes = {
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

exports.default = IosMicrophone;
module.exports = exports['default'];
//# sourceMappingURL=IosMicrophone.js.map