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

var MdCloudCircle = function MdCloudCircle(props) {
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
    _react2.default.createElement('path', { d: 'M512 96c-228.8 0-416 187.2-416 416s187.2 416 416 416c228.8 0 416-187.2 416-416s-187.2-416-416-416zM699.2 678.4c0 0-351.518 0-353.598 0-68.636 0-124.8-56.164-124.8-124.798 0-68.638 56.164-124.8 124.8-124.8 2.082 0 4.164 0 6.234 0 18.728-72.8 83.202-124.798 160.166-124.798 91.528 0 166.398 74.87 166.398 166.396h20.8c58.236 0 104 45.764 104 104.002 0 58.234-45.764 103.998-104 103.998z' })
  );
};

MdCloudCircle.defaultProps = {
  // style
  style: {},
  color: '#000000',
  fontSize: '22px',

  // animation
  shake: false,
  beat: false,
  rotate: false
};

MdCloudCircle.propTypes = {
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

exports.default = MdCloudCircle;
module.exports = exports['default'];
//# sourceMappingURL=MdCloudCircle.js.map