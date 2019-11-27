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

var MdJet = function MdJet(props) {
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
    _react2.default.createElement('path', { d: 'M960 64c0 0-46.8-1.4-118.6 54.2-33.4 25.8-351.6 255.4-351.6 255.4l-337.6-8.4-88.2 78.8 219.6 110.4-17.2 21.6-175.8 0.2-14.4 81 126.2 97.4-53.2 119.6 120-52.8 97.4 126.2 81-14.4 0.2-175.6 21.8-17 110.6 219.4 78.6-88.2-8.4-337.4c0 0 229.8-318 255.6-351.2 55.4-72.2 54-119.2 54-119.2z' })
  );
};

MdJet.defaultProps = {
  // style
  style: {},
  color: '#000000',
  fontSize: '22px',

  // animation
  shake: false,
  beat: false,
  rotate: false
};

MdJet.propTypes = {
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

exports.default = MdJet;
module.exports = exports['default'];
//# sourceMappingURL=MdJet.js.map