'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _SvgContainer = require('./SvgContainer');

var _SvgContainer2 = _interopRequireDefault(_SvgContainer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ReactIonicon = function ReactIonicon(props) {
  var _useState = (0, _react.useState)(null),
      _useState2 = _slicedToArray(_useState, 2),
      importedIconRef = _useState2[0],
      setImportedIconRef = _useState2[1];

  (0, _react.useEffect)(function () {
    import('!!@svgr/webpack?-svgo,+titleProp,+ref!./svgicons/' + props.icon + '.svg').then(function (icon) {
      setImportedIconRef(icon.default);
    });
  }, [props.icon]);

  if (importedIconRef) {
    var Icon = importedIconRef;
    return _react2.default.createElement(
      _SvgContainer2.default,
      {
        height: props.height,
        width: props.width,
        color: props.color,
        onClick: props.onClick,
        rotate: props.rotate ? 1 : 0,
        shake: props.shake ? 1 : 0,
        beat: props.beat ? 1 : 0
      },
      _react2.default.createElement(Icon, { style: props.style, className: props.cssClasses })
    );
  }
  if (!importedIconRef) return null;
};

ReactIonicon.defaultProps = {
  // style
  style: {},
  color: '#000000',
  height: '22px',
  width: '22px',
  cssClasses: '',

  // animation
  shake: false,
  beat: false,
  rotate: false
};

ReactIonicon.propTypes = {
  // style
  icon: _propTypes2.default.string.isRequired,
  style: _propTypes2.default.object,
  color: _propTypes2.default.string,
  height: _propTypes2.default.string,
  width: _propTypes2.default.string,
  cssClasses: _propTypes2.default.string,

  // animation
  shake: _propTypes2.default.bool,
  beat: _propTypes2.default.bool,
  rotate: _propTypes2.default.bool,

  // functions
  onClick: _propTypes2.default.func
};

exports.default = ReactIonicon;
module.exports = exports['default'];
//# sourceMappingURL=ReactIonicon.js.map