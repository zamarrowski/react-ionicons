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

var Thunderstorm = function Thunderstorm(props) {
  return _react2.default.createElement(
    _SvgContainer2.default,
    {
      height: props.height,
      width: props.width,
      color: props.color,
      onClick: props.onClick,
      rotate: props.rotate ? 1 : 0,
      shake: props.shake ? 1 : 0,
      beat: props.beat ? 1 : 0,
      className: props.className
    },
    _react2.default.createElement(
      'svg',
      { style: props.style, className: props.cssClasses, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 512 512' },
      props.title ? _react2.default.createElement(
        'title',
        null,
        props.title
      ) : '',
      _react2.default.createElement('path', { d: 'M96 416a16 16 0 01-14.3-23.16l24-48a16 16 0 0128.62 14.32l-24 48A16 16 0 0196 416zM120 480a16 16 0 01-14.3-23.16l16-32a16 16 0 0128.62 14.32l-16 32A16 16 0 01120 480zM376 416a16 16 0 01-14.3-23.16l24-48a16 16 0 0128.62 14.32l-24 48A16 16 0 01376 416zM400 480a16 16 0 01-14.3-23.16l16-32a16 16 0 0128.62 14.32l-16 32A16 16 0 01400 480z' }),
      _react2.default.createElement('path', { d: 'M405.84 136.9a151.25 151.25 0 00-47.6-81.9 153 153 0 00-241.81 51.86C60.5 110.16 16 156.65 16 213.33 16 272.15 63.91 320 122.8 320h66.31l-12.89 77.37A16 16 0 00192 416h32v64a16 16 0 0029 9.3l80-112a16 16 0 00-13-25.3h-27.51l8-32h103.84a91.56 91.56 0 001.51-183.1z' })
    )
  );
};

Thunderstorm.defaultProps = {
  // style
  style: {},
  color: '#000000',
  height: '22px',
  width: '22px',
  cssClasses: '',
  title: '',

  // animation
  shake: false,
  beat: false,
  rotate: false
};

Thunderstorm.propTypes = {
  // style
  style: _propTypes2.default.object,
  color: _propTypes2.default.string,
  height: _propTypes2.default.string,
  width: _propTypes2.default.string,
  cssClasses: _propTypes2.default.string,
  title: _propTypes2.default.string,

  // animation
  shake: _propTypes2.default.bool,
  beat: _propTypes2.default.bool,
  rotate: _propTypes2.default.bool,

  // functions
  onClick: _propTypes2.default.func
};

exports.default = Thunderstorm;
module.exports = exports['default'];
//# sourceMappingURL=Thunderstorm.js.map