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

var MdMusicalNotes = function MdMusicalNotes(props) {
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
    _react2.default.createElement('path', { d: 'M320 128v515.2c-16.4-5.4-34.4-8.2-53.2-8.2-76.6 0-138.8 54.2-138.8 130.8s62.2 130.2 138.8 130.2c76.6 0 139.2-56.4 139.2-138.2v-357.8h404v243.2c-16.4-5.4-34.4-8.2-53.2-8.2-76.6 0-138.8 54.2-138.8 130.8s62.2 130.2 138.8 130.2c76.6 0 139.2-56.4 139.2-138.2v-629.8h-576zM810 320h-404v-106h404v106z' })
  );
};

MdMusicalNotes.defaultProps = {
  // style
  style: {},
  color: '#000000',
  fontSize: '22px',

  // animation
  shake: false,
  beat: false,
  rotate: false
};

MdMusicalNotes.propTypes = {
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

exports.default = MdMusicalNotes;
module.exports = exports['default'];
//# sourceMappingURL=MdMusicalNotes.js.map