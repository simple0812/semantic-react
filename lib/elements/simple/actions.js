'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var Actions = function Actions(_ref) {
    var children = _ref.children;
    var className = _ref.className;
    var component = _ref.component;

    var other = _objectWithoutProperties(_ref, ['children', 'className', 'component']);

    other.className = (0, _classnames2.default)(className, { actions: true });

    return _react2.default.createElement(component, other, children);
};

Actions.propTypes = {
    children: _react2.default.PropTypes.node,
    className: _react2.default.PropTypes.any,
    component: _react2.default.PropTypes.oneOfType([_react2.default.PropTypes.element, _react2.default.PropTypes.string])
};

Actions.defaultProps = {
    component: 'div'
};

exports.default = Actions;
//# sourceMappingURL=actions.js.map