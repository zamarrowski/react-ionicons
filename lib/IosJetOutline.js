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

var IosJetOutline = function IosJetOutline(props) {
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
    _react2.default.createElement('path', { d: 'M928 96c0 0-39.6 2.8-106.2 54.4-31 24-324.4 241.2-324.4 241.2l-319.4-15.8-82 73 204 102.4-16 20.2-163.2 8.2-13.4 67.2 121.2 94.4-53.4 107.2 107.4-53 94.6 121.2 67.2-13.4 8.2-163.2 20.2-15.8 102.4 203.8 73-81.8-15.8-319.4c0 0 217.2-293.4 241.2-324 51.8-67.2 54.4-106.8 54.4-106.8zM848.6 183.2l-248.4 333.8 15.6 317.6-33 37-81.4-161.8-17.6-34.8-62.6 49-7.8 152.8-23.4 4.6-98.4-126.2-45.6 22.4 22.8-45.6-126.2-98.4 4.6-23.4 152.8-7.8 49.6-62.2-35.2-17.6-161.8-81.4 37-33 317.8 15.6 334-248.2c9-7 17.4-13 25.2-18-5 7.8-11 16.4-18 25.6z' })
  );
};

IosJetOutline.defaultProps = {
  // style
  style: {},
  color: '#000000',
  fontSize: '22px',

  // animation
  shake: false,
  beat: false,
  rotate: false
};

IosJetOutline.propTypes = {
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

exports.default = IosJetOutline;
module.exports = exports['default'];
//# sourceMappingURL=IosJetOutline.js.map