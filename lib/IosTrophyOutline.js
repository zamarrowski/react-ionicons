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

var IosTrophyOutline = function IosTrophyOutline(props) {
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
    _react2.default.createElement('path', { d: 'M768 192c0-38.6 0-64 0-64h-512c0 0 0 25.4 0 64h-160v16c0 164 61 264.4 164 271.6 25.8 98.4 167.8 151.6 236 159.4v225h-176v32h384v-32h-176v-225c68.2-7.8 210.2-61 236-159.4 103-7.2 164-107.4 164-271.6v-16h-160zM161.4 376.6c-14.2-27.4-31.2-75.6-33.2-152.6h127.8c0 65.8 0 153.6 0 222.8-40-5.4-73-28.8-94.6-70.2zM736 448c0 54.6-47.8 93.4-87.8 116.2-53 30.2-111.4 43.8-136.2 43.8s-83.2-13.6-136.2-43.8c-40-23-87.8-61.6-87.8-116.2v-288h448v288zM862.6 376.6c-21.6 41.4-54.6 64.8-94.6 70.2 0-69.2 0-157 0-222.8h127.8c-2 77-19 125.2-33.2 152.6z' })
  );
};

IosTrophyOutline.defaultProps = {
  // style
  style: {},
  color: '#000000',
  fontSize: '22px',

  // animation
  shake: false,
  beat: false,
  rotate: false
};

IosTrophyOutline.propTypes = {
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

exports.default = IosTrophyOutline;
module.exports = exports['default'];
//# sourceMappingURL=IosTrophyOutline.js.map