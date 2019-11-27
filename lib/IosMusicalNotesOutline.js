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

var IosMusicalNotesOutline = function IosMusicalNotesOutline(props) {
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
    _react2.default.createElement('path', { d: 'M812.6 96.4c-9.4 1.8-404 78.4-412.4 80s-16.2 7.2-16.2 16c0 0 0 477 0 480.2s-0.2 14.4-4.8 23.4c-6.2 11.8-17 20.4-32.2 25.4-6.6 2.2-15.6 4.2-26.2 6.6-48.2 10.8-128.8 29.2-128.8 103.6 0 62.2 44.8 90.2 83.4 95 4.2 0.6 9 1.4 14.2 1.4 0 0 0 0 0 0 13.4 0 48-2.6 78.4-22.4 22-14.4 48.2-42.8 48.2-95.6v-438l384-78c0 0 0 273.2 0 281.4s-0.4 17.8-5 26.8c-6.2 11.8-17 20.4-32.4 25.4-6.6 2.2-15.6 4.2-26.2 6.6-48.2 10.8-128.8 29-128.8 103.4 0 67.4 52.6 91.2 83.6 94.6 2.4 0.2 5.2 0.2 8.2 0.2 0 0 0 0 0 0 20.4 0 51.4-5 77.6-20 35.8-20.6 55-53.6 55-96.4v-604.2c-0.2-8.8-7.6-17.8-19.6-15.4zM384 809.6c0 31-11.2 54.6-33.6 69.2-23.8 15.6-52.6 17.4-61 17.4 0 0 0 0 0 0-3.8 0-7.2-0.8-10.2-1.2-4.6-0.6-21-3.8-34.6-14.8-13.8-11-20.8-27.4-20.8-48.4 0-45.2 49.2-60 103.8-72.4 11.4-2.6 21.2-4.8 29.2-7.4 11-3.6 19-8.4 27-13.8v71.4zM800 715.6c0 31-13.2 53.8-38.8 68.6-20.8 11.8-46.2 15.8-61.8 15.8 0 0 0 0 0 0-2.6 0-4.2 0.2-4.8 0-9.2-1-55.2-8.4-55.2-62.4 0-45.2 49.2-60 103.8-72.4 11.4-2.6 21.4-4.8 29.4-7.4 11-3.6 19.2-8.4 27.2-13.8v71.6zM800 261.8l-384 76v-132l384-74.4v130.4z' })
  );
};

IosMusicalNotesOutline.defaultProps = {
  // style
  style: {},
  color: '#000000',
  fontSize: '22px',

  // animation
  shake: false,
  beat: false,
  rotate: false
};

IosMusicalNotesOutline.propTypes = {
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

exports.default = IosMusicalNotesOutline;
module.exports = exports['default'];
//# sourceMappingURL=IosMusicalNotesOutline.js.map