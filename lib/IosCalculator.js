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

var IosCalculator = function IosCalculator(props) {
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
    _react2.default.createElement('path', { d: 'M736 128h-448c-35.4 0-64 28.6-64 64v640c0 35.4 28.6 64 64 64h448c35.4 0 64-28.6 64-64v-640c0-35.4-28.6-64-64-64zM720 560v256h-96v-256h96zM720 400v96h-96v-96h96zM560 720v96h-96v-96h96zM560 560v96h-96v-96h96zM560 400v96h-96v-96h96zM400 720v96h-96v-96h96zM400 560v96h-96v-96h96zM400 400v96h-96v-96h96zM304 304v-96h416v96h-416z' })
  );
};

IosCalculator.defaultProps = {
  // style
  style: {},
  color: '#000000',
  fontSize: '22px',

  // animation
  shake: false,
  beat: false,
  rotate: false
};

IosCalculator.propTypes = {
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

exports.default = IosCalculator;
module.exports = exports['default'];
//# sourceMappingURL=IosCalculator.js.map