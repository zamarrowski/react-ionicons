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

var LogoPython = function LogoPython(props) {
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
      _react2.default.createElement('path', { d: 'M314 36.38c-18.59-3.06-45.8-4.47-64.27-4.38a311.09 311.09 0 00-51.66 4.38c-45.74 8-54.07 24.7-54.07 55.54V128h112v16H107.62C66.06 144 32.33 193.67 32 255.12v.88a162.91 162.91 0 003.13 32c9.29 46.28 38.23 80 72.49 80H128v-54c0-31.3 20.84-59.95 55-66.1l9.87-1.23H314a56.05 56.05 0 0015.06-2A52.48 52.48 0 00368 193.68V91.92c0-28.92-24.68-50.73-54-55.54zM194.93 105.5a20.37 20.37 0 1120.3-20.3 20.29 20.29 0 01-20.3 20.3z' }),
      _react2.default.createElement('path', { d: 'M475.28 217c-10.7-42.61-38.41-73-70.9-73h-17.71v47.45c0 39.57-26 68.22-57.74 73.13a63.54 63.54 0 01-9.69.75H198.08a60 60 0 00-15.23 1.95C160.54 273.14 144 291.7 144 315.77v101.77c0 29 29.14 46 57.73 54.31 34.21 9.95 71.48 11.75 112.42 0 27.19-7.77 53.85-23.48 53.85-54.31V384H256v-16h148.38c29.44 0 54.95-24.93 67.45-61.31A156.83 156.83 0 00480 256a160.64 160.64 0 00-4.72-39zM316.51 404a20.37 20.37 0 11-20.3 20.3 20.29 20.29 0 0120.3-20.3z' })
    )
  );
};

LogoPython.defaultProps = {
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

LogoPython.propTypes = {
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

exports.default = LogoPython;
module.exports = exports['default'];
//# sourceMappingURL=LogoPython.js.map