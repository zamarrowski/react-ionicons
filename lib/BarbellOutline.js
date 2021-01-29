'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _SvgContainer = require('./SvgContainer');

var _SvgContainer2 = _interopRequireDefault(_SvgContainer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var BarbellOutline = function BarbellOutline(props) {
  return _react2.default.createElement(
    _SvgContainer2.default,
    {
      height: props.height,
      width: props.width,
      color: props.color,
      onClick: props.onClick,
      rotate: props.rotate ? 1 : 0,
      shake: props.shake ? 1 : 0,
      beat: props.beat ? 1 : 0
    },
    _react2.default.createElement('span', { dangerouslySetInnerHTML: { __html: '<svg xmlns="http://www.w3.org/2000/svg" class="ionicon" viewBox="0 0 512 512"><title>Barbell</title><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M48 256h416"/><rect x="384" y="128" width="32" height="256" rx="16" ry="16" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32"/><rect x="96" y="128" width="32" height="256" rx="16" ry="16" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32"/><rect x="32" y="192" width="16" height="128" rx="8" ry="8" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32"/><rect x="464" y="192" width="16" height="128" rx="8" ry="8" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32"/></svg>' } })
  );
};

BarbellOutline.defaultProps = {
  // style
  style: {},
  color: '#000000',
  height: '22px',
  width: '22px',
  cssClasses: '',

  // animation
  shake: false,
  beat: false,
  rotate: false
};

BarbellOutline.propTypes = {
  // style
  style: _propTypes2.default.object,
  color: _propTypes2.default.string,
  height: _propTypes2.default.string,
  width: _propTypes2.default.string,
  cssClasses: _propTypes2.default.string,

  // animation
  shake: _propTypes2.default.bool,
  beat: _propTypes2.default.bool,
  rotate: _propTypes2.default.bool,

  // functions
  onClick: _propTypes2.default.func
};

exports.default = BarbellOutline;
module.exports = exports['default'];
//# sourceMappingURL=BarbellOutline.js.map