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

var MdBrush = function MdBrush(props) {
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
    _react2.default.createElement('path', { d: 'M299.8 604.4c-78.2 0-141.4 62-141.4 138.6 0 60.6-54.6 92.4-94.4 92.4 43.4 56.6 117.4 92.6 188.6 92.6 104.2 0 188.6-82.8 188.6-184.8 0-76.8-63.2-138.8-141.4-138.8zM946.2 171.4l-63.2-62c-18.4-18-48-18-66.4 0l-422.6 414.2 129.6 127 422.4-414c18.6-18 18.6-47.2 0.2-65.2z' })
  );
};

MdBrush.defaultProps = {
  // style
  style: {},
  color: '#000000',
  fontSize: '22px',

  // animation
  shake: false,
  beat: false,
  rotate: false
};

MdBrush.propTypes = {
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

exports.default = MdBrush;
module.exports = exports['default'];
//# sourceMappingURL=MdBrush.js.map