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

var IosInfinite = function IosInfinite(props) {
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
    _react2.default.createElement('path', { d: 'M913.642 364.754c-40.078-39.178-93.518-60.754-150.472-60.754s-110.39 21.576-150.42 60.708l-78.212 75.77 50.12 49.378 77.686-75.538c26.916-26.19 62.642-40.614 100.598-40.614 37.958 0 73.682 14.424 100.564 40.582 26.726 26.154 41.424 60.936 41.386 97.94-0.038 36.886-14.726 71.5-41.354 97.456-26.916 26.19-62.64 40.614-100.598 40.614-37.956 0-73.682-14.424-100.582-40.598l-251.066-244.98c-40.31-39.154-93.736-60.718-150.438-60.718-56.954 0-110.39 21.576-150.46 60.746-40.188 39.226-62.348 91.518-62.394 147.24-0.048 55.644 22.11 107.946 62.384 147.26 40.080 39.178 93.518 60.754 150.47 60.754 56.95 0 110.388-21.576 150.446-60.726l77.988-75.818-50.176-49.004-77.658 75.23c-26.916 26.19-62.642 40.614-100.6 40.614-37.954 0-73.678-14.424-100.56-40.582-26.728-26.154-41.428-60.938-41.388-97.942 0.038-36.886 14.726-71.498 41.356-97.454 26.916-26.19 62.64-40.614 100.594-40.614 37.958 0 73.684 14.424 100.584 40.598l251.064 244.978c40.308 39.156 93.734 60.72 150.436 60.72 56.952 0 110.388-21.576 150.426-60.71 40.358-39.146 62.602-91.454 62.634-147.28 0.034-55.676-22.116-107.974-62.358-147.256z' })
  );
};

IosInfinite.defaultProps = {
  // style
  style: {},
  color: '#000000',
  fontSize: '22px',

  // animation
  shake: false,
  beat: false,
  rotate: false
};

IosInfinite.propTypes = {
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

exports.default = IosInfinite;
module.exports = exports['default'];
//# sourceMappingURL=IosInfinite.js.map