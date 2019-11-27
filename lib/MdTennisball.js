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

var MdTennisball = function MdTennisball(props) {
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
    _react2.default.createElement('path', { d: 'M767.6 184.4c-70.6-55.4-159.4-88.4-255.6-88.4-96 0-184.6 33-255.2 88 83.2 89.6 128.6 206 128 328.6-0.6 122-46.6 237.2-129.8 325.8 70.8 56 160.2 89.6 257 89.6 97 0 186.6-33.6 257.6-90-83-88.6-129-203.6-129.6-325.4-0.6-122.4 44.6-238.6 127.6-328.2z M706.2 510.2c0 53.8 10.2 106 30.2 155.6 19.2 47.2 46.6 89.8 81.6 127.2 68.2-74.2 110-173 110-281 0-109-42.4-208.4-111.6-282.8-34.2 37-61.2 79.2-80 125.4-20 49.6-30.2 102-30.2 155.6z M318.6 510.2c0-53.8-10.2-106-30.2-155.6-18.8-46.4-45.8-88.8-80.4-125.8-69.4 74.4-112 174-112 283.2 0 108.4 42 207.2 110.4 281.4 35.2-37.4 62.8-80.2 82-127.6 20-49.4 30.2-101.8 30.2-155.6z' })
  );
};

MdTennisball.defaultProps = {
  // style
  style: {},
  color: '#000000',
  fontSize: '22px',

  // animation
  shake: false,
  beat: false,
  rotate: false
};

MdTennisball.propTypes = {
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

exports.default = MdTennisball;
module.exports = exports['default'];
//# sourceMappingURL=MdTennisball.js.map