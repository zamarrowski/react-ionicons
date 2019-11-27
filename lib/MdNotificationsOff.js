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

var MdNotificationsOff = function MdNotificationsOff(props) {
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
    _react2.default.createElement('path', { d: 'M512 927.312c45.628 0 82.95-37.312 82.95-83.312h-165.9c-0 46 37.322 83.312 82.95 83.312z M262.166 214.344l0.106 0.148-66.092-65.938-48.172 48.212 126.084 126.306c-20.316 37.97-32.092 81.32-32.092 127.068v229.11l-82 83.312v41.438h595.486l72.364 72.66 48.158-48.602-24.208-24.058h0.632l-590.266-589.656z M782 450.14c0-127.052-90-235.354-208-262.436v-29.156c0-35.412-26.742-62.486-62-62.486-35.256 0-62 27.074-62 62.486v29.156c-30 6.876-58.096 19.002-83.5 35.326l415.5 415.68v-188.57z' })
  );
};

MdNotificationsOff.defaultProps = {
  // style
  style: {},
  color: '#000000',
  fontSize: '22px',

  // animation
  shake: false,
  beat: false,
  rotate: false
};

MdNotificationsOff.propTypes = {
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

exports.default = MdNotificationsOff;
module.exports = exports['default'];
//# sourceMappingURL=MdNotificationsOff.js.map