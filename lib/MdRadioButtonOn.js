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

var MdRadioButtonOn = function MdRadioButtonOn(props) {
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
    _react2.default.createElement('path', { d: 'M512 304c-114.4 0-208 93.6-208 208s93.6 208 208 208 208-93.6 208-208-93.6-208-208-208zM512 96c-228.798 0-416 187.202-416 416s187.202 416 416 416 416-187.202 416-416-187.202-416-416-416zM512 844.8c-183.036 0-332.8-149.766-332.8-332.8s149.764-332.8 332.8-332.8 332.8 149.764 332.8 332.8-149.764 332.8-332.8 332.8z' })
  );
};

MdRadioButtonOn.defaultProps = {
  // style
  style: {},
  color: '#000000',
  fontSize: '22px',

  // animation
  shake: false,
  beat: false,
  rotate: false
};

MdRadioButtonOn.propTypes = {
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

exports.default = MdRadioButtonOn;
module.exports = exports['default'];
//# sourceMappingURL=MdRadioButtonOn.js.map