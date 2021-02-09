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

var Skull = function Skull(props) {
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
      _react2.default.createElement('path', { d: 'M402 76.94C362.61 37.63 310.78 16 256 16h-.37A208 208 0 0048 224v100.67A79.62 79.62 0 0098.29 399l23.71 9.42a15.92 15.92 0 019.75 11.72l10 50.13A32.09 32.09 0 00173.12 496H184a8 8 0 008-8v-39.55c0-8.61 6.62-16 15.23-16.43A16 16 0 01224 448v40a8 8 0 008 8 8 8 0 008-8v-39.55c0-8.61 6.62-16 15.23-16.43A16 16 0 01272 448v40a8 8 0 008 8 8 8 0 008-8v-39.55c0-8.61 6.62-16 15.23-16.43A16 16 0 01320 448v40a8 8 0 008 8h10.88a32.09 32.09 0 0031.38-25.72l10-50.14a16 16 0 019.74-11.72l23.71-9.42A79.62 79.62 0 00464 324.67v-99c0-56-22-108.81-62-148.73zM171.66 335.88a56 56 0 1152.22-52.22 56 56 0 01-52.22 52.22zM281 397.25a16.37 16.37 0 01-9.3 2.75h-31.4a16.37 16.37 0 01-9.28-2.75 16 16 0 01-6.6-16.9l15.91-47.6C243 326 247.25 321 254 320.13c8.26-1 14 2.87 17.61 12.22l16 48a16 16 0 01-6.61 16.9zm66.68-61.37a56 56 0 1152.22-52.22 56 56 0 01-52.24 52.22z' })
    )
  );
};

Skull.defaultProps = {
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

Skull.propTypes = {
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

exports.default = Skull;
module.exports = exports['default'];
//# sourceMappingURL=Skull.js.map