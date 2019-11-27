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

var IosPrintOutline = function IosPrintOutline(props) {
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
    _react2.default.createElement('path', { d: 'M865 224h-65v-96h-576v96h-63c-35.2 0-65 27.6-65 62.6v316.8c0 35 29.8 64.6 65 64.6h95v228h512v-228h97c35.2 0 63-29.6 63-64.6v-316.8c0-35-27.8-62.6-63-62.6zM256 160h512v64h-512v-64zM736 864h-448v-384h448v384zM896 603.4c0 17.4-13.4 32.6-31 32.6h-97v-188h-512v188h-95c-17.6 0-33-15.2-33-32.6v-316.8c0-17.4 15.4-30.6 33-30.6h704c17.6 0 31 13.2 31 30.6v316.8z' })
  );
};

IosPrintOutline.defaultProps = {
  // style
  style: {},
  color: '#000000',
  fontSize: '22px',

  // animation
  shake: false,
  beat: false,
  rotate: false
};

IosPrintOutline.propTypes = {
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

exports.default = IosPrintOutline;
module.exports = exports['default'];
//# sourceMappingURL=IosPrintOutline.js.map