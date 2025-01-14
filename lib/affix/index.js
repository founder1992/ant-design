'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports["default"] = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var React = _interopRequireWildcard(_react);

var _reactDom = require('react-dom');

var ReactDOM = _interopRequireWildcard(_reactDom);

var _addEventListener = require('rc-util/lib/Dom/addEventListener');

var _addEventListener2 = _interopRequireDefault(_addEventListener);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _warning = require('warning');

var _warning2 = _interopRequireDefault(_warning);

var _objectAssign = require('object-assign');

var _objectAssign2 = _interopRequireDefault(_objectAssign);

var _shallowequal = require('shallowequal');

var _shallowequal2 = _interopRequireDefault(_shallowequal);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj["default"] = obj; return newObj; } }

function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }

function getScroll(w, top) {
    var ret = w['page' + (top ? 'Y' : 'X') + 'Offset'];
    var method = 'scroll' + (top ? 'Top' : 'Left');
    if (typeof ret !== 'number') {
        var d = w.document;
        // ie6,7,8 standard mode
        ret = d.documentElement[method];
        if (typeof ret !== 'number') {
            // quirks mode
            ret = d.body[method];
        }
    }
    return ret;
}
function getOffset(element) {
    var rect = element.getBoundingClientRect();
    var body = document.body;
    var clientTop = element.clientTop || body.clientTop || 0;
    var clientLeft = element.clientLeft || body.clientLeft || 0;
    var scrollTop = getScroll(window, true);
    var scrollLeft = getScroll(window);
    return {
        top: rect.top + scrollTop - clientTop,
        left: rect.left + scrollLeft - clientLeft
    };
}

var Affix = function (_React$Component) {
    _inherits(Affix, _React$Component);

    function Affix(props) {
        _classCallCheck(this, Affix);

        var _this = _possibleConstructorReturn(this, _React$Component.call(this, props));

        _this.handleScroll = function (e) {
            var _this$props = _this.props;
            var offsetTop = _this$props.offsetTop;
            var offsetBottom = _this$props.offsetBottom;
            var offset = _this$props.offset;
            // Backwards support

            offsetTop = offsetTop || offset;
            var scrollTop = getScroll(window, true);
            var affixNode = ReactDOM.findDOMNode(_this);
            var fixedNode = ReactDOM.findDOMNode(_this.refs.fixedNode);
            var elemOffset = getOffset(affixNode);
            var elemSize = {
                width: fixedNode.offsetWidth,
                height: fixedNode.offsetHeight
            };
            var offsetMode = {
                top: null,
                bottom: null
            };
            if (typeof offsetTop !== 'number' && typeof offsetBottom !== 'number') {
                offsetMode.top = true;
                offsetTop = 0;
            } else {
                offsetMode.top = typeof offsetTop === 'number';
                offsetMode.bottom = typeof offsetBottom === 'number';
            }
            if (scrollTop > elemOffset.top - offsetTop && offsetMode.top) {
                // Fixed Top
                _this.setAffixStyle(e, {
                    position: 'fixed',
                    top: offsetTop,
                    left: elemOffset.left,
                    width: affixNode.offsetWidth
                });
                _this.setPlaceholderStyle(e, {
                    width: affixNode.offsetWidth,
                    height: affixNode.offsetHeight
                });
            } else if (scrollTop < elemOffset.top + elemSize.height + offsetBottom - window.innerHeight && offsetMode.bottom) {
                // Fixed Bottom
                _this.setAffixStyle(e, {
                    position: 'fixed',
                    bottom: offsetBottom,
                    left: elemOffset.left,
                    width: affixNode.offsetWidth
                });
                _this.setPlaceholderStyle(e, {
                    width: affixNode.offsetWidth,
                    height: affixNode.offsetHeight
                });
            } else {
                _this.setAffixStyle(e, null);
                _this.setPlaceholderStyle(e, null);
            }
        };
        _this.state = {
            affixStyle: null,
            placeholderStyle: null
        };
        return _this;
    }

    Affix.prototype.setAffixStyle = function setAffixStyle(e, affixStyle) {
        var _this2 = this;

        var originalAffixStyle = this.state.affixStyle;
        if (e.type === 'scroll' && originalAffixStyle && affixStyle) {
            return;
        }
        if ((0, _shallowequal2["default"])(affixStyle, originalAffixStyle)) {
            return;
        }
        this.setState({ affixStyle: affixStyle }, function () {
            var affixed = !!_this2.state.affixStyle;
            if (affixStyle && !originalAffixStyle || !affixStyle && originalAffixStyle) {
                _this2.props.onChange(affixed);
            }
        });
    };

    Affix.prototype.setPlaceholderStyle = function setPlaceholderStyle(e, placeholderStyle) {
        var originalPlaceholderStyle = this.state.placeholderStyle;
        if (e.type === 'resize') {
            return;
        }
        if ((0, _shallowequal2["default"])(placeholderStyle, originalPlaceholderStyle)) {
            return;
        }
        this.setState({ placeholderStyle: placeholderStyle });
    };

    Affix.prototype.componentDidMount = function componentDidMount() {
        (0, _warning2["default"])(!('offset' in this.props), '`offset` prop of Affix is deprecated, use `offsetTop` instead.');
        this.scrollEvent = (0, _addEventListener2["default"])(window, 'scroll', this.handleScroll);
        this.resizeEvent = (0, _addEventListener2["default"])(window, 'resize', this.handleScroll);
    };

    Affix.prototype.componentWillUnmount = function componentWillUnmount() {
        if (this.scrollEvent) {
            this.scrollEvent.remove();
        }
        if (this.resizeEvent) {
            this.resizeEvent.remove();
        }
    };

    Affix.prototype.render = function render() {
        var className = (0, _classnames2["default"])({
            'ant-affix': this.state.affixStyle
        });
        var props = (0, _objectAssign2["default"])({}, this.props);
        delete props.offsetTop;
        delete props.offsetBottom;
        return React.createElement(
            'div',
            _extends({}, props, { style: this.state.placeholderStyle }),
            React.createElement(
                'div',
                { className: className, ref: 'fixedNode', style: this.state.affixStyle },
                this.props.children
            )
        );
    };

    return Affix;
}(React.Component);

exports["default"] = Affix;

Affix.propTypes = {
    offsetTop: React.PropTypes.number,
    offsetBottom: React.PropTypes.number
};
Affix.defaultProps = {
    onChange: function onChange() {}
};
module.exports = exports['default'];