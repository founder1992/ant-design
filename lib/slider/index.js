'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports["default"] = undefined;

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _react = require('react');

var React = _interopRequireWildcard(_react);

var _rcSlider = require('rc-slider');

var _rcSlider2 = _interopRequireDefault(_rcSlider);

var _splitObject3 = require('../_util/splitObject');

var _splitObject4 = _interopRequireDefault(_splitObject3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj["default"] = obj; return newObj; } }

function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }

var Slider = function (_React$Component) {
    _inherits(Slider, _React$Component);

    function Slider() {
        _classCallCheck(this, Slider);

        return _possibleConstructorReturn(this, _React$Component.apply(this, arguments));
    }

    Slider.prototype.render = function render() {
        var _splitObject = (0, _splitObject4["default"])(this.props, ['isIncluded', 'marks', 'index', 'defaultIndex']);

        var _splitObject2 = _slicedToArray(_splitObject, 2);

        var _splitObject2$ = _splitObject2[0];
        var isIncluded = _splitObject2$.isIncluded;
        var marks = _splitObject2$.marks;
        var index = _splitObject2$.index;
        var defaultIndex = _splitObject2$.defaultIndex;
        var others = _splitObject2[1];

        if (isIncluded !== undefined) {
            // 兼容 `isIncluded`
            others.included = isIncluded;
        }
        if (Array.isArray(marks)) {
            // 兼容当 marks 为数组的情况
            others.min = 0;
            others.max = marks.length - 1;
            others.step = 1;
            if (index !== undefined) {
                others.value = index;
            }
            if (defaultIndex !== undefined) {
                others.defaultValue = defaultIndex;
            }
            others.marks = {};
            marks.forEach(function (val, idx) {
                others.marks[idx] = val;
            });
        } else {
            others.marks = marks;
        }
        return React.createElement(_rcSlider2["default"], others);
    };

    return Slider;
}(React.Component);

exports["default"] = Slider;

Slider.defaultProps = {
    prefixCls: 'ant-slider',
    tipTransitionName: 'zoom-down'
};
module.exports = exports['default'];