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

var IosTrashOutline = function IosTrashOutline(props) {
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
    _react2.default.createElement('path', { d: 'M800 226.6h-160v-40c0-32.4-26.2-58.6-58.6-58.6h-139c-32.2 0-58.4 26.2-58.4 58.6v40h-160v29.4h42.2l47.2 581.4c0 32.4 26.2 58.6 58.6 58.6h282c32.4 0 58.6-26.2 58.6-58.6l46.6-581.4h40.8v-29.4zM413.2 186.6c0-16.2 13.2-29.4 29.2-29.4h139c16.2 0 29.2 13.2 29.2 29.4v40h-197.4v-40zM683.2 835.8v1.6c0 16.2-13.2 29.4-29.2 29.4h-282c-16.2 0-29.2-13.2-29.2-29.4v-1.6l-47.4-579.8h434.4l-46.6 579.8z M498 320h28v482h-28v-482z M640 320h-29.2l-21.4 482h29.2z M413 320h-29l21.4 482h29.2z' })
  );
};

IosTrashOutline.defaultProps = {
  // style
  style: {},
  color: '#000000',
  fontSize: '22px',

  // animation
  shake: false,
  beat: false,
  rotate: false
};

IosTrashOutline.propTypes = {
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

exports.default = IosTrashOutline;
module.exports = exports['default'];
//# sourceMappingURL=IosTrashOutline.js.map