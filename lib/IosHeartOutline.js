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

var IosHeartOutline = function IosHeartOutline(props) {
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
    _react2.default.createElement('path', { d: 'M718.77 160c-78.838 0-164.428 35.198-206.77 105.6-42.34-70.402-127.932-105.6-206.77-105.6-137.936 0-241.23 86.476-241.23 231.558 0 62.576 25.124 143.848 81.846 211.314 56.718 67.47 90.458 103.4 200.306 176 109.848 72.604 165.848 85.128 165.848 85.128s56-12.524 165.848-85.128c109.846-72.6 143.588-108.53 200.306-176 56.722-67.466 81.846-148.738 81.846-211.314 0-145.082-103.294-231.558-241.23-231.558zM853.66 582.282c-53.704 63.88-84.36 97.79-193.458 169.894-80.474 53.192-130.504 72.602-148.204 78.466-17.7-5.866-67.728-25.278-148.204-78.466-109.096-72.104-139.752-106.012-193.458-169.896-24.13-28.702-43.714-62.548-56.632-97.886-11.58-31.684-17.704-63.786-17.704-92.836 0-60.568 20.262-111.286 58.594-146.67 18.28-16.874 40.316-29.984 65.504-38.968 25.89-9.238 54.532-13.92 85.132-13.92 76.036 0 146.434 35.364 179.348 90.092l27.422 45.596 27.422-45.596c32.916-54.728 103.314-90.092 179.348-90.092 30.6 0 59.242 4.682 85.132 13.918 25.188 8.986 47.224 22.096 65.504 38.968 38.332 35.386 58.594 86.104 58.594 146.672 0 29.050-6.124 61.152-17.708 92.836-12.916 35.336-32.5 69.184-56.632 97.888z' })
  );
};

IosHeartOutline.defaultProps = {
  // style
  style: {},
  color: '#000000',
  fontSize: '22px',

  // animation
  shake: false,
  beat: false,
  rotate: false
};

IosHeartOutline.propTypes = {
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

exports.default = IosHeartOutline;
module.exports = exports['default'];
//# sourceMappingURL=IosHeartOutline.js.map