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

var MdSearch = function MdSearch(props) {
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
    _react2.default.createElement('path', { d: 'M675.018 610.744h-35.002l-13.142-10.972c41.582-50.464 67.844-114.108 67.844-186.514-0.002-157.994-126.926-285.258-284.448-285.258-155.366 0-282.27 127.264-282.27 285.258s126.904 285.256 284.45 285.256c70.022 0 135.662-26.334 185.982-68.016l13.122 10.974v35.102l218.806 219.426 65.64-65.828-220.982-219.428zM412.45 610.744c-109.404 0-196.926-87.774-196.926-197.486 0-109.716 87.522-197.484 196.926-197.484 109.4 0 196.924 87.768 196.924 197.484 0 109.712-87.524 197.486-196.924 197.486z' })
  );
};

MdSearch.defaultProps = {
  // style
  style: {},
  color: '#000000',
  fontSize: '22px',

  // animation
  shake: false,
  beat: false,
  rotate: false
};

MdSearch.propTypes = {
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

exports.default = MdSearch;
module.exports = exports['default'];
//# sourceMappingURL=MdSearch.js.map