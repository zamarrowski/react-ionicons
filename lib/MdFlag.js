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

var MdFlag = function MdFlag(props) {
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
    _react2.default.createElement('path', { d: 'M792 166.4c-27.6 3.4-62.2 8.4-99.2 8.4-57.6 0-110-13.6-163-24.4-53.8-11-109.4-22.4-168.2-22.4-117.2 0-157 24.2-161.2 26.8l-8.4 5.8v735.4h96v-356.4c19.4-2.4 43.8-4 73.8-4 54.6 0 105.6 20 159.6 31 55.2 11.2 112 23 173.8 23 36.8 0 69.2-4.8 96.8-8 15-1.8 28-3.4 40-5.4v-415.8c-10 2-25 4.2-40 6z' })
  );
};

MdFlag.defaultProps = {
  // style
  style: {},
  color: '#000000',
  fontSize: '22px',

  // animation
  shake: false,
  beat: false,
  rotate: false
};

MdFlag.propTypes = {
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

exports.default = MdFlag;
module.exports = exports['default'];
//# sourceMappingURL=MdFlag.js.map