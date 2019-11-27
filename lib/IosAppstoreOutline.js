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

var IosAppstoreOutline = function IosAppstoreOutline(props) {
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
    _react2.default.createElement('path', { d: 'M512 96c-229.8 0-416 186.2-416 416s186.2 416 416 416c229.8 0 416-186.2 416-416s-186.2-416-416-416zM512 893.4c-210.2 0-381.4-171-381.4-381.4 0-210.2 171-381.4 381.4-381.4 210.2 0 381.4 171 381.4 381.4 0 210.2-171.2 381.4-381.4 381.4z M278.6 704l68.4-57.6-49.4-32.4z M684.4 596c-13.6 6.4-30.4 28-7.8 57.2 18.2 23.4 36 17.4 53 50.8 9.6-8.2 18.8-43.4 14.6-71.4-4.8-30.6-24.6-53-59.8-36.6z M503.2 379.2c3.2-5.4 1.2-12.6-4.2-15.8l-30.2-17.2c-5.6-3.2-12.6-1.2-15.8 4.2l-111.8 193.6-33.8 58.4 49.8 30 87.8-152.6 58.2-100.6z M461.2 480l-37 64h178.4l-36.2-64z M702 544h66v-64h-102z M362.2 480h-106.2v64h69.2z M649.2 480l-120-211.6c-3.2-5.6-10.4-7.4-15.8-4.2l-30.2 17.2c-5.6 3.2-7.4 10.2-4.2 15.8l140 247.4 1-0.6 48.8-29.6-19.6-34.4z M686.4 544l-9.8-17.4-49.6 30 26 46 49.8-30.2z' })
  );
};

IosAppstoreOutline.defaultProps = {
  // style
  style: {},
  color: '#000000',
  fontSize: '22px',

  // animation
  shake: false,
  beat: false,
  rotate: false
};

IosAppstoreOutline.propTypes = {
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

exports.default = IosAppstoreOutline;
module.exports = exports['default'];
//# sourceMappingURL=IosAppstoreOutline.js.map