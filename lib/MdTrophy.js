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

var MdTrophy = function MdTrophy(props) {
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
    _react2.default.createElement('path', { d: 'M784 210c1.8-54 0.4-112 0.2-114h-545.6c0 2-1.6 60 0.2 114h-142.8c0 136 19.8 204.6 42 253.4s52.8 90.6 117.4 140.6c60.2 46.6 191 107.2 208.6 115.2v56.6c-9.2 20-47 56.4-166.6 56.4h-41.4v96h512v-96h-51.4c-121.4 0-150-38.2-156.6-56.4v-56.6c18.6-9.2 161.8-80.6 208.8-115 50.4-36.8 101.8-103 117.4-140.6s41.8-129.6 41.8-253.6h-144zM219.2 423.8c-17.6-36.4-28-75.8-31.4-123.8h57.4c1.4 12 2.8 22.6 4.6 32.6 13.2 78.4 29.6 140.4 51.4 193-34.6-27-62.6-61.6-82-101.8zM804.8 423.8c-19.8 40.6-48 75.4-83.2 102.6 22-52.4 38-113.6 51.6-193.8 1.6-10 3.2-20.6 4.6-32.6h58.6c-3.6 48-13.8 87.4-31.6 123.8z' })
  );
};

MdTrophy.defaultProps = {
  // style
  style: {},
  color: '#000000',
  fontSize: '22px',

  // animation
  shake: false,
  beat: false,
  rotate: false
};

MdTrophy.propTypes = {
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

exports.default = MdTrophy;
module.exports = exports['default'];
//# sourceMappingURL=MdTrophy.js.map