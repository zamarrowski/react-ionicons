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

var IosOutletOutline = function IosOutletOutline(props) {
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
    _react2.default.createElement('path', { d: 'M742.8 128h-461.6c-130.2 78-217.2 221-217.2 384s87 304 217.2 384h461.8c130-80 217-221 217-384s-87-306-217.2-384zM733.6 864h-443.2c-57.4-38-105.2-87.4-139-145.4-36.2-62.6-55.4-134.6-55.4-207.4 0-73 19.2-144.6 55.4-207.4 34-58.6 81.8-109.8 138.8-143.8h443.6c61.6 40 104.8 85 138.6 143.6 36.4 63 55.4 134.6 55.4 207.6 0 72.8-19.2 144.8-55.4 207.4-33.6 58.2-81.4 107.4-138.8 145.4z M640 320h64v192h-64v-192z M320 288h64v256h-64v-256z M512 640v0c-35.2 0-64 28.8-64 64v96h128v-96c0-35.2-28.8-64-64-64z' })
  );
};

IosOutletOutline.defaultProps = {
  // style
  style: {},
  color: '#000000',
  fontSize: '22px',

  // animation
  shake: false,
  beat: false,
  rotate: false
};

IosOutletOutline.propTypes = {
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

exports.default = IosOutletOutline;
module.exports = exports['default'];
//# sourceMappingURL=IosOutletOutline.js.map