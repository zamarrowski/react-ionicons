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

var MdNutrition = function MdNutrition(props) {
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
    _react2.default.createElement('path', { d: 'M714.4 471.2l-165-165.2h-1.6c-16.2-12-36.4-20.6-56.8-20.6-27.4 0-52.2 12.6-68.6 32.6h-1.2l-315.2 510.2v1.6c-6 12.4-10 26.6-10 41.6 0 48.8 39.4 88.6 88.6 88.6 18.8 0 36-5.8 54.8-18.2l465.8-336.2c21.8-16.6 34.8-43.2 34.8-72 0-24-9.4-46.4-25.6-62.4z M928 290.2l-58.4-98-73.2 40.6 63-111.8-98.2-57-134.6 255.6 82.6 82.8z' })
  );
};

MdNutrition.defaultProps = {
  // style
  style: {},
  color: '#000000',
  fontSize: '22px',

  // animation
  shake: false,
  beat: false,
  rotate: false
};

MdNutrition.propTypes = {
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

exports.default = MdNutrition;
module.exports = exports['default'];
//# sourceMappingURL=MdNutrition.js.map