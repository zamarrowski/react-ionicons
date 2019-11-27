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

var MdBookmarks = function MdBookmarks(props) {
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
    _react2.default.createElement('path', { d: 'M810.4 128h-42c30 11.4 45.6 41.2 45.6 85.4v597.4c0 44.2-14 74.6-45.6 85.4h42c47.4 0 85.6-38.4 85.6-85.4v-597.4c0-47-38.2-85.4-85.6-85.4z M691 128.4c-2.8-0.2-5.6-0.4-8.4-0.4h-469.2c-47 0-85.4 38.4-85.4 85.4v597.4c0 47 38.4 85.4 85.4 85.4h469.4c2.8 0 5.6-0.2 8.4-0.4 43-4.2 77-40.8 77-85v-597.4c-0.2-44.2-34.2-80.8-77.2-85zM416 512l-112-64-112 64v-320h224v320z' })
  );
};

MdBookmarks.defaultProps = {
  // style
  style: {},
  color: '#000000',
  fontSize: '22px',

  // animation
  shake: false,
  beat: false,
  rotate: false
};

MdBookmarks.propTypes = {
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

exports.default = MdBookmarks;
module.exports = exports['default'];
//# sourceMappingURL=MdBookmarks.js.map