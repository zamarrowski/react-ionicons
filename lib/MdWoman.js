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

var MdWoman = function MdWoman(props) {
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
    _react2.default.createElement('path', { d: 'M380.8 297.2l-58.8 208.6c-12.6 45.6 41.4 63.4 54.6 20.6l52.6-192.4h14.8l-90.4 338h84.4v254c0 46 64 46 64 0v-254h20v254c0 46 62 46 62 0v-254h86.8l-92.4-338h16.8l52.6 192.4c13 43.8 66.6 25 54.6-20.4l-58.8-208.8c-8-23.6-36.4-65.2-84-67.2h-94.6c-49.2 2-77.4 43.2-84.2 67.2z M585.2 138.4c0-41.2-32.8-74.6-73.2-74.6s-73.2 33.4-73.2 74.6c0 41.2 32.8 74.6 73.2 74.6s73.2-33.4 73.2-74.6z' })
  );
};

MdWoman.defaultProps = {
  // style
  style: {},
  color: '#000000',
  fontSize: '22px',

  // animation
  shake: false,
  beat: false,
  rotate: false
};

MdWoman.propTypes = {
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

exports.default = MdWoman;
module.exports = exports['default'];
//# sourceMappingURL=MdWoman.js.map