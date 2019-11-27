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

var MdAperture = function MdAperture(props) {
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
    _react2.default.createElement('path', { d: 'M512 64c-247.424 0-448 200.576-448 448s200.576 448 448 448 448-200.576 448-448-200.576-448-448-448zM783.53 783.53c-72.53 72.526-168.96 112.47-271.53 112.47s-199-39.944-271.53-112.47c-72.526-72.53-112.47-168.96-112.47-271.53s39.944-199 112.47-271.53c72.53-72.526 168.96-112.47 271.53-112.47s199 39.944 271.53 112.47c72.526 72.53 112.47 168.96 112.47 271.53s-39.944 199-112.47 271.53z M400.086 212.134c-81.262 30.342-146.868 92.764-181.434 171.866h293.348l-111.914-171.866z M825.594 576c4.198-20.68 6.406-42.082 6.406-64 0-73.248-24.628-140.734-66.032-194.668l-143.968 258.668h203.594z M719.946 268.79c-55.932-47.868-128.558-76.79-207.946-76.79-15.932 0-31.588 1.182-46.896 3.43l156.6 252.57 98.242-179.21z M198.408 448c-4.2 20.68-6.408 42.082-6.408 64 0 73.278 24.648 140.788 66.082 194.732l143.918-258.732h-203.592z M623.918 811.864c81.262-30.342 146.866-92.764 181.43-171.864h-293.348l111.918 171.864z M304.092 755.242c55.926 47.848 128.536 76.758 207.908 76.758 15.938 0 31.598-1.184 46.912-3.432l-156.584-252.568-98.236 179.242z' })
  );
};

MdAperture.defaultProps = {
  // style
  style: {},
  color: '#000000',
  fontSize: '22px',

  // animation
  shake: false,
  beat: false,
  rotate: false
};

MdAperture.propTypes = {
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

exports.default = MdAperture;
module.exports = exports['default'];
//# sourceMappingURL=MdAperture.js.map