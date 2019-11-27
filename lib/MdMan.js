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

var MdMan = function MdMan(props) {
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
    _react2.default.createElement('path', { d: 'M512 213.2c41.2 0.2 74.6-33.2 74.6-74.6 0-41.2-33.4-74.6-74.6-74.6s-74.6 33.4-74.6 74.6c0 41.2 33.4 74.6 74.6 74.6z M586.8 230h-149.6c-56.4 0-93.2 49.6-93.2 96.8v227.2c0 44 62 44 62 0v-210h12v571.2c0 60.8 84 58.8 86 0v-329.2h16v329.4c3.4 62.4 86 56.4 86-0.2v-571.2h10v210c0 44 64 44 64 0v-227.2c0-47-37-96.8-93.2-96.8z' })
  );
};

MdMan.defaultProps = {
  // style
  style: {},
  color: '#000000',
  fontSize: '22px',

  // animation
  shake: false,
  beat: false,
  rotate: false
};

MdMan.propTypes = {
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

exports.default = MdMan;
module.exports = exports['default'];
//# sourceMappingURL=MdMan.js.map