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

var IosMailOpenOutline = function IosMailOpenOutline(props) {
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
    _react2.default.createElement('path', { d: 'M512 128l-384 256v512h768v-512l-384-256zM864 864h-704v-427.2l229.8 174.2-135.8 154.4 4 4 157.4-138.8 96.6 73.4 96.2-73.4 157.6 139 4-4-136-154.6 230-175.6v428.6zM512 663.6l-306.6-235.6h178.6v-6.4l-219.8-25.4-0.6-0.4 348.4-227.6 349.2 228-221.2 25.4v6.4h180.8l-308.8 235.6z' })
  );
};

IosMailOpenOutline.defaultProps = {
  // style
  style: {},
  color: '#000000',
  fontSize: '22px',

  // animation
  shake: false,
  beat: false,
  rotate: false
};

IosMailOpenOutline.propTypes = {
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

exports.default = IosMailOpenOutline;
module.exports = exports['default'];
//# sourceMappingURL=IosMailOpenOutline.js.map