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

var MdCloudyNight = function MdCloudyNight(props) {
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
    _react2.default.createElement('path', { d: 'M246.8 366c0.8-0.2 1.6-0.2 2.4-0.4-1 0.2-1.6 0.4-2.4 0.4z M683 606.8c-21.6-111.4-118.6-194.8-235-194.8-68 0-130.2 24-173 78.2 58.8 4.4 113.4 26.2 155.4 68.4 31.2 31.4 53.2 69.8 64.2 111.6h-57.4c-26.2-75.2-96-129-181.2-129-10.2 0-24.6 1.2-35.4 3.4-91.4 18.8-156.6 95.2-156.6 190 0 106.8 86 193.6 192 193.6h416c88.2 0 160-72.2 160-161.2-0.2-85.4-65.8-154.4-149-160.2z M225 450.8c27.2-34.6 61.4-61 101.6-78.4 36.8-16 77.6-24 121.4-24 12.2 0 24.4 0.8 36.4 2.2-12.2-36.2-18.8-75.2-18.8-115.6 0-49.2 9.8-96.2 27.6-138.8-169.4 41.2-295.2 195.2-295.2 378.4 0 3.2 0 6.4 0.2 9.6 0.2 0 0.4-0.2 0.6-0.2l26.2-33.2z M835.2 613.6c26.6 28.4 45.2 63 54.2 100.2 33-42.8 57.4-92.8 70.6-147-42.4 18-89 27.8-137.8 27.8-2.4 0-4.8 0-7.2 0 7 5.8 13.8 12.2 20.2 19z' })
  );
};

MdCloudyNight.defaultProps = {
  // style
  style: {},
  color: '#000000',
  fontSize: '22px',

  // animation
  shake: false,
  beat: false,
  rotate: false
};

MdCloudyNight.propTypes = {
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

exports.default = MdCloudyNight;
module.exports = exports['default'];
//# sourceMappingURL=MdCloudyNight.js.map