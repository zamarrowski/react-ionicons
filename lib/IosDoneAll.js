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

var IosDoneAll = function IosDoneAll(props) {
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
    _react2.default.createElement('path', { d: 'M733.8 364l-228 234.2-92.2-93.8-34.8 35.4 109.2 111.4c4.8 4.8 11.4 9 17.4 9 5.8 0 12.4-4 17.2-8.8l245.4-251.4-34.2-36z M290.8 504.2l-34.8 35.4 109.2 111.4c4.8 4.8 11.4 9 17.4 9 5.8 0 12.4-4 17.2-8.8l17.4-17.8-126.4-129.2z M595.2 380l-124 127.4 34.4 35 123.8-126.6z' })
  );
};

IosDoneAll.defaultProps = {
  // style
  style: {},
  color: '#000000',
  fontSize: '22px',

  // animation
  shake: false,
  beat: false,
  rotate: false
};

IosDoneAll.propTypes = {
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

exports.default = IosDoneAll;
module.exports = exports['default'];
//# sourceMappingURL=IosDoneAll.js.map