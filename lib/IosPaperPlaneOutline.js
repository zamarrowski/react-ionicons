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

var IosPaperPlaneOutline = function IosPaperPlaneOutline(props) {
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
    _react2.default.createElement('path', { d: 'M96 541.8l239.8 103.2 59.6 275 115-161.8 233.6 169.8 184-832-832 445.8zM829.8 184.8l-486.2 428.6-174-74.8 660.2-353.8zM367 638l-0.4-2.2 336.2-304.4-300.6 349.6 0.8 0.6h-1l-3.2 103.2-31.8-146.8zM429.8 816.4l3.6-113.4 51.4 36.4-0.2 0.2-54.8 76.8zM724.2 869.6l-274.2-194.6 429.8-509-155.6 703.6z' })
  );
};

IosPaperPlaneOutline.defaultProps = {
  // style
  style: {},
  color: '#000000',
  fontSize: '22px',

  // animation
  shake: false,
  beat: false,
  rotate: false
};

IosPaperPlaneOutline.propTypes = {
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

exports.default = IosPaperPlaneOutline;
module.exports = exports['default'];
//# sourceMappingURL=IosPaperPlaneOutline.js.map