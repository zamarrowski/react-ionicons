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

var MdRainy = function MdRainy(props) {
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
    _react2.default.createElement('path', { d: 'M278 800c0 0-46 50.6-46 81.4 0 25.6 20.6 46.6 46 46.6s46-21 46-46.6c0-30.8-46-81.4-46-81.4z M434 736c0 0-46 50.6-46 81.4 0 25.6 20.8 46.6 46 46.6 25.4 0 46-21 46-46.6 0-30.8-46-81.4-46-81.4z M590 800c0 0-46 50.6-46 81.4 0 25.6 20.6 46.6 46 46.6 25.2 0 46-21 46-46.6 0-30.8-46-81.4-46-81.4z M746 736c0 0-46 50.6-46 81.4 0 25.6 20.8 46.6 46 46.6 25.4 0 46-21 46-46.6 0-30.8-46-81.4-46-81.4z M786.4 322.4c-25.4-129.2-138.6-226.4-274.4-226.4-79.4 0-152 28-201.8 90.8 68.6 5.2 132.2 30.4 181.4 79.6 36.4 36.4 62 81 74.8 129.6h-67c-30.6-87.4-112-150-211.4-150-12 0-28.6 1.4-41.2 4-106.8 22-182.8 110.8-182.8 221 0 124.2 94.8 233 218.4 233h485.4c103 0 192.4-92 192.4-195.6-0.2-98.8-76.8-179.2-173.8-186z' })
  );
};

MdRainy.defaultProps = {
  // style
  style: {},
  color: '#000000',
  fontSize: '22px',

  // animation
  shake: false,
  beat: false,
  rotate: false
};

MdRainy.propTypes = {
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

exports.default = MdRainy;
module.exports = exports['default'];
//# sourceMappingURL=MdRainy.js.map