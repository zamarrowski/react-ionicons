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

var MdLink = function MdLink(props) {
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
    _react2.default.createElement('path', { d: 'M149.2 512c0-76.6 62.2-138.8 138.8-138.8h176v-85.2h-176c-123.6 0-224 100.4-224 224s100.4 224 224 224h176v-85.2h-176c-76.6 0-138.8-62.2-138.8-138.8zM320 556h384v-88h-384v88zM736 288h-176v85.2h176c76.6 0 138.8 62.2 138.8 138.8s-62.2 138.8-138.8 138.8h-176v85.2h176c123.6 0 224-100.4 224-224s-100.4-224-224-224z' })
  );
};

MdLink.defaultProps = {
  // style
  style: {},
  color: '#000000',
  fontSize: '22px',

  // animation
  shake: false,
  beat: false,
  rotate: false
};

MdLink.propTypes = {
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

exports.default = MdLink;
module.exports = exports['default'];
//# sourceMappingURL=MdLink.js.map