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

var Bug = function Bug(props) {
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
      _react2.default.createElement('path', { d: 'M463.55 272.13H400v-48.2q0-4.32-.27-8.47c29.57-27.88 32.25-64.63 32.27-103 0-8.61-6.64-16-15.25-16.41A16 16 0 00400 112c0 28-1.86 48.15-9.9 63.84-19.22-41.15-65.78-63.91-134.1-63.91-39.8 0-74.19 9.13-99.43 26.39-14.9 10.19-26.2 22.91-33.7 37.72C114 160.65 112 141 112 112.46c0-8.61-6.6-16-15.2-16.44A16 16 0 0080 112c0 37.63 2.61 73.73 32.44 101.63q-.43 5.06-.44 10.3v48.2H48.45c-8.61 0-16 6.62-16.43 15.23a16 16 0 0016 16.77h64V320a143.32 143.32 0 0010.39 53.69C96.74 396.64 80.18 422 80 463.34c0 8.74 6.62 16.3 15.36 16.65A16 16 0 00112 464c0-27.66 9.1-44.71 26.17-61.32A144.37 144.37 0 00220 459.42a16 16 0 0020-15.49V192.45c0-8.61 6.62-16 15.23-16.43A16 16 0 01272 192v251.93a16 16 0 0020 15.49 144.4 144.4 0 0081.82-56.74c17 16.54 26.09 33.52 26.17 60.95a16.27 16.27 0 0015.1 16.37A16 16 0 00432 464c0-41.68-16.6-67.23-42.39-90.31A143.32 143.32 0 00400 320v-15.87h64a16 16 0 0016-16.77c-.42-8.61-7.84-15.23-16.45-15.23z' }),
      _react2.default.createElement('path', { d: 'M321.39 104l.32.09c13.57 3.8 25.07-10.55 18.2-22.85A95.86 95.86 0 00256.21 32h-.42a95.87 95.87 0 00-84.19 50.13c-6.84 12.58 5.14 27 18.84 22.86 19.71-6 41.79-9.06 65.56-9.06 24.09 0 46.09 2.72 65.39 8.07z' })
    )
  );
};

Bug.defaultProps = {
  // style
  style: {},
  color: 'inherit',
  height: '22px',
  width: '22px',
  cssClasses: '',
  title: '',

  // animation
  shake: false,
  beat: false,
  rotate: false
};

Bug.propTypes = {
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

exports.default = Bug;
module.exports = exports['default'];
//# sourceMappingURL=Bug.js.map