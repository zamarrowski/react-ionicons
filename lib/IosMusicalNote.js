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

var IosMusicalNote = function IosMusicalNote(props) {
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
    _react2.default.createElement('path', { d: 'M716.6 96.4c-9.4 1.8-212 40.2-220.4 41.8s-16.2 7.2-16.2 16c0 0 0 515.4 0 518.8 0 3.2-0.2 14.4-4.8 23.4-6.2 11.8-17 20.4-32.2 25.4-6.6 2.2-15.6 4.2-26.2 6.6-48.2 10.8-128.8 29-128.8 103.2 0 62 44.8 90 83.4 94.8 4.2 0.6 9 1.6 14.2 1.6 0 0 0 0 0 0 13.4 0 48-2.8 78.4-22.6 22-14.2 48.2-42.8 48.2-95.6v-476.8l224-45.8v-175.6c-0.2-8.6-7.6-17.6-19.6-15.2z' })
  );
};

IosMusicalNote.defaultProps = {
  // style
  style: {},
  color: '#000000',
  fontSize: '22px',

  // animation
  shake: false,
  beat: false,
  rotate: false
};

IosMusicalNote.propTypes = {
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

exports.default = IosMusicalNote;
module.exports = exports['default'];
//# sourceMappingURL=IosMusicalNote.js.map