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

var IosPhoneLandscape = function IosPhoneLandscape(props) {
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
    _react2.default.createElement('path', { d: 'M64 352.6v317c0 36.6 29.2 66.2 65.8 66.2h762c36.8 0 68.2-29.6 68.2-66.2v-317c0-36.6-31.4-64.6-68.2-64.6h-762c-36.6 0-65.8 28-65.8 64.6zM110 542v-60c0-4.4 3.6-8 8-8s8 3.6 8 8v60c0 4.4-3.6 8-8 8s-8-3.6-8-8zM938 511c0 19.2-15.6 34.8-34.8 34.8s-34.8-15.6-34.8-34.8c0-19.2 15.6-34.8 34.8-34.8s34.8 15.6 34.8 34.8zM848 320v384h-682v-384h682z M883.2 511c0 11 9 20 19.8 20 11 0 20-9 20-20s-9-20-20-20c-10.8 0.2-19.8 9-19.8 20z' })
  );
};

IosPhoneLandscape.defaultProps = {
  // style
  style: {},
  color: '#000000',
  fontSize: '22px',

  // animation
  shake: false,
  beat: false,
  rotate: false
};

IosPhoneLandscape.propTypes = {
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

exports.default = IosPhoneLandscape;
module.exports = exports['default'];
//# sourceMappingURL=IosPhoneLandscape.js.map