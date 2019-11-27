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

var MdExit = function MdExit(props) {
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
    _react2.default.createElement('path', { d: 'M430.938 665.604l59.726 59.728 213.336-213.332-213.336-213.334-59.726 59.73 110.938 110.938h-413.876v85.332h411.728l-108.79 110.938zM810.668 128h-597.336c-46.936 0-85.332 38.396-85.332 85.332v170.668h85.332v-170.666h597.336v597.336h-597.336v-170.67h-85.332v170.668c0 46.936 38.396 85.332 85.332 85.332h597.336c46.936 0 85.332-38.396 85.332-85.332v-597.336c0-46.936-38.396-85.332-85.332-85.332z' })
  );
};

MdExit.defaultProps = {
  // style
  style: {},
  color: '#000000',
  fontSize: '22px',

  // animation
  shake: false,
  beat: false,
  rotate: false
};

MdExit.propTypes = {
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

exports.default = MdExit;
module.exports = exports['default'];
//# sourceMappingURL=MdExit.js.map