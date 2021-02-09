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

var VolumeMedium = function VolumeMedium(props) {
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
      _react2.default.createElement('path', { d: 'M264 416.19a23.92 23.92 0 01-14.21-4.69l-.66-.51-91.46-75H88a24 24 0 01-24-24V200a24 24 0 0124-24h69.65l91.46-75 .66-.51A24 24 0 01288 119.83v272.34a24 24 0 01-24 24zM352 336a16 16 0 01-14.29-23.18c9.49-18.9 14.3-38 14.3-56.82 0-19.36-4.66-37.92-14.25-56.73a16 16 0 0128.5-14.54C378.2 208.16 384 231.47 384 256c0 23.83-6 47.78-17.7 71.18A16 16 0 01352 336z' }),
      _react2.default.createElement('path', { d: 'M400 384a16 16 0 01-13.87-24C405 327.05 416 299.45 416 256c0-44.12-10.94-71.52-29.83-103.95A16 16 0 01413.83 136C434.92 172.16 448 204.88 448 256c0 50.36-13.06 83.24-34.12 120a16 16 0 01-13.88 8z' })
    )
  );
};

VolumeMedium.defaultProps = {
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

VolumeMedium.propTypes = {
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

exports.default = VolumeMedium;
module.exports = exports['default'];
//# sourceMappingURL=VolumeMedium.js.map