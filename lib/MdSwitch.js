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

var MdSwitch = function MdSwitch(props) {
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
    _react2.default.createElement('path', { d: 'M336 432h189.8c29 29.6 69.4 48 114.2 48 88.4 0 160-71.6 160-160s-71.6-160-160-160c-44.8 0-85.2 18.4-114.2 48h-189.8c-61.6 0-112 50.4-112 112s50.4 112 112 112zM302.2 286.2c9.2-9.2 21.2-14.2 33.8-14.2h151.4c-4.8 15.2-7.4 31.2-7.4 48s2.6 32.8 7.4 48h-151.4c-12.6 0-24.8-5-33.8-14.2-9.2-9.2-14.2-21.2-14.2-33.8s5-24.8 14.2-33.8z M688 592h-189.8c-29-29.6-69.4-48-114.2-48-88.4 0-160 71.6-160 160s71.6 160 160 160c44.8 0 85.2-18.4 114.2-48h189.8c61.6 0 112-50.4 112-112s-50.4-112-112-112zM721.8 737.8c-9.2 9.2-21.2 14.2-33.8 14.2h-151.4c4.8-15.2 7.4-31.2 7.4-48s-2.6-32.8-7.4-48h151.4c12.6 0 24.8 5 33.8 14.2 9.2 9.2 14.2 21.2 14.2 33.8s-5 24.8-14.2 33.8z' })
  );
};

MdSwitch.defaultProps = {
  // style
  style: {},
  color: '#000000',
  fontSize: '22px',

  // animation
  shake: false,
  beat: false,
  rotate: false
};

MdSwitch.propTypes = {
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

exports.default = MdSwitch;
module.exports = exports['default'];
//# sourceMappingURL=MdSwitch.js.map