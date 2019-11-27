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

var MdBeaker = function MdBeaker(props) {
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
    _react2.default.createElement('path', { d: 'M896.2 69.8c0-2.4-0.8-5.8-5.8-5.8h-633.4c-108.6 0-128.8 54.8-128.8 79.6 60.6 8.4 63.8 9.4 63.8 73.4 0 32 0 614 0 614 0 70.6 57.8 129 128.6 129h415.4c70.6 0 128-58.4 128-129 0 0 0-7.4 0-20.4v-664c4.4-35 24-63.6 26.2-67 2.4-3.8 6-7.6 6-9.8zM708.4 864h-355.8c-31.8 0-59.4-23.8-64.6-54.2v-649.8h480v639.4c0 36-24.8 64.6-59.6 64.6z M364 320v452c0 8.8 7.2 16 16 16h296c8.8 0 16-7.2 16-16v-452h-328z' })
  );
};

MdBeaker.defaultProps = {
  // style
  style: {},
  color: '#000000',
  fontSize: '22px',

  // animation
  shake: false,
  beat: false,
  rotate: false
};

MdBeaker.propTypes = {
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

exports.default = MdBeaker;
module.exports = exports['default'];
//# sourceMappingURL=MdBeaker.js.map