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

var IosOptions = function IosOptions(props) {
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
    _react2.default.createElement('path', { d: 'M64 752h566.7c12.372-28.224 40.562-48 73.3-48s60.93 19.776 73.3 48h182.7v64h-182.7c-12.372 28.224-40.562 48-73.3 48s-60.93-19.776-73.3-48h-566.7z M64 480h182.7c12.372-28.224 40.562-48 73.3-48s60.93 19.776 73.3 48h566.7v64h-566.7c-12.372 28.224-40.562 48-73.3 48s-60.93-19.776-73.3-48h-182.7z M64 208h566.7c12.372-28.224 40.562-48 73.3-48s60.93 19.776 73.3 48h182.7v64h-182.7c-12.372 28.224-40.562 48-73.3 48s-60.93-19.776-73.3-48h-566.7z' })
  );
};

IosOptions.defaultProps = {
  // style
  style: {},
  color: '#000000',
  fontSize: '22px',

  // animation
  shake: false,
  beat: false,
  rotate: false
};

IosOptions.propTypes = {
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

exports.default = IosOptions;
module.exports = exports['default'];
//# sourceMappingURL=IosOptions.js.map