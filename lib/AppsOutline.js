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

var AppsOutline = function AppsOutline(props) {
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
    _react2.default.createElement('span', { dangerouslySetInnerHTML: { __html: '<svg xmlns="http://www.w3.org/2000/svg" class="ionicon" viewBox="0 0 512 512"><title>Apps</title><rect x="64" y="64" width="80" height="80" rx="40" ry="40" fill="none" stroke="currentColor" stroke-miterlimit="10" stroke-width="32"/><rect x="216" y="64" width="80" height="80" rx="40" ry="40" fill="none" stroke="currentColor" stroke-miterlimit="10" stroke-width="32"/><rect x="368" y="64" width="80" height="80" rx="40" ry="40" fill="none" stroke="currentColor" stroke-miterlimit="10" stroke-width="32"/><rect x="64" y="216" width="80" height="80" rx="40" ry="40" fill="none" stroke="currentColor" stroke-miterlimit="10" stroke-width="32"/><rect x="216" y="216" width="80" height="80" rx="40" ry="40" fill="none" stroke="currentColor" stroke-miterlimit="10" stroke-width="32"/><rect x="368" y="216" width="80" height="80" rx="40" ry="40" fill="none" stroke="currentColor" stroke-miterlimit="10" stroke-width="32"/><rect x="64" y="368" width="80" height="80" rx="40" ry="40" fill="none" stroke="currentColor" stroke-miterlimit="10" stroke-width="32"/><rect x="216" y="368" width="80" height="80" rx="40" ry="40" fill="none" stroke="currentColor" stroke-miterlimit="10" stroke-width="32"/><rect x="368" y="368" width="80" height="80" rx="40" ry="40" fill="none" stroke="currentColor" stroke-miterlimit="10" stroke-width="32"/></svg>' } })
  );
};

AppsOutline.defaultProps = {
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

AppsOutline.propTypes = {
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

exports.default = AppsOutline;
module.exports = exports['default'];
//# sourceMappingURL=AppsOutline.js.map