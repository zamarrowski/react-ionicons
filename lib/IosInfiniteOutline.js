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

var IosInfiniteOutline = function IosInfiniteOutline(props) {
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
    _react2.default.createElement('path', { d: 'M902.458 376.196c-37.094-36.262-86.558-56.196-139.288-56.196-52.726 0-102.19 19.934-139.284 56.196l-84.458 82.374 27.298 26.894 84.458-82.612c29.866-29.058 69.528-45.146 111.756-45.146 42.226 0 81.892 16.088 111.756 45.146 61.594 60.278 61.594 158.26 0 218.296-29.864 29.058-69.53 45.146-111.756 45.146-42.228 0-81.89-16.088-111.756-45.146l-251.042-244.952c-37.33-36.262-86.792-56.196-139.288-56.196-52.726 0-102.19 19.934-139.286 56.196-38.338 37.422-57.526 86.686-57.568 135.804-0.042 49.222 19.146 98.298 57.568 135.804 37.096 36.26 86.558 56.196 139.286 56.196 52.73 0 102.19-19.936 139.29-56.196l84.222-82.372-27.294-26.658-84.458 82.374c-29.864 29.058-69.528 45.146-111.758 45.146-42.226 0-81.888-16.088-111.752-45.146-61.598-60.28-61.598-158.26 0-218.296 29.864-29.058 69.526-45.146 111.752-45.146 42.23 0 81.894 16.088 111.758 45.146l251.040 244.954c37.326 36.258 86.79 56.194 139.286 56.194 52.726 0 102.19-19.936 139.286-56.196 38.496-37.344 57.744-86.604 57.774-135.804 0.030-49.202-19.16-98.34-57.542-135.804z' })
  );
};

IosInfiniteOutline.defaultProps = {
  // style
  style: {},
  color: '#000000',
  fontSize: '22px',

  // animation
  shake: false,
  beat: false,
  rotate: false
};

IosInfiniteOutline.propTypes = {
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

exports.default = IosInfiniteOutline;
module.exports = exports['default'];
//# sourceMappingURL=IosInfiniteOutline.js.map