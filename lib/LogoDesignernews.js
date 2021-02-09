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

var LogoDesignernews = function LogoDesignernews(props) {
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
      _react2.default.createElement('path', { d: 'M295.31 122.8L222.86 64l72.68 122.64-.23-63.84z' }),
      _react2.default.createElement('path', { d: 'M339.43 64v195.6h-41.6L225.6 141.28l1.94 118.32h-45.83V131.2L139.09 96c1.14 1.44 2.28 2.88 3.31 4.44 11.43 16.68 17.14 36.6 17.14 60.6 0 59-35 98.52-87.88 98.52H0v.48L228.11 448H512V205.72z' }),
      _react2.default.createElement('path', { d: 'M111.89 162.52c0-34.8-16.23-54.12-45.38-54.12H44.57v106.8h21.72c29.71 0 45.6-18.48 45.6-52.68z' })
    )
  );
};

LogoDesignernews.defaultProps = {
  // style
  style: {},
  color: '#000000',
  height: '22px',
  width: '22px',
  cssClasses: '',
  title: '',

  // animation
  shake: false,
  beat: false,
  rotate: false
};

LogoDesignernews.propTypes = {
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

exports.default = LogoDesignernews;
module.exports = exports['default'];
//# sourceMappingURL=LogoDesignernews.js.map