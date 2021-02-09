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

var IceCream = function IceCream(props) {
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
      _react2.default.createElement('path', { d: 'M183 352c-21.84-.52-39-18.9-39-40.74v-34.07a8 8 0 00-6-7.74c-33.75-8.85-58-39.71-58-77.45a80.14 80.14 0 0166.27-78.82 8 8 0 006.62-6.83 104 104 0 01206.22 0 8 8 0 006.62 6.83A80 80 0 01352 272a74.33 74.33 0 01-47.45-17.41 7.93 7.93 0 00-9.92-.14A62.89 62.89 0 01256 268a80.47 80.47 0 01-21.8-3.18 8 8 0 00-10.2 7.69V312a40 40 0 01-41 40z' }),
      _react2.default.createElement('path', { d: 'M263.39 299.7a8 8 0 00-7.39 7.91V312a72.11 72.11 0 01-50.69 68.76 8 8 0 00-4.91 10.78l40.91 94.8A16 16 0 00256 496a16 16 0 0014.69-9.7l73.78-172.15a8 8 0 00-6.2-11.07 106.31 106.31 0 01-35.9-11.59 8 8 0 00-7.13-.2 95 95 0 01-31.85 8.41z' })
    )
  );
};

IceCream.defaultProps = {
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

IceCream.propTypes = {
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

exports.default = IceCream;
module.exports = exports['default'];
//# sourceMappingURL=IceCream.js.map