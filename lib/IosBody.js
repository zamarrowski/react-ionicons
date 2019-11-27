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

var IosBody = function IosBody(props) {
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
    _react2.default.createElement('path', { d: 'M608 159.676c0 53.019-42.981 96-96 96s-96-42.981-96-96c0-53.019 42.981-96 96-96s96 42.981 96 96z M848 288h-672c-26.51 0-48 21.49-48 48s21.49 48 48 48h196.902c11.158 2 26.394 7.674 34.432 28.504 9.302 24.112 4.74 67.212-1.078 103.454l-7.55 42.79c-0.038 0.208-0.078 0.414-0.116 0.622-0.004 0.016-0.004 0.024-0.008 0.040l-60.75 344.536c-4.606 26.106 12.828 51 38.934 55.606 26.11 4.602 50.666-12.832 55.268-38.942l41.966-239.914v0.334c0 0 12.5-65.030 36.904-65.030h2.192c24.904 0 36.904 65.030 36.904 65.030v-0.166l41.966 239.826c4.602 26.11 29.326 43.498 55.436 38.896 26.106-4.606 43.456-29.524 38.85-55.628l-60.792-344.552c-0.004-0.016-0.026-0.040-0.030-0.054-0.038-0.208-0.088-0.434-0.126-0.644l-7.554-42.828c-5.818-36.242-10.382-79.262-1.082-103.376 8.040-20.828 23.272-26.504 34.43-28.504h196.902c26.51 0 48-21.49 48-48s-21.49-48-48-48z' })
  );
};

IosBody.defaultProps = {
  // style
  style: {},
  color: '#000000',
  fontSize: '22px',

  // animation
  shake: false,
  beat: false,
  rotate: false
};

IosBody.propTypes = {
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

exports.default = IosBody;
module.exports = exports['default'];
//# sourceMappingURL=IosBody.js.map