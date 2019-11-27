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

var IosBeakerOutline = function IosBeakerOutline(props) {
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
    _react2.default.createElement('path', { d: 'M890.4 96h-633.6c-108.6 0-128.8 55.8-128.8 80.4 60.6 8.4 64 8.4 64 72.4 0 32 0 551 0 551 0 70.6 57.6 128 128.4 128h415.6c70.8 0 126-58.4 126-129v-620.4c4-35 25-63.2 27.2-66.6 2.4-3.8 6.8-8.8 6.8-11 0-2.4-0.6-4.8-5.6-4.8zM830 178.6v620.4c0 26-9.4 48.8-27.4 67.4s-41 29.6-66.4 29.6h-416c-52.8 0-96.2-43.8-96.2-97v-550c0-33.4 0.6-61.6-16.6-80.8-8.6-9.6-21.2-12.6-34.6-16.4 11.4-10 35.4-24 84.2-24h587.2c0 0.2-14.2 12.8-14.2 50.8z M766 352v416c0 20.4-3.6 36-11 43.8-11.4 11.6-27.6 20.4-40.2 20.4h-374c-17.6 0-30.8-5.4-39-15.8-8.8-10.8-13.8-28.6-13.8-50.2v-414.2h478zM798 320h-542v446c0 56.6 27.4 98 84.8 98h374c22.8 0 46.8-13.4 63-30 16.2-16.8 20.2-42.6 20.2-66v-448z' })
  );
};

IosBeakerOutline.defaultProps = {
  // style
  style: {},
  color: '#000000',
  fontSize: '22px',

  // animation
  shake: false,
  beat: false,
  rotate: false
};

IosBeakerOutline.propTypes = {
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

exports.default = IosBeakerOutline;
module.exports = exports['default'];
//# sourceMappingURL=IosBeakerOutline.js.map