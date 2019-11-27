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

var IosColorFilterOutline = function IosColorFilterOutline(props) {
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
    _react2.default.createElement('path', { d: 'M732.39 424.244c2.37-13.056 3.612-26.504 3.612-40.244 0-123.712-100.29-224.002-224.002-224.002s-224.002 100.29-224.002 224.002c0 13.74 1.242 27.188 3.612 40.244-94.378 26.36-163.612 112.968-163.612 215.756 0 123.712 100.29 224.002 224.002 224.002 62.684 0 119.342-25.758 160-67.254 40.658 41.496 97.316 67.254 160 67.254 123.712 0 224.002-100.29 224.002-224.002 0-102.788-69.234-189.394-163.612-215.756zM319.998 384c0-105.87 86.13-192.002 192.002-192.002s192.002 86.132 192.002 192.002c0 11.552-1.026 22.87-2.99 33.866-9.498-1.228-19.18-1.868-29.012-1.868-62.684 0-119.342 25.758-160 67.254-40.658-41.496-97.316-67.254-160-67.254-9.832 0-19.514 0.638-29.012 1.868-1.964-10.996-2.99-22.314-2.99-33.866zM544.002 640c0 39.16-11.792 75.612-32.002 106.012-20.208-30.4-32.002-66.852-32.002-106.012 0-11.552 1.026-22.87 2.99-33.866 9.498 1.228 19.18 1.868 29.012 1.868s19.514-0.638 29.012-1.868c1.964 10.996 2.99 22.314 2.99 33.866zM512 576.002c-6.968 0-13.85-0.382-20.628-1.112 5.252-14.524 12.21-28.238 20.628-40.902 8.42 12.664 15.376 26.378 20.628 40.902-6.778 0.73-13.66 1.112-20.628 1.112zM459.582 568.728c-59.512-16.91-107.332-61.874-128.21-119.62 6.78-0.728 13.66-1.112 20.628-1.112 54.706 0 104.138 23 139.144 59.834-13.45 18.378-24.176 38.872-31.562 60.898zM532.856 507.834c35.006-36.836 84.438-59.836 139.144-59.836 6.968 0 13.85 0.382 20.628 1.112-20.878 57.746-68.7 102.708-128.21 119.62-7.386-22.028-18.112-42.522-31.562-60.896zM352 832.002c-105.872 0-192.002-86.13-192.002-192.002 0-87.704 59.11-161.862 139.584-184.728 23.464 69.966 80.53 124.514 152.028 144.486-2.37 13.054-3.612 26.504-3.612 40.242 0 49.434 16.026 95.118 43.146 132.168-35.006 36.834-84.438 59.834-139.144 59.834zM672 832.002c-54.708 0-104.138-23-139.144-59.836 27.122-37.048 43.146-82.732 43.146-132.166 0-13.738-1.242-27.188-3.612-40.242 71.498-19.972 128.562-74.52 152.028-144.486 80.474 22.868 139.584 97.026 139.584 184.728 0 105.872-86.13 192.002-192.002 192.002z' })
  );
};

IosColorFilterOutline.defaultProps = {
  // style
  style: {},
  color: '#000000',
  fontSize: '22px',

  // animation
  shake: false,
  beat: false,
  rotate: false
};

IosColorFilterOutline.propTypes = {
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

exports.default = IosColorFilterOutline;
module.exports = exports['default'];
//# sourceMappingURL=IosColorFilterOutline.js.map