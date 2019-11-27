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

var MdCloudy = function MdCloudy(props) {
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
    _react2.default.createElement('path', { d: 'M246.8 366c0.8-0.2 1.6-0.2 2.4-0.4-1 0.2-1.6 0.4-2.4 0.4z M786.4 438.4c-25.4-129.2-138.6-226.4-274.4-226.4-79.4 0-152 28-201.8 90.8 68.6 5.2 132.2 30.4 181.4 79.6 36.4 36.4 62 81 74.8 129.6h-67c-30.6-87.4-112-150-211.4-150-12 0-28.6 1.4-41.2 4-106.8 22-182.8 110.8-182.8 221 0 124.2 100.4 225 224 225h485.4c103 0 186.6-84 186.6-187.6 0-98.8-76.6-179.2-173.6-186z' })
  );
};

MdCloudy.defaultProps = {
  // style
  style: {},
  color: '#000000',
  fontSize: '22px',

  // animation
  shake: false,
  beat: false,
  rotate: false
};

MdCloudy.propTypes = {
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

exports.default = MdCloudy;
module.exports = exports['default'];
//# sourceMappingURL=MdCloudy.js.map