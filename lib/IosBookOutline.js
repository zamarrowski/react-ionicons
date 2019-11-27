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

var IosBookOutline = function IosBookOutline(props) {
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
    _react2.default.createElement('path', { d: 'M695.242 128c-81.882 0-158.242 28-183.156 88.99-27.086-60.99-101.27-88.99-183.154-88.99-110.402 0-200.932 51.96-200.932 158v566h44.28c25.72-52.668 88.476-84 156.65-84 80.448 0 147.754 55.056 163.234 128h39.428c15.478-72.944 82.99-128 163.444-128 68.17 0 122.298 23.332 156.858 84h44.106v-566c0-106.040-90.354-158-200.758-158zM496 821.852c-36-51.742-97.46-85.852-167-85.852-69.538 0-129 20.11-167 71.852l-2 1.074v-526.926c6-83.65 80.178-122 168.586-122 90.324 0 164.29 37.416 166.726 123.616-0.034 1.458 0.032 2.918 0.032 4.384l0.656 26.206v507.646zM864 296v511.852c-36-51.742-99.462-71.852-169-71.852-69.54 0-131 34.11-167 85.852v-533.852c0-88.224 75.318-128 167.174-128 88.406 0 162.826 22.35 168.826 106v30z' })
  );
};

IosBookOutline.defaultProps = {
  // style
  style: {},
  color: '#000000',
  fontSize: '22px',

  // animation
  shake: false,
  beat: false,
  rotate: false
};

IosBookOutline.propTypes = {
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

exports.default = IosBookOutline;
module.exports = exports['default'];
//# sourceMappingURL=IosBookOutline.js.map