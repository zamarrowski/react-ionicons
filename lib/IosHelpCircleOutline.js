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

var IosHelpCircleOutline = function IosHelpCircleOutline(props) {
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
    _react2.default.createElement('path', { d: 'M512 96c-229.8 0-416 186.2-416 416s186.2 416 416 416c229.8 0 416-186.2 416-416s-186.2-416-416-416zM512 893.4c-210.2 0-381.4-171-381.4-381.4 0-210.2 171-381.4 381.4-381.4 210.2 0 381.4 171 381.4 381.4 0 210.2-171.2 381.4-381.4 381.4z M519.2 292c-86.4 0-134.6 40.6-135.2 124.4h37.6c-1.2-60.8 31-93 95.8-93 46.4 0 85.2 32.4 85.2 79.6 0 30.6-16.6 55.4-38.8 76.2-45.2 41.6-58 72-60.2 129h38c2.2-51.6 1-61.4 46.6-106.6 30.4-28.4 51.8-56.6 51.8-100.4-0-68.4-54.8-109.2-120.8-109.2z M520.6 664.6c-18.8 0-34 15-34 33.6s15.2 33.8 34 33.8c18.8 0 34-15 34-33.8 0-18.6-15.2-33.6-34-33.6z' })
  );
};

IosHelpCircleOutline.defaultProps = {
  // style
  style: {},
  color: '#000000',
  fontSize: '22px',

  // animation
  shake: false,
  beat: false,
  rotate: false
};

IosHelpCircleOutline.propTypes = {
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

exports.default = IosHelpCircleOutline;
module.exports = exports['default'];
//# sourceMappingURL=IosHelpCircleOutline.js.map