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

var MdHelpBuoy = function MdHelpBuoy(props) {
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
    _react2.default.createElement('path', { d: 'M512 96c-229.8 0-416 186.2-416 416s186.2 416 416 416 416-186.2 416-416-186.2-416-416-416zM634 808l-24.4-79.2c26-11.6 49.8-28 70.6-48.8s37.2-44.6 48.8-70.6l79 24.2c-15.8 38.6-39.4 74-69.8 104.4-30.2 30.6-65.6 54.2-104.2 70zM390 216l24.4 79.2c-26 11.6-49.8 28-70.6 48.8s-37.2 44.6-48.8 70.6l-79-24.2c15.8-38.6 39.4-74 69.8-104.4 30.2-30.6 65.6-54.2 104.2-70zM512 384c70.6 0 128 57.4 128 128s-57.4 128-128 128-128-57.4-128-128c0-70.6 57.4-128 128-128zM738.2 285.8c30.4 30.4 53.8 65.8 69.8 104.2l-79 24.4c-11.8-26-28-49.8-48.8-70.6s-44.6-37.2-70.6-48.8l24.2-79c38.6 15.8 74 39.4 104.4 69.8zM285.8 738.2c-30.4-30.2-54-65.6-69.8-104.2l79-24.4c11.8 26 28 49.8 48.8 70.6s44.6 37.2 70.6 48.8l-24.2 79c-38.6-15.8-74-39.4-104.4-69.8z' })
  );
};

MdHelpBuoy.defaultProps = {
  // style
  style: {},
  color: '#000000',
  fontSize: '22px',

  // animation
  shake: false,
  beat: false,
  rotate: false
};

MdHelpBuoy.propTypes = {
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

exports.default = MdHelpBuoy;
module.exports = exports['default'];
//# sourceMappingURL=MdHelpBuoy.js.map