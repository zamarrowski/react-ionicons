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

var MdArrowRoundForward = function MdArrowRoundForward(props) {
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
    _react2.default.createElement('path', { d: 'M569.8 825.2l276.2-268c12-11.6 18-27.4 18-44.8v-0.8c0-17.4-6-33.2-18-44.8l-276.2-268c-24-25-62.6-25-86.4 0s-23.8 65.4 0 90.4l166 158.8h-428c-34-0-61.4 28.6-61.4 64 0 36 27.4 64 61.2 64h428l-166 158.8c-23.8 25-23.8 65.4 0 90.4 24 25 62.6 25 86.6 0z' })
  );
};

MdArrowRoundForward.defaultProps = {
  // style
  style: {},
  color: '#000000',
  fontSize: '22px',

  // animation
  shake: false,
  beat: false,
  rotate: false
};

MdArrowRoundForward.propTypes = {
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

exports.default = MdArrowRoundForward;
module.exports = exports['default'];
//# sourceMappingURL=MdArrowRoundForward.js.map