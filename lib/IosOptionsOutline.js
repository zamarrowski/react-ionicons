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

var IosOptionsOutline = function IosOptionsOutline(props) {
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
    _react2.default.createElement('path', { d: 'M704 208c17.674 0 32 14.326 32 32s-14.326 32-32 32-32-14.326-32-32 14.326-32 32-32zM704 176c-35.29 0-64 28.71-64 64s28.71 64 64 64 64-28.71 64-64-28.71-64-64-64v0z M704 752c17.674 0 32 14.326 32 32s-14.326 32-32 32-32-14.326-32-32 14.326-32 32-32zM704 720c-35.29 0-64 28.71-64 64s28.71 64 64 64 64-28.71 64-64-28.71-64-64-64v0z M320 480c17.674 0 32 14.326 32 32s-14.326 32-32 32-32-14.326-32-32 14.326-32 32-32zM320 448c-35.29 0-64 28.71-64 64s28.71 64 64 64 64-28.71 64-64-28.71-64-64-64v0z M414.64 496h545.36v32h-545.36c0.878-5.208 1.36-10.546 1.36-16s-0.48-10.792-1.36-16z M224 512c0 5.454 0.48 10.792 1.36 16h-161.36v-32h161.36c-0.88 5.208-1.36 10.546-1.36 16z M798.64 768h161.36v32h-161.36c0.878-5.208 1.36-10.546 1.36-16s-0.48-10.792-1.36-16z M608 784c0 5.454 0.48 10.792 1.36 16h-545.36v-32h545.36c-0.88 5.208-1.36 10.546-1.36 16z M798.64 224h161.36v32h-161.36c0.878-5.208 1.36-10.546 1.36-16s-0.48-10.792-1.36-16z M609.36 224c-0.878 5.208-1.36 10.546-1.36 16s0.48 10.792 1.36 16h-545.36v-32h545.36z' })
  );
};

IosOptionsOutline.defaultProps = {
  // style
  style: {},
  color: '#000000',
  fontSize: '22px',

  // animation
  shake: false,
  beat: false,
  rotate: false
};

IosOptionsOutline.propTypes = {
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

exports.default = IosOptionsOutline;
module.exports = exports['default'];
//# sourceMappingURL=IosOptionsOutline.js.map