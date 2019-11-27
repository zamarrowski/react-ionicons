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

var MdBasket = function MdBasket(props) {
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
    _react2.default.createElement('path', { d: 'M724.2 410.4l-178.4-265.4c-7.8-11.4-20.8-17-33.8-17s-26 5.6-33.8 17.4l-178.4 265h-195c-22.4 0-40.8 18.2-40.8 40.4 0 3.6 0.4 7.2 1.6 11l103.4 375c9.4 34 40.8 59 78.2 59h529.4c37.4 0 68.8-25 78.6-59l103.4-375 1.2-11c0-22.2-18.4-40.4-40.8-40.4h-194.8zM389.8 410.4l122.2-178 122.2 178h-244.4zM512 734.2c-44.8 0-81.4-36.4-81.4-81s36.6-81 81.4-81 81.4 36.4 81.4 81c0 44.6-36.6 81-81.4 81z' })
  );
};

MdBasket.defaultProps = {
  // style
  style: {},
  color: '#000000',
  fontSize: '22px',

  // animation
  shake: false,
  beat: false,
  rotate: false
};

MdBasket.propTypes = {
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

exports.default = MdBasket;
module.exports = exports['default'];
//# sourceMappingURL=MdBasket.js.map