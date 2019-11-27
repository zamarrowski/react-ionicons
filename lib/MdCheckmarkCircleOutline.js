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

var MdCheckmarkCircleOutline = function MdCheckmarkCircleOutline(props) {
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
    _react2.default.createElement('path', { d: 'M341.436 432.964l-58.236 58.236 187.2 187.2 416-416-58.236-58.236-357.764 355.672-128.964-126.872zM844.8 512c0 183.036-149.766 332.8-332.8 332.8s-332.8-149.764-332.8-332.8 149.764-332.8 332.8-332.8c31.2 0 62.4 4.164 91.528 12.482l64.472-64.482c-47.836-20.8-99.836-31.2-156-31.2-228.8 0-416 187.2-416 416s187.2 416 416 416 416-187.2 416-416h-83.2z' })
  );
};

MdCheckmarkCircleOutline.defaultProps = {
  // style
  style: {},
  color: '#000000',
  fontSize: '22px',

  // animation
  shake: false,
  beat: false,
  rotate: false
};

MdCheckmarkCircleOutline.propTypes = {
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

exports.default = MdCheckmarkCircleOutline;
module.exports = exports['default'];
//# sourceMappingURL=MdCheckmarkCircleOutline.js.map