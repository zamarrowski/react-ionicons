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

var MdRefreshCircle = function MdRefreshCircle(props) {
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
    _react2.default.createElement('path', { d: 'M512 96c-228.8 0-416 187.2-416 416s187.2 416 416 416 416-187.2 416-416-187.2-416-416-416zM736 484h-196l89.6-89.6c-29.4-30.8-71.4-50.4-117.6-50.4-92.4 0-168 75.6-168 168s75.6 168 168 168c69.8 0 130.6-42.4 155.2-104h59.6c-27.8 92.6-112.6 160-214.8 160-124.6 0-224-100.8-224-224s100.8-224 224-224c61.6 0 117.6 25.2 158.2 65.8l65.8-65.8v196z' })
  );
};

MdRefreshCircle.defaultProps = {
  // style
  style: {},
  color: '#000000',
  fontSize: '22px',

  // animation
  shake: false,
  beat: false,
  rotate: false
};

MdRefreshCircle.propTypes = {
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

exports.default = MdRefreshCircle;
module.exports = exports['default'];
//# sourceMappingURL=MdRefreshCircle.js.map