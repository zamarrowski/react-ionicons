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

var IosBackspaceOutline = function IosBackspaceOutline(props) {
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
    _react2.default.createElement('path', { d: 'M790 192h-330c-93.4 0-146.4 69.4-204 127s-144.2 149.4-144.2 149.4c-9.8 11.2-15.8 25.6-15.8 41.8 0 16 6 30.6 15.8 42 0 0 68.6 75.2 144.2 151 75.6 75.6 113.4 129 204 129h330c77 0 138-65 138-142v-360.2c0-77-61-138-138-138zM896 690c0 29-10.6 56.8-31 77.4-20.2 20.8-46.6 32.6-75 32.6h-330c-65.2 0-96.4-32.6-153-90.8l-171.4-178.4c-3.6-4.2-7.6-11.2-7.6-20.8 0-9.4 4-16.4 7.6-20.6l166.2-172.2c24.4-25.4 47.6-49 73.8-66.6 27.6-18.6 54.4-26.8 84.4-26.8h330c28.6 0 55 10.6 75.2 30.8s30.8 46.6 30.8 75.2v360.2z M632.8 512l127.2-126.8-29.2-29.2-127.2 127-126.4-126.4-29.2 29.2 126.6 126.2-126.6 126.4 29.2 29 126.4-126.2 127.2 126.8 29.2-29z' })
  );
};

IosBackspaceOutline.defaultProps = {
  // style
  style: {},
  color: '#000000',
  fontSize: '22px',

  // animation
  shake: false,
  beat: false,
  rotate: false
};

IosBackspaceOutline.propTypes = {
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

exports.default = IosBackspaceOutline;
module.exports = exports['default'];
//# sourceMappingURL=IosBackspaceOutline.js.map