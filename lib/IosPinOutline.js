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

var IosPinOutline = function IosPinOutline(props) {
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
    _react2.default.createElement('path', { d: 'M512 128c141.2 0 256 105.6 256 235.4 0 79-48 197.4-138.8 342.8-44.8 71.8-90.2 134-117.2 169.6-27-35.6-72-97.4-116.8-169-91-145.6-139.2-264.4-139.2-343.4 0-129.8 114.8-235.4 256-235.4zM512 96c-159 0-288 119.8-288 267.4 0 208 288 564.6 288 564.6s288-356.6 288-564.6c0-147.6-129-267.4-288-267.4v0z M512 256c-70.6 0-128 57.4-128 128s57.4 128 128 128 128-57.4 128-128-57.4-128-128-128zM512 477.8c-51.8 0-93.8-42-93.8-93.8s42-93.8 93.8-93.8 93.8 42 93.8 93.8-42 93.8-93.8 93.8z' })
  );
};

IosPinOutline.defaultProps = {
  // style
  style: {},
  color: '#000000',
  fontSize: '22px',

  // animation
  shake: false,
  beat: false,
  rotate: false
};

IosPinOutline.propTypes = {
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

exports.default = IosPinOutline;
module.exports = exports['default'];
//# sourceMappingURL=IosPinOutline.js.map