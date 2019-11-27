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

var LogoFacebook = function LogoFacebook(props) {
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
    _react2.default.createElement('path', { d: 'M853.6 128h-683.2c-23.4 0-42.4 19-42.4 42.4v683.2c0 23.4 19 42.4 42.4 42.4h341.6v-304h-91.8v-112h91.8v-82.8c0-99.2 68.8-153.2 157.4-153.2 42.4 0 88 3.2 98.6 4.6v103.6h-70.6c-48.2 0-57.4 22.8-57.4 56.4v71.4h114.8l-15 112h-99.8v304h213.6c23.4 0 42.4-19 42.4-42.4v-683.2c0-23.4-19-42.4-42.4-42.4z' })
  );
};

LogoFacebook.defaultProps = {
  // style
  style: {},
  color: '#000000',
  fontSize: '22px',

  // animation
  shake: false,
  beat: false,
  rotate: false
};

LogoFacebook.propTypes = {
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

exports.default = LogoFacebook;
module.exports = exports['default'];
//# sourceMappingURL=LogoFacebook.js.map