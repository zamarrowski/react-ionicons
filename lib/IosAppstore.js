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

var IosAppstore = function IosAppstore(props) {
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
    _react2.default.createElement('path', { d: 'M512 96c-229.8 0-416 186.2-416 416s186.2 416 416 416c229.8 0 416-186.2 416-416s-186.2-416-416-416zM256 480h106.2l-37 64h-69.2v-64zM278.6 704l19-90 49.6 32.4-68.6 57.6zM357.2 632.6l-49.8-30 33.8-58.4 37-64 74.8-129.6c3.2-5.6 10.4-7.4 15.8-4.2l30.2 17.2c5.6 3.2 7.4 10.2 4.2 15.8l-94.8 164.8-51.2 88.4zM424.2 544l36.8-64h105.4l36.2 64h-178.4zM619 544.6l-0.4-0.6-139.6-246.8c-3.2-5.4-1.2-12.6 4.2-15.8l30.2-17.2c5.6-3.2 12.6-1.2 15.8 4.2l120 211.6 19.6 34.4-49.8 30.2zM627 556.6l49.6-30 10 17.4 16.2 28.4-49.8 30-26-45.8zM729.4 704c-17-33.6-34.8-27.4-53-50.8-22.6-29.2-5.8-50.8 7.8-57.2 35.2-16.4 55 6 59.6 36.6 4.4 28-4.8 63.2-14.4 71.4zM768 544h-66l-36-64h102v64z' })
  );
};

IosAppstore.defaultProps = {
  // style
  style: {},
  color: '#000000',
  fontSize: '22px',

  // animation
  shake: false,
  beat: false,
  rotate: false
};

IosAppstore.propTypes = {
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

exports.default = IosAppstore;
module.exports = exports['default'];
//# sourceMappingURL=IosAppstore.js.map