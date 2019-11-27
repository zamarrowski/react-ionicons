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

var IosCloudUploadOutline = function IosCloudUploadOutline(props) {
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
    _react2.default.createElement('path', { d: 'M669.93 524.14l23.232-23.206-180.998-180.934-181.16 180.886 23.232 23.208 141.388-141.27 0.002 513.176h32.86l-0.002-513.176z M826.024 356.226c-13.732-128.436-117.942-228.226-250.024-228.226-89.676 0-173.070 45.624-218.792 115.43-15.892-7.318-33.566-11.43-52.208-11.43-68.416 0-123.962 54.974-124.954 123.154-69.862 22.072-116.046 85.162-116.046 156.846 0 87.812 71.188 160 159 160h193v-32h-193c-70.028 0-127-57.696-127-128 0-28.544 8.886-54.094 25.7-77.2 16.942-23.28 40.452-40.308 67.988-49.008l22.020-7.020 0.336-23.124c0.358-24.548 10.186-47.59 27.674-64.85 17.502-17.274 40.688-26.792 65.284-26.792 13.52 0 26.58 2.856 38.82 8.492l25.046 11.532 15.11-23.066c41.614-63.536 115.714-101.464 191.524-101.464 55.626 0 104.96 20.53 146.18 57.808 40.932 37.020 66.688 87.474 72.526 142.070l2.606 24.376 24.214 3.83c29.454 4.658 56.506 19.844 76.174 42.762 19.86 23.142 30.798 51.174 30.798 81.654 0 70.304-56.972 128-127 128h-193v32h193c87.812 0 159-72.188 159-160 0-79.296-58.054-143.768-133.976-155.774z' })
  );
};

IosCloudUploadOutline.defaultProps = {
  // style
  style: {},
  color: '#000000',
  fontSize: '22px',

  // animation
  shake: false,
  beat: false,
  rotate: false
};

IosCloudUploadOutline.propTypes = {
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

exports.default = IosCloudUploadOutline;
module.exports = exports['default'];
//# sourceMappingURL=IosCloudUploadOutline.js.map