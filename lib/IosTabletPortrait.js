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

var IosTabletPortrait = function IosTabletPortrait(props) {
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
    _react2.default.createElement('path', { d: 'M804 64h-584c-15.6 0-28 12.2-28 28v840c0 15.8 12.4 28 28 28h584c15.6 0 28-12.2 28-28v-840c0-15.8-12.6-28-28-28zM511.2 97.4c7.8 0 14 6.2 14 14s-6.2 14-14 14c-7.8 0-14-6.2-14-14-0-7.6 6.4-14 14-14zM512 940c-15.4 0-28-13-28-28.2 0-15 12.4-28 28-28 15.4 0 28.2 12.8 28.2 28-0.2 15.2-12.8 28.2-28.2 28.2zM800 864h-576v-704h576v704z' })
  );
};

IosTabletPortrait.defaultProps = {
  // style
  style: {},
  color: '#000000',
  fontSize: '22px',

  // animation
  shake: false,
  beat: false,
  rotate: false
};

IosTabletPortrait.propTypes = {
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

exports.default = IosTabletPortrait;
module.exports = exports['default'];
//# sourceMappingURL=IosTabletPortrait.js.map