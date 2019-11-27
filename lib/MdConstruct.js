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

var MdConstruct = function MdConstruct(props) {
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
    _react2.default.createElement('path', { d: 'M861.8 786.8l-382.2-380.4c31.8-81.2 14.2-176.4-53.2-243.4-70.8-70.6-177-84.6-262-45.8l152.2 151.6-106.2 105.8-155.8-151.6c-42.2 84.6-24.6 190.4 46.2 261 67.2 67 162.8 84.6 244.2 53l28.8 28.6-210.4 210.4c-15.2 11.4-15.2 38 3.8 53.2l87.6 87.4c15.2 15.2 38.2 15.2 53.4 0l192.2-224.8 226.8 225.8c14.2 14.2 35.4 14.2 49.6 0l81.4-81.2c17.8-14.2 17.8-39 3.6-49.6z M988.8 433.2l-69-68.2c-4.4-4.4-11.6-4.4-16 0l-7.4 7.4-37-31.6c0 0 2.4-20-9.8-37.4-12.4-17.4-32.2-39.6-46.4-53.8-14.2-14-68.2-67.8-139.4-102.8-71.4-35.4-121.8-50.8-181.8-50.8v59.4c0 0 57.4 33.2 90.2 59.4 32.6 26.2 33.6 119 33.6 119l-57 57 113 112.2 62-72.6c25.8-7 47.6-7.6 60.4-0.6l27.4 26.6-19.2 19c-4.4 4.4-4.4 11.4 0 15.8l69 68.2c4.4 4.4 11.6 4.4 16 0l111.4-110.4c4.2-4.4 4.2-11.6 0-15.8z' })
  );
};

MdConstruct.defaultProps = {
  // style
  style: {},
  color: '#000000',
  fontSize: '22px',

  // animation
  shake: false,
  beat: false,
  rotate: false
};

MdConstruct.propTypes = {
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

exports.default = MdConstruct;
module.exports = exports['default'];
//# sourceMappingURL=MdConstruct.js.map