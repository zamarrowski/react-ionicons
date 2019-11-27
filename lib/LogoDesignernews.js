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

var LogoDesignernews = function LogoDesignernews(props) {
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
    _react2.default.createElement('path', { d: 'M580.8 290l-126.8-98 127.2 204.4z M658 192v326h-72.8l-126.4-197.2 3.4 197.2h-80.2v-214l-74.6-58.6c2 2.4 4 4.8 5.8 7.4 20 27.8 30 61 30 101 0 98.4-61.2 164.2-153.8 164.2h-125.4v0.8l399.2 313.2h496.8v-403.8l-302-236.2z M259.8 356.2c0-58-28.4-90.2-79.4-90.2h-38.4v178h38c52 0 79.8-30.8 79.8-87.8z' })
  );
};

LogoDesignernews.defaultProps = {
  // style
  style: {},
  color: '#000000',
  fontSize: '22px',

  // animation
  shake: false,
  beat: false,
  rotate: false
};

LogoDesignernews.propTypes = {
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

exports.default = LogoDesignernews;
module.exports = exports['default'];
//# sourceMappingURL=LogoDesignernews.js.map