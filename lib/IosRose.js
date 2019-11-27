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

var IosRose = function IosRose(props) {
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
    _react2.default.createElement('path', { d: 'M832 274.2c-37.8 7.8-73.6 16.4-107.4 25.6-81 22-151 47.8-210.8 74.4-38.6 17.2-52.4 24.8-103 51.8-116.8 61.8-186.8 128.6-186.8 264 0 135.6 111.2 238 288 238s288-102.4 288-238c0-135.4-122-237.4 32-415.8v0z M192 214.8c83 87.4 89.2 193 78.8 268.8 25.6-21 62.4-47.8 112.2-76.8 12.8-7.6 26.6-15.2 41.2-22.8 23.2-12.2 47-23.8 71.6-34.8-18.2-20.2-44.2-38.2-73.2-54-97.4-53-230.6-80.4-230.6-80.4v0z M704 155.4c0 0-157.2 4.4-261.4 116 33.2 18.4 59.4 38 78 58.6l5.4 6c74.4-31.2 176.2-63.4 242-78-12.8-43.4-64-102.6-64-102.6v0z M352 96c-30.6 41.6-51.4 84.2-60.6 111.4 42.2 11.8 71 24.6 122.8 49.4 19-21.2 40.8-40.2 65.2-56.8-58.8-75-127.4-104-127.4-104v0z' })
  );
};

IosRose.defaultProps = {
  // style
  style: {},
  color: '#000000',
  fontSize: '22px',

  // animation
  shake: false,
  beat: false,
  rotate: false
};

IosRose.propTypes = {
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

exports.default = IosRose;
module.exports = exports['default'];
//# sourceMappingURL=IosRose.js.map