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

var IosFilmOutline = function IosFilmOutline(props) {
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
    _react2.default.createElement('path', { d: 'M112 176v672h800v-672h-800zM256 816h-112v-96h112v96zM256 688h-112v-96h112v96zM256 560h-112v-96h112v96zM256 432h-112v-96h112v96zM256 304h-112v-96h112v96zM736 816h-448v-288h448v288zM736 496h-448v-288h448v288zM880 816h-112v-96h112v96zM880 688h-112v-96h112v96zM880 560h-112v-96h112v96zM880 432h-112v-96h112v96zM880 304h-112v-96h112v96z' })
  );
};

IosFilmOutline.defaultProps = {
  // style
  style: {},
  color: '#000000',
  fontSize: '22px',

  // animation
  shake: false,
  beat: false,
  rotate: false
};

IosFilmOutline.propTypes = {
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

exports.default = IosFilmOutline;
module.exports = exports['default'];
//# sourceMappingURL=IosFilmOutline.js.map