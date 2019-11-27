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

var IosFolderOpenOutline = function IosFolderOpenOutline(props) {
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
    _react2.default.createElement('path', { d: 'M912.6 320c-2.2 0-8.6 0-16.6 0v-82c0-26.6-18.8-46-45.6-46h-388.6c-5.6 0-8.6-1.2-12.2-4.8l-45.4-45.4c-9.8-9.2-17.8-13.8-34.6-13.8h-192.2c-27.6 0-49.4 20.6-49.4 46v146c-8 0-14.2 0-16.6 0-25.6 0-50.6 10.2-47 48.6s47 477.4 47 477.4c5.4 35.6 23.4 50 50 50h705c25.4 0 42-15.6 46-50 0 0 44.4-425.8 47.2-467s-17.8-59-47-59zM160 174c0-8.6 8.8-14 17.4-14h192.2c7 0 7.4 0.4 12.4 5l45 44.8c9.6 9.6 20.8 14.2 34.8 14.2h388.6c9 0 13.6 5.2 13.6 14v82c-144 0-560 0-704 0v-146zM880.4 846c-1.6 9.4-7.4 18-16 18h-700.4c-9 0-19-7-20.6-18l-48-478c0-8.8 7.2-16 16-16h801.2c8.8 0 16 7.2 16 16l-48.2 478z' })
  );
};

IosFolderOpenOutline.defaultProps = {
  // style
  style: {},
  color: '#000000',
  fontSize: '22px',

  // animation
  shake: false,
  beat: false,
  rotate: false
};

IosFolderOpenOutline.propTypes = {
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

exports.default = IosFolderOpenOutline;
module.exports = exports['default'];
//# sourceMappingURL=IosFolderOpenOutline.js.map