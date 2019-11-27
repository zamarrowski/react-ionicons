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

var IosWine = function IosWine(props) {
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
    _react2.default.createElement('path', { d: 'M528 650c0-44 41-77.4 80.4-109.6 15.8-13 30.8-25 43-38 53-55.4 52.4-103.4 52.4-142.2v-8.2c0-88.4-61.6-249.2-64-256h-256c-2.4 6.8-64 167-64 256v8.2c0 38.6-0.6 86.8 52.4 142.2 12.2 12.8 27.2 25 43 38 39.8 32.2 80.8 65.6 80.8 109.6v246h-144v32h320v-32h-144v-246zM405.4 128h213.2c10.8 32 39 125.4 49.6 192h-312.4c10.6-66.6 39-160 49.6-192z' })
  );
};

IosWine.defaultProps = {
  // style
  style: {},
  color: '#000000',
  fontSize: '22px',

  // animation
  shake: false,
  beat: false,
  rotate: false
};

IosWine.propTypes = {
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

exports.default = IosWine;
module.exports = exports['default'];
//# sourceMappingURL=IosWine.js.map