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

var MdClock = function MdClock(props) {
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
    _react2.default.createElement('path', { d: 'M806.2 217.8c-162.4-162.4-425.8-162.4-588.4 0s-162.4 425.8 0 588.4c162.4 162.4 425.8 162.4 588.4 0 162.4-162.4 162.4-426 0-588.4zM773.2 324.2c15.2-8.8 35-3.6 43.8 11.8 8.8 15.2 3.6 35-11.8 43.8-15.2 8.8-35 3.6-43.8-11.8-8.8-15.2-3.6-35 11.8-43.8zM160 512c0-17.6 14.4-32 32-32s32 14.4 32 32-14.4 32-32 32-32-14.4-32-32zM250.8 699.8c-15.2 8.8-35 3.6-43.8-11.8-8.8-15.2-3.6-35 11.8-43.8 15.2-8.8 35-3.6 43.8 11.8 8.8 15.2 3.6 35-11.8 43.8zM262.6 368c-8.8 15.2-28.4 20.6-43.8 11.8-15.2-8.8-20.6-28.4-11.8-43.8 8.8-15.2 28.4-20.6 43.8-11.8s20.6 28.6 11.8 43.8zM336 207.2c15.2-8.8 35-3.6 43.8 11.8 8.8 15.2 3.6 35-11.8 43.8s-35 3.6-43.8-11.8c-8.8-15.4-3.4-35 11.8-43.8zM320.4 428.6l31.2-53.2 190.4 113.8v278.8h-62v-246.8l-159.6-92.6zM379.8 805.2c-8.8 15.2-28.4 20.6-43.8 11.8s-20.6-28.4-11.8-43.8c8.8-15.2 28.4-20.6 43.8-11.8 15.2 8.8 20.6 28.4 11.8 43.8zM512 864c-17.6 0-32-14.4-32-32s14.4-32 32-32 32 14.4 32 32-14.4 32-32 32zM512 224c-17.6 0-32-14.4-32-32s14.4-32 32-32 32 14.4 32 32c0 17.6-14.4 32-32 32zM688 816.8c-15.2 8.8-35 3.6-43.8-11.8-8.8-15.2-3.6-35 11.8-43.8 15.2-8.8 35-3.6 43.8 11.8s3.4 35-11.8 43.8zM699.8 250.8c-8.8 15.2-28.4 20.6-43.8 11.8s-20.6-28.4-11.8-43.8c8.8-15.2 28.4-20.6 43.8-11.8s20.6 28.6 11.8 43.8zM816.8 688c-8.8 15.2-28.4 20.6-43.8 11.8-15.2-8.8-20.6-28.4-11.8-43.8 8.8-15.2 28.4-20.6 43.8-11.8s20.6 28.6 11.8 43.8zM832 544c-17.6 0-32-14.4-32-32s14.4-32 32-32c17.6 0 32 14.4 32 32s-14.4 32-32 32z' })
  );
};

MdClock.defaultProps = {
  // style
  style: {},
  color: '#000000',
  fontSize: '22px',

  // animation
  shake: false,
  beat: false,
  rotate: false
};

MdClock.propTypes = {
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

exports.default = MdClock;
module.exports = exports['default'];
//# sourceMappingURL=MdClock.js.map