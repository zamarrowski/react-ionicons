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

var LogoMarkdown = function LogoMarkdown(props) {
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
    _react2.default.createElement('path', { d: 'M895.318 192h-766.636c-35.674 0-64.682 28.968-64.682 64.616v510.698c0 35.672 29.008 64.686 64.682 64.686h766.636c35.674 0 64.682-29.014 64.682-64.688v-510.696c0-35.648-29.008-64.616-64.682-64.616zM568.046 704h-112.096v-192l-84.080 107.756-84.044-107.756v192h-112.088v-384h112.088l84.044 135.96 84.080-135.96h112.096v384zM735.36 704l-139.27-192h84v-192h112.086v192h84.054l-140.87 192z' })
  );
};

LogoMarkdown.defaultProps = {
  // style
  style: {},
  color: '#000000',
  fontSize: '22px',

  // animation
  shake: false,
  beat: false,
  rotate: false
};

LogoMarkdown.propTypes = {
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

exports.default = LogoMarkdown;
module.exports = exports['default'];
//# sourceMappingURL=LogoMarkdown.js.map