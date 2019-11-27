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

var MdSad = function MdSad(props) {
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
    _react2.default.createElement('path', { d: 'M512 576c-90.886 0-167.35 52.152-204.41 128h408.82c-37.060-75.848-113.524-128-204.41-128z M512 96c-230.874 0-416 187.2-416 416s185.126 416 416 416 416-187.2 416-416c0-228.8-187.198-416-416-416zM512 844.8c-183.036 0-332.808-149.766-332.808-332.8 0-183.036 149.774-332.8 332.808-332.8s332.808 149.764 332.808 332.8c0 183.036-149.772 332.8-332.808 332.8z M657.6 470.4c35.366 0 62.402-27.036 62.402-62.4s-27.038-62.4-62.402-62.4c-35.364 0-62.4 27.036-62.4 62.4s27.036 62.4 62.4 62.4z M366.4 470.4c35.364 0 62.4-27.036 62.4-62.4s-27.038-62.4-62.4-62.4c-35.366 0-62.402 27.036-62.402 62.4s27.038 62.4 62.402 62.4z' })
  );
};

MdSad.defaultProps = {
  // style
  style: {},
  color: '#000000',
  fontSize: '22px',

  // animation
  shake: false,
  beat: false,
  rotate: false
};

MdSad.propTypes = {
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

exports.default = MdSad;
module.exports = exports['default'];
//# sourceMappingURL=MdSad.js.map