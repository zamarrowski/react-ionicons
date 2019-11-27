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

var MdFootball = function MdFootball(props) {
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
    _react2.default.createElement('path', { d: 'M512 96c-229.4 0-416 186.6-416 416s186.6 416 416 416 416-186.6 416-416-186.6-416-416-416zM254 476.4l78.4 35.8 34.2 133.8-31.2 58.6-114.4-1.4c-29.8-45.2-48.6-97-55-150.6l88-76.2zM688.6 704.6l-31.2-58.6 34.2-134 78.2-35.6 88 76.2c-6.2 53.6-25.2 105.4-55 150.6l-114.2 1.4zM753.4 412.2l-87.2 39.2-122.2-103.2v-94.4l95.8-65.2c59.6 23.8 112.8 64.6 151.2 115.6l-37.6 108zM382.6 188.8l95.4 65v94.4l-122 103-86-39.2-37.4-107.2c38.6-52.2 90.2-92 150-116zM436.8 852c-1.4-0.4-2.6-0.6-4-1l-41-110.2 29.4-58.8h181.6l30 60.6-39.6 107.8c-2 0.4-4 1-6 1.4-23 4.6-54 7.6-80.8 8.2-23.4-0.2-46.8-3-69.6-8z' })
  );
};

MdFootball.defaultProps = {
  // style
  style: {},
  color: '#000000',
  fontSize: '22px',

  // animation
  shake: false,
  beat: false,
  rotate: false
};

MdFootball.propTypes = {
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

exports.default = MdFootball;
module.exports = exports['default'];
//# sourceMappingURL=MdFootball.js.map