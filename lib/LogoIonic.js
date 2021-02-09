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

var LogoIonic = function LogoIonic(props) {
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
      _react2.default.createElement('path', { d: 'M256 153.9A102.1 102.1 0 10358.1 256 102.23 102.23 0 00256 153.9z' }),
      _react2.default.createElement('circle', { cx: '402.59', cy: '116.45', r: '46.52' }),
      _react2.default.createElement('path', { d: 'M459.86 163.2l-1.95-4.28-3.11 3.52a70 70 0 01-28.06 19.32l-3 1.1 1.22 2.93A181.43 181.43 0 01439 256c0 100.92-82.1 183-183 183S73 356.92 73 256 155.08 73 256 73a180.94 180.94 0 0178.43 17.7l2.87 1.3 1.25-2.92A70.19 70.19 0 01359.21 62l3.67-2.93-4.17-2.07A221.61 221.61 0 00256 32C132.49 32 32 132.49 32 256s100.49 224 224 224 224-100.49 224-224a222.19 222.19 0 00-20.14-92.8z' })
    )
  );
};

LogoIonic.defaultProps = {
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

LogoIonic.propTypes = {
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

exports.default = LogoIonic;
module.exports = exports['default'];
//# sourceMappingURL=LogoIonic.js.map