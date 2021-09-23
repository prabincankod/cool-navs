"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

require("./index.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var Header = function Header(props) {
  var headerStyle = {
    color: props.textColor,
    borderBottomLeftRadius: props.headerRadius,
    borderBottomRightRadius: props.headerRadius,
    backgroundColor: props.bgColor,
    paddingTop: props.headerHeight,
    paddingBottom: props.headerHeight,
    fontSize: props.textSize
  };

  if (!props.headerName) {
    return /*#__PURE__*/_react["default"].createElement("center", {
      style: headerStyle,
      className: "center"
    }, "Cool Navs");
  }

  return /*#__PURE__*/_react["default"].createElement("center", {
    style: headerStyle,
    className: "center"
  }, props.headerName);
};

var _default = Header;
exports["default"] = _default;