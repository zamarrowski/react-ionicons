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

var MdPulse = function MdPulse(props) {
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
    _react2.default.createElement('path', { d: 'M856 538c-43 0-81.2 26.2-96.8 66h-82.4l-62.8-161.4c-5.4-16.4-20.6-27.4-38-27.4-0.4 0-0.6 0-0.8 0-17.6 0.4-32.8 12-37.6 29l-67.2 270.8-111-583.6c-3.4-20.2-20.2-35.4-39.4-35.4-19 0-33.8 12.4-38.8 32.4l-100.6 475.6h-116.6v80h148c18.4 0 34.4-12.4 38.8-30.4l61.4-321.2 108.2 564.2c3 17.6 17.8 30.2 37.2 31.4 0.8 0 1.6 0 2.4 0 18.6 0 33.8-10.6 38.4-27l80.4-325.8 31 81.4c5.4 16.4 20.6 27.4 38 27.4h112.8c16.6 38 54.2 62 95.2 62 27.8 0 53.8-11.2 73.6-31.6 19.6-20.2 30.4-46.6 30.4-74.4 0.2-57.2-45.4-102-103.8-102z' })
  );
};

MdPulse.defaultProps = {
  // style
  style: {},
  color: '#000000',
  fontSize: '22px',

  // animation
  shake: false,
  beat: false,
  rotate: false
};

MdPulse.propTypes = {
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

exports.default = MdPulse;
module.exports = exports['default'];
//# sourceMappingURL=MdPulse.js.map