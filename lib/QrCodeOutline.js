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

var QrCodeOutline = function QrCodeOutline(props) {
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
      _react2.default.createElement('rect', { x: '336', y: '336', width: '80', height: '80', rx: '8', ry: '8' }),
      _react2.default.createElement('rect', { x: '272', y: '272', width: '64', height: '64', rx: '8', ry: '8' }),
      _react2.default.createElement('rect', { x: '416', y: '416', width: '64', height: '64', rx: '8', ry: '8' }),
      _react2.default.createElement('rect', { x: '432', y: '272', width: '48', height: '48', rx: '8', ry: '8' }),
      _react2.default.createElement('rect', { x: '272', y: '432', width: '48', height: '48', rx: '8', ry: '8' }),
      _react2.default.createElement('rect', { x: '336', y: '96', width: '80', height: '80', rx: '8', ry: '8' }),
      _react2.default.createElement('rect', { x: '288', y: '48', width: '176', height: '176', rx: '16', ry: '16', fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: '32' }),
      _react2.default.createElement('rect', { x: '96', y: '96', width: '80', height: '80', rx: '8', ry: '8' }),
      _react2.default.createElement('rect', { x: '48', y: '48', width: '176', height: '176', rx: '16', ry: '16', fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: '32' }),
      _react2.default.createElement('rect', { x: '96', y: '336', width: '80', height: '80', rx: '8', ry: '8' }),
      _react2.default.createElement('rect', { x: '48', y: '288', width: '176', height: '176', rx: '16', ry: '16', fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: '32' })
    )
  );
};

QrCodeOutline.defaultProps = {
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

QrCodeOutline.propTypes = {
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

exports.default = QrCodeOutline;
module.exports = exports['default'];
//# sourceMappingURL=QrCodeOutline.js.map