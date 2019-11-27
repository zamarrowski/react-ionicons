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

var MdColorFilter = function MdColorFilter(props) {
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
    _react2.default.createElement('path', { d: 'M883.6 240.2l-99.8-99.8c-16.6-16.6-43.6-16.6-60.2 0l-133.2 133.2-82.2-81.6-60.2 60.2 60.6 60.6-380.6 380.6v202.6h202.6l380.6-380.6 60.6 60.6 60.2-60.2-82-82 133.2-133.2c17-16.8 17-43.6 0.4-60.4zM295.2 810.8l-82-82 343.8-343.8 82 82-343.8 343.8z' })
  );
};

MdColorFilter.defaultProps = {
  // style
  style: {},
  color: '#000000',
  fontSize: '22px',

  // animation
  shake: false,
  beat: false,
  rotate: false
};

MdColorFilter.propTypes = {
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

exports.default = MdColorFilter;
module.exports = exports['default'];
//# sourceMappingURL=MdColorFilter.js.map