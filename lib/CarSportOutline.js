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

var CarSportOutline = function CarSportOutline(props) {
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
      _react2.default.createElement('path', { d: 'M469.71 234.6c-7.33-9.73-34.56-16.43-46.08-33.94s-20.95-55.43-50.27-70S288 112 256 112s-88 4-117.36 18.63-38.75 52.52-50.27 70-38.75 24.24-46.08 33.97S29.8 305.84 32.94 336s9 48 9 48h86c14.08 0 18.66-5.29 47.46-8 31.6-3 62.6-4 80.6-4s50 1 81.58 4c28.8 2.73 33.53 8 47.46 8h85s5.86-17.84 9-48-2.04-91.67-9.33-101.4zM400 384h56v16h-56zM56 384h56v16H56z', fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: '32' }),
      _react2.default.createElement('path', { d: 'M364.47 309.16c-5.91-6.83-25.17-12.53-50.67-16.35S279 288 256.2 288s-33.17 1.64-57.61 4.81-42.79 8.81-50.66 16.35C136.12 320.6 153.42 333.44 167 335c13.16 1.5 39.47.95 89.31.95s76.15.55 89.31-.95c13.56-1.65 29.62-13.6 18.85-25.84zM431.57 243.05a3.23 3.23 0 00-3.1-3c-11.81-.42-23.8.42-45.07 6.69a93.88 93.88 0 00-30.08 15.06c-2.28 1.78-1.47 6.59 1.39 7.1a455.32 455.32 0 0052.82 3.1c10.59 0 21.52-3 23.55-12.44a52.41 52.41 0 00.49-16.51zM80.43 243.05a3.23 3.23 0 013.1-3c11.81-.42 23.8.42 45.07 6.69a93.88 93.88 0 0130.08 15.06c2.28 1.78 1.47 6.59-1.39 7.1a455.32 455.32 0 01-52.82 3.1c-10.59 0-21.52-3-23.55-12.44a52.41 52.41 0 01-.49-16.51z' }),
      _react2.default.createElement('path', { fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: '32', d: 'M432 192h16M64 192h16M78 211s46.35-12 178-12 178 12 178 12' })
    )
  );
};

CarSportOutline.defaultProps = {
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

CarSportOutline.propTypes = {
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

exports.default = CarSportOutline;
module.exports = exports['default'];
//# sourceMappingURL=CarSportOutline.js.map