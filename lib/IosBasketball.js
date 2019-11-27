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

var IosBasketball = function IosBasketball(props) {
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
    _react2.default.createElement('path', { d: 'M512 96c-229.726 0-416 186.272-416 416s186.274 416 416 416c229.742 0 416-186.276 416-416s-186.258-416-416-416zM761.594 800.064c-8.316 7.216-16.96 14.058-25.884 20.544-43.408-100.030-101.876-191.59-174.336-272.93-30.236 31.456-62.406 61.036-96.312 88.56 55.318 70.728 89.832 158.508 94.378 254.138-10.504 1.31-21.142 2.172-31.888 2.606-2.206-49.454-13-97.442-32.228-142.9-14.316-33.844-32.862-65.33-55.36-94.074-62.208 47.466-129.846 88.186-201.82 121.052-7.766-8.022-15.184-16.382-22.23-25.058 72.56-32.268 140.582-72.542 203.41-120.372-4.278-4.68-8.66-9.282-13.168-13.79-38.214-38.214-82.708-68.214-132.24-89.166-44.030-18.624-92.424-29.928-142.9-32.216 0.434-10.758 1.296-21.406 2.606-31.918 123.24 5.858 233.426 61.506 310.9 147.276 27.604-22.416 54.15-46.334 79.556-71.74 5.276-5.276 10.476-10.606 15.624-15.976-6.446-6.8-12.978-13.534-19.624-20.18-91.774-91.772-198.274-164.29-316.664-215.664 6.486-8.922 13.33-17.564 20.544-25.878 127.902 56.774 242.424 138.202 337.534 238.264 21.422-23.778 41.648-48.432 60.638-73.93-80.694-74.542-133.912-178.376-142.776-294.624 10.546-0.898 21.208-1.384 31.98-1.404 3.476 44.476 13.948 87.676 31.342 128.802 20.952 49.534 50.952 94.026 89.166 132.24 3 3 6.050 5.93 9.124 8.826 40.452-58.062 74.758-120.208 102.574-185.974 0.57-1.348 1.11-2.706 1.67-4.056 8.838 6.852 17.362 14.084 25.558 21.67-28.766 67.004-64.264 130.43-105.644 189.432 30.052 24.26 63.182 44.136 98.958 59.27 41.262 17.454 84.61 27.956 129.24 31.396-0.008 10.774-0.486 21.434-1.376 31.982-92.556-6.958-177.262-42.036-245.602-96.718-19.844 26.55-40.91 52.134-63.112 76.672 72.95 81.54 133.382 174.494 178.362 275.838z' })
  );
};

IosBasketball.defaultProps = {
  // style
  style: {},
  color: '#000000',
  fontSize: '22px',

  // animation
  shake: false,
  beat: false,
  rotate: false
};

IosBasketball.propTypes = {
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

exports.default = IosBasketball;
module.exports = exports['default'];
//# sourceMappingURL=IosBasketball.js.map