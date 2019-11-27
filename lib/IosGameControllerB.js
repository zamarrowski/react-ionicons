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

var IosGameControllerB = function IosGameControllerB(props) {
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
    _react2.default.createElement('path', { d: 'M270.246 409.136c-21.376 0-38.686 17.434-38.686 38.882 0 21.454 17.31 38.894 38.686 38.894 21.282 0 38.594-17.442 38.594-38.894 0-21.448-17.312-38.882-38.594-38.882z M932.558 497.732c-42.314-176.942-87.262-270.978-176.908-297.66-19.53-5.802-36.154-8.072-51.498-8.072-55.196 0-93.876 29.366-192.16 29.366-98.348 0-137.004-29.362-192.124-29.366-15.33 0-31.926 2.27-51.442 8.072-89.738 26.682-134.684 120.718-176.922 297.66-42.362 176.946-34.668 304.726 15.358 328.578 8.142 3.89 16.462 5.69 24.908 5.69 43.388 0 90.278-47.676 135.318-104.094 51.308-64.21 64.228-65.906 220.556-65.906h48.686c156.294 0 169.256 1.692 220.564 65.906 45.052 56.414 91.94 104.008 135.33 104.008 8.452 0 16.768-1.758 24.914-5.646 50.010-23.852 57.704-151.59 15.42-328.536zM270.468 527.266c-43.28 0-78.468-35.516-78.468-79.246 0-43.68 35.188-79.286 78.468-79.286 43.31 0 78.498 35.606 78.498 79.286 0 43.73-35.186 79.246-78.498 79.246zM616.152 488.28c-22.116 0-40.152-18.038-40.152-40.214 0-22.18 18.038-40.208 40.152-40.208 22.262 0 40.296 18.028 40.296 40.208 0.002 22.176-18.034 40.214-40.296 40.214zM703.976 576c-22.116 0-40.106-17.902-40.106-40.032 0-22.314 17.99-40.212 40.106-40.212 22.292 0 40.296 17.898 40.296 40.212 0.002 22.13-18.004 40.032-40.296 40.032zM703.976 400.38c-22.116 0-40.106-17.986-40.106-40.166 0-22.188 17.99-40.214 40.106-40.214 22.292 0 40.296 18.028 40.296 40.214 0.002 22.18-18.004 40.166-40.296 40.166zM791.894 488.28c-22.21 0-40.202-18.038-40.202-40.214 0-22.18 17.99-40.208 40.202-40.208 22.118 0 40.106 18.028 40.106 40.208 0 22.176-17.988 40.214-40.106 40.214z' })
  );
};

IosGameControllerB.defaultProps = {
  // style
  style: {},
  color: '#000000',
  fontSize: '22px',

  // animation
  shake: false,
  beat: false,
  rotate: false
};

IosGameControllerB.propTypes = {
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

exports.default = IosGameControllerB;
module.exports = exports['default'];
//# sourceMappingURL=IosGameControllerB.js.map