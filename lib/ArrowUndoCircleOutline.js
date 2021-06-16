'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _SvgContainer = require('./SvgContainer');

var _SvgContainer2 = _interopRequireDefault(_SvgContainer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ArrowUndoCircleOutline = function ArrowUndoCircleOutline(props) {
  return _react2.default.createElement(
    _SvgContainer2.default,
    {
      height: props.height,
      width: props.width,
      color: props.color,
      onClick: props.onClick,
      rotate: props.rotate ? 1 : 0,
      shake: props.shake ? 1 : 0,
      beat: props.beat ? 1 : 0,
      className: props.className
    },
    _react2.default.createElement(
      'svg',
      { style: props.style, className: props.cssClasses, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 512 512' },
      props.title ? _react2.default.createElement(
        'title',
        null,
        props.title
      ) : '',
      _react2.default.createElement('path', { d: 'M245.09 327.74v-37.32c57.07 0 84.51 13.47 108.58 38.68 5.4 5.65 15 1.32 14.29-6.43-5.45-61.45-34.14-117.09-122.87-117.09v-37.32a8.32 8.32 0 00-14.05-6L146.58 242a8.2 8.2 0 000 11.94L231 333.71a8.32 8.32 0 0014.09-5.97z' }),
      _react2.default.createElement('path', { d: 'M256 64C150 64 64 150 64 256s86 192 192 192 192-86 192-192S362 64 256 64z', fill: 'none', stroke: 'currentColor', strokeMiterlimit: '10', strokeWidth: '32' })
    )
  );
};

ArrowUndoCircleOutline.defaultProps = {
  // style
  style: {},
  color: 'inherit',
  height: '22px',
  width: '22px',
  cssClasses: '',
  title: '',

  // animation
  shake: false,
  beat: false,
  rotate: false
};

ArrowUndoCircleOutline.propTypes = {
  // style
  style: _propTypes2.default.object,
  color: _propTypes2.default.string,
  height: _propTypes2.default.string,
  width: _propTypes2.default.string,
  cssClasses: _propTypes2.default.string,
  title: _propTypes2.default.string,

  // animation
  shake: _propTypes2.default.bool,
  beat: _propTypes2.default.bool,
  rotate: _propTypes2.default.bool,

  // functions
  onClick: _propTypes2.default.func
};

exports.default = ArrowUndoCircleOutline;
module.exports = exports['default'];
//# sourceMappingURL=ArrowUndoCircleOutline.js.map