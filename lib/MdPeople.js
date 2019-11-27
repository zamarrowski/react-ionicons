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

var MdPeople = function MdPeople(props) {
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
    _react2.default.createElement('path', { d: 'M674.908 464c67.198 0 122.184-54.004 122.184-120 0-65.994-54.986-120-122.184-120s-122.18 54.006-122.18 120c-0 65.996 54.982 120 122.18 120zM349.092 464c67.198 0 122.18-54.004 122.18-120 0-65.994-54.982-120-122.18-120s-122.184 54.006-122.184 120c0 65.996 54.986 120 122.184 120zM349.092 552c-95.716 0-285.092 45.996-285.092 140v108h576v-108c0-94.004-195.198-140-290.908-140zM674.908 574.006c-12.21 0-20.65 0-34.908 1.994 46.852 34.004 64 56 64 116v108h256v-108c0-94.004-189.376-117.994-285.092-117.994z' })
  );
};

MdPeople.defaultProps = {
  // style
  style: {},
  color: '#000000',
  fontSize: '22px',

  // animation
  shake: false,
  beat: false,
  rotate: false
};

MdPeople.propTypes = {
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

exports.default = MdPeople;
module.exports = exports['default'];
//# sourceMappingURL=MdPeople.js.map