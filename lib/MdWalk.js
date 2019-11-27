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

var MdWalk = function MdWalk(props) {
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
    _react2.default.createElement('path', { d: 'M576 224c44.446 0 79.994-35.552 79.994-80 0-44.45-35.548-80-79.994-80s-80.006 35.55-80.006 80c0 44.448 35.56 80 80.006 80z M576 464h208v-80h-144l-89.604-138.666c-15.396-23.334-36.272-36.272-61.866-36.272-6.396 0-17.656 1.062-25.598 3.494l-222.932 75.444v224h80v-160l81.062-32-161.062 640h80l113.396-328.542 100.604 136.542v192h76v-256l-114.062-192 39.49-123.728 40.572 75.728z' })
  );
};

MdWalk.defaultProps = {
  // style
  style: {},
  color: '#000000',
  fontSize: '22px',

  // animation
  shake: false,
  beat: false,
  rotate: false
};

MdWalk.propTypes = {
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

exports.default = MdWalk;
module.exports = exports['default'];
//# sourceMappingURL=MdWalk.js.map