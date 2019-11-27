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

var IosContact = function IosContact(props) {
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
    _react2.default.createElement('path', { d: 'M512 96c-229.8 0-416 186.2-416 416s186.2 416 416 416c229.8 0 416-186.2 416-416s-186.2-416-416-416zM512 130.6c210.2 0 381.4 171 381.4 381.4 0 93-33.4 178.2-88.8 244.4-40-16.4-131.8-48.2-185.8-64.2-4.8-1.4-5.4-1.8-5.4-21.4 0-16.2 6.6-32.6 13.2-46.6 7.2-15 15.4-40.4 18.4-63.2 8.4-9.8 20-29 27.2-65.8 6.4-32.4 3.4-44.2-0.8-55.2-0.4-1.2-1-2.4-1.2-3.4-1.6-7.6 0.6-47 6.2-77.6 3.8-21-1-65.6-29.8-102.6-18.2-23.4-53.2-52-117-56h-35c-62.8 4-97.6 32.6-116 56-29 37-33.8 81.6-30 102.6 5.6 30.6 7.8 70 6.2 77.6-0.4 1.4-0.8 2.4-1.2 3.6-4.2 11-7.4 22.8-0.8 55.2 7.4 36.8 18.8 56 27.2 65.8 3 22.8 11.4 48 18.4 63.2 5.2 11 7.6 26 7.6 47.2 0 19.8-0.8 20-5.2 21.4-56.2 16.6-145.2 48.6-180.8 64-55.8-66.4-89.4-151.8-89.4-245 0-210.2 171.2-381.4 381.4-381.4z' })
  );
};

IosContact.defaultProps = {
  // style
  style: {},
  color: '#000000',
  fontSize: '22px',

  // animation
  shake: false,
  beat: false,
  rotate: false
};

IosContact.propTypes = {
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

exports.default = IosContact;
module.exports = exports['default'];
//# sourceMappingURL=IosContact.js.map