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

var IosPizza = function IosPizza(props) {
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
    _react2.default.createElement('path', { d: 'M836.6 183c-60.2-27-152-55-323.2-55-170.8 0-260 24.6-323 54.8-55 26.2-38.2 48-26.2 73.2 8 17.2 16.4 23.6 29 23.6 1 0 2 0 2.8-0.2l317.4 616.6 316.6-615c0.6 0 1.2 0 1.8 0 13 0 22-6.8 31-25.2 12.2-24.8 19.6-52.4-26.2-72.8zM266.6 347.8c18-7.8 38-8.8 56.8-2.4 20 6.8 36.4 21.2 45.8 40.2 9.4 19.2 10.8 40.8 4.2 61-6 18-17.8 33-33.8 42.6-26.8-51.6-52.2-101-73-141.4zM593.6 660.8c-43.8 0-79.4-35.8-79.4-80s35.6-80 79.4-80c28 0 53.4 14.6 67.8 38.4l-62.4 121.4c-1.8 0.2-3.6 0.2-5.4 0.2zM548 224.6c63.8 2 113.6 9.6 152.6 18.6-4 18.4-14.2 34.6-29.4 46-16.6 12.4-36.8 17.6-57.2 14.6s-38.4-13.8-50.6-30.6c-10.8-14.2-16-31.2-15.4-48.6zM834.2 241.8c-1.8 3.8-3.2 6-4.2 7.2-6.6-0.8-19.6-5.4-33.4-10.2-49.2-17.6-131.4-46.8-283.2-46.8-152.6 0-235.6 28.6-285.2 45.6-13.2 4.6-25.8 8.8-32.6 9.8-0.6-1.2-1.6-2.8-2.8-5.2s-2.2-4.8-3.4-7c-1.8-3.6-4.2-8.4-5.2-11.6 2.2-2 7.4-6.4 19.6-12.2 50.4-24 131.2-51.6 309.4-51.6 173.4 0 260.2 29.8 310.4 52.2 14.4 6.4 16.4 11.2 16.4 11.2 0.2 0.6 1.2 4.2-5.8 18.6z' })
  );
};

IosPizza.defaultProps = {
  // style
  style: {},
  color: '#000000',
  fontSize: '22px',

  // animation
  shake: false,
  beat: false,
  rotate: false
};

IosPizza.propTypes = {
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

exports.default = IosPizza;
module.exports = exports['default'];
//# sourceMappingURL=IosPizza.js.map