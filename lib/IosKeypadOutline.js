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

var IosKeypadOutline = function IosKeypadOutline(props) {
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
    _react2.default.createElement('path', { d: 'M789.2 682.4c-59 0-106.8 47.8-106.8 106.8s47.8 106.8 106.8 106.8c59 0 106.8-47.8 106.8-106.8s-47.8-106.8-106.8-106.8zM789.2 864c-41.2 0-74.8-33.6-74.8-74.8s33.6-74.8 74.8-74.8 74.8 33.6 74.8 74.8c0 41.2-33.6 74.8-74.8 74.8z M512 682.4c-59 0-106.8 47.8-106.8 106.8s47.8 106.8 106.8 106.8c59 0 106.8-47.8 106.8-106.8s-47.8-106.8-106.8-106.8zM512 864c-41.2 0-74.8-33.6-74.8-74.8s33.6-74.8 74.8-74.8 74.8 33.6 74.8 74.8c0 41.2-33.6 74.8-74.8 74.8z M234.8 682.4c-59 0-106.8 47.8-106.8 106.8s47.8 106.8 106.8 106.8c59 0 106.8-47.8 106.8-106.8s-47.8-106.8-106.8-106.8zM234.8 864c-41.2 0-74.8-33.6-74.8-74.8s33.6-74.8 74.8-74.8 74.8 33.6 74.8 74.8c0 41.2-33.4 74.8-74.8 74.8z M789.2 405.2c-59 0-106.8 47.8-106.8 106.8s47.8 106.8 106.8 106.8c59 0 106.8-47.8 106.8-106.8s-47.8-106.8-106.8-106.8zM789.2 586.8c-41.2 0-74.8-33.6-74.8-74.8s33.6-74.8 74.8-74.8 74.8 33.6 74.8 74.8c0 41.2-33.6 74.8-74.8 74.8z M512 405.2c-59 0-106.8 47.8-106.8 106.8s47.8 106.8 106.8 106.8c59 0 106.8-47.8 106.8-106.8s-47.8-106.8-106.8-106.8zM512 586.8c-41.2 0-74.8-33.6-74.8-74.8s33.6-74.8 74.8-74.8 74.8 33.6 74.8 74.8c0 41.2-33.6 74.8-74.8 74.8z M234.8 405.2c-59 0-106.8 47.8-106.8 106.8s47.8 106.8 106.8 106.8c59 0 106.8-47.8 106.8-106.8s-47.8-106.8-106.8-106.8zM234.8 586.8c-41.2 0-74.8-33.6-74.8-74.8s33.6-74.8 74.8-74.8 74.8 33.6 74.8 74.8c0 41.2-33.4 74.8-74.8 74.8z M789.2 341.6c59 0 106.8-47.8 106.8-106.8s-47.8-106.8-106.8-106.8c-59 0-106.8 47.8-106.8 106.8s47.8 106.8 106.8 106.8zM789.2 160c41.2 0 74.8 33.6 74.8 74.8s-33.6 74.8-74.8 74.8-74.8-33.6-74.8-74.8c-0-41.2 33.4-74.8 74.8-74.8z M512 128c-59 0-106.8 47.8-106.8 106.8s47.8 106.8 106.8 106.8c59 0 106.8-47.8 106.8-106.8s-47.8-106.8-106.8-106.8zM512 309.6c-41.2 0-74.8-33.6-74.8-74.8s33.6-74.8 74.8-74.8 74.8 33.6 74.8 74.8c0 41.2-33.6 74.8-74.8 74.8z M234.8 128c-59 0-106.8 47.8-106.8 106.8s47.8 106.8 106.8 106.8c59 0 106.8-47.8 106.8-106.8s-47.8-106.8-106.8-106.8zM234.8 309.6c-41.2 0-74.8-33.6-74.8-74.8s33.6-74.8 74.8-74.8 74.8 33.6 74.8 74.8c0 41.2-33.4 74.8-74.8 74.8z' })
  );
};

IosKeypadOutline.defaultProps = {
  // style
  style: {},
  color: '#000000',
  fontSize: '22px',

  // animation
  shake: false,
  beat: false,
  rotate: false
};

IosKeypadOutline.propTypes = {
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

exports.default = IosKeypadOutline;
module.exports = exports['default'];
//# sourceMappingURL=IosKeypadOutline.js.map