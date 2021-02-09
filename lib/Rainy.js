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

var Rainy = function Rainy(props) {
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
      _react2.default.createElement('path', { d: 'M456.26 139.37c-16.77-16.73-39.17-28.41-65.17-34a16 16 0 01-11.19-9 142.24 142.24 0 00-42.19-53.21C314.48 25.39 286.23 16 256 16a140.24 140.24 0 00-93.5 35.32c-24.2 21.56-40.91 51.34-48.43 85.83a16.05 16.05 0 01-11.72 12.18c-25 6.3-35.71 12.54-49.21 24.56C34 190.93 24 214.14 24 240.8c0 30.55 11.23 55.64 32.47 72.56C75.08 328.17 100.5 336 130 336h234c33.2 0 64.11-11.46 87-32.28 23.84-21.65 37-51.67 37-84.52 0-31.49-11-59.09-31.74-79.83zM112 448a16 16 0 01-13.3-24.88l32-48a16 16 0 0126.62 17.76l-32 48A16 16 0 01112 448zM160 496a16 16 0 01-13.29-24.88l64-96a16 16 0 0126.62 17.76l-64 96A16 16 0 01160 496zM272 448a16 16 0 01-13.3-24.88l32-48a16 16 0 0126.62 17.76l-32 48A16 16 0 01272 448zM320 496a16 16 0 01-13.3-24.88l64-96a16 16 0 0126.62 17.76l-64 96A16 16 0 01320 496z' })
    )
  );
};

Rainy.defaultProps = {
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

Rainy.propTypes = {
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

exports.default = Rainy;
module.exports = exports['default'];
//# sourceMappingURL=Rainy.js.map