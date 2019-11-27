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

var MdThumbsUp = function MdThumbsUp(props) {
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
    _react2.default.createElement('path', { d: 'M396 896h344c31.4 0 57.2-19.2 68.4-46.8l114.2-270.8c3.4-8.8 5.2-18 5.2-28v-77.2c0-42.2-34-89.2-75.6-89.2h-238.4l36-163 1.2-12c0-15.8-6.4-30.2-16.6-40.6l-40.4-40.4-252 254.6c-13.6 13.8-22 33-22 54.2v384c0 42.2 34.4 75.2 76 75.2z M96 448h128v448h-128v-448z' })
  );
};

MdThumbsUp.defaultProps = {
  // style
  style: {},
  color: '#000000',
  fontSize: '22px',

  // animation
  shake: false,
  beat: false,
  rotate: false
};

MdThumbsUp.propTypes = {
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

exports.default = MdThumbsUp;
module.exports = exports['default'];
//# sourceMappingURL=MdThumbsUp.js.map