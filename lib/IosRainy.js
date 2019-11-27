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

var IosRainy = function IosRainy(props) {
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
    _react2.default.createElement('path', { d: 'M748.8 286.4l-26.6-0.2c-23.6-107-110.2-190.2-250.2-190.2s-255.6 103.4-255.6 245.6l0.6 9.6c-84.6 11.2-153 89-153 177.8 0 94 75.8 177 169.2 177h21.2l-74.8 101.4c-5.2 7.2-3.6 16.6 3.6 21.8 2.6 2 5.8 2.8 8.8 2.8 4.6 0 10.2-1.2 13.6-5.8l88.4-120.2h122.8l-144.6 198c-5.2 7.2-4.4 16 2.8 21.2 2.6 2 6.6 2.8 9.6 2.8 7.4 0 12.2-2.6 15.6-7.2l156-214.8h122.2l-74.6 101.4c-5.2 7.2-3.6 16.6 3.6 21.8 2.6 2 5.8 2.8 8.8 2.8 4.6 0 10.2-1.2 13.6-5.8l88.2-120.2h122.8l-144.6 198c-5.2 7.2-4.2 15.6 3 20.6 2.6 2 6.4 3.4 9.4 3.4 4.6 0 10.2-1.6 13.6-6.2l160.2-220.6c100.8-16.8 177.8-107.4 177.8-213.2-0.2-117.2-94.8-201.6-211.4-201.6z' })
  );
};

IosRainy.defaultProps = {
  // style
  style: {},
  color: '#000000',
  fontSize: '22px',

  // animation
  shake: false,
  beat: false,
  rotate: false
};

IosRainy.propTypes = {
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

exports.default = IosRainy;
module.exports = exports['default'];
//# sourceMappingURL=IosRainy.js.map