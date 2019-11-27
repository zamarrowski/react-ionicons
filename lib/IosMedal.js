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

var IosMedal = function IosMedal(props) {
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
    _react2.default.createElement('path', { d: 'M96 224v192l256 72v-264z M512 564.4z M400 656.4c0 61.8 50.2 112 112 112s112-50.2 112-112c0-47-28.8-87-69.8-103.8l-42.2 11.6-42-11.8c-41.2 17-70 57.2-70 104z M736.8 502.2l-139.2 38.4c35.4 26.2 58.4 68.4 58.4 115.8 0 79.4-64.6 144-144 144s-144-64.6-144-144c0-47.4 23-89.6 58.6-115.8l-139.2-38.6c-30 43.6-47.4 96.6-47.4 153.6 0 150.2 121.8 272 272 272s272-121.8 272-272c0-57-17.4-109.6-47.2-153.4z M384 224v272l128 36 128-35.2v-272.8z M672 224v264l256-72v-192z M96 96h832v96h-832v-96z' })
  );
};

IosMedal.defaultProps = {
  // style
  style: {},
  color: '#000000',
  fontSize: '22px',

  // animation
  shake: false,
  beat: false,
  rotate: false
};

IosMedal.propTypes = {
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

exports.default = IosMedal;
module.exports = exports['default'];
//# sourceMappingURL=IosMedal.js.map