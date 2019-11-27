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

var IosPhonePortrait = function IosPhonePortrait(props) {
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
    _react2.default.createElement('path', { d: 'M671.4 64h-317.2c-36.6 0-66.2 29.2-66.2 65.8v762c0 36.8 29.6 68.2 66.2 68.2h317c36.6 0 64.6-31.4 64.6-68.2v-762c0.2-36.6-27.8-65.8-64.4-65.8zM482 110h60c4.4 0 8 3.6 8 8s-3.6 8-8 8h-60c-4.4 0-8-3.6-8-8s3.6-8 8-8zM513 938c-19.2 0-34.8-15.6-34.8-34.8s15.6-34.8 34.8-34.8c19.2 0 34.8 15.6 34.8 34.8s-15.6 34.8-34.8 34.8zM704 848h-384v-682h384v682z M513 883.2c-11 0-20 9-20 19.8 0 11 9 20 20 20s20-9 20-20c-0.2-10.8-9-19.8-20-19.8z' })
  );
};

IosPhonePortrait.defaultProps = {
  // style
  style: {},
  color: '#000000',
  fontSize: '22px',

  // animation
  shake: false,
  beat: false,
  rotate: false
};

IosPhonePortrait.propTypes = {
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

exports.default = IosPhonePortrait;
module.exports = exports['default'];
//# sourceMappingURL=IosPhonePortrait.js.map