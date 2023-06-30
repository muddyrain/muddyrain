function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
import { Button, Modal } from 'antd';
import React, { useEffect, useState } from 'react';

// 尺寸大小类型

// 处理框架宽度
var procedureWidth = function procedureWidth(width) {
  switch (width) {
    case 'small':
      return 480;
    case 'default':
      return 600;
    case 'medium':
      return 680;
    case 'large':
      return 880;
    default:
      return width;
  }
};
var Dialog = function Dialog(_ref) {
  var _ref$className = _ref.className,
    className = _ref$className === void 0 ? '' : _ref$className,
    _ref$style = _ref.style,
    style = _ref$style === void 0 ? {} : _ref$style,
    _ref$title = _ref.title,
    title = _ref$title === void 0 ? '弹框标题' : _ref$title,
    onOpen = _ref.onOpen,
    _ref$visible = _ref.visible,
    _visible = _ref$visible === void 0 ? false : _ref$visible,
    _ref$okText = _ref.okText,
    okText = _ref$okText === void 0 ? '确定' : _ref$okText,
    _ref$openText = _ref.openText,
    openText = _ref$openText === void 0 ? '打开' : _ref$openText,
    _ref$cancelText = _ref.cancelText,
    cancelText = _ref$cancelText === void 0 ? '取消' : _ref$cancelText,
    _ref$width = _ref.width,
    width = _ref$width === void 0 ? 'medium' : _ref$width,
    children = _ref.children,
    _ref$okButtonProps = _ref.okButtonProps,
    okButtonProps = _ref$okButtonProps === void 0 ? {} : _ref$okButtonProps,
    _ref$cancelButtonProp = _ref.cancelButtonProps,
    cancelButtonProps = _ref$cancelButtonProp === void 0 ? {} : _ref$cancelButtonProp,
    _ref$openButtonProps = _ref.openButtonProps,
    openButtonProps = _ref$openButtonProps === void 0 ? {} : _ref$openButtonProps,
    _onOk = _ref.onOk,
    _onCancel = _ref.onCancel,
    afterClose = _ref.afterClose,
    footer = _ref.footer,
    renderOpenButton = _ref.renderOpenButton,
    changeVisible = _ref.changeVisible;
  var _useState = useState(_visible),
    _useState2 = _slicedToArray(_useState, 2),
    visible = _useState2[0],
    setVisible = _useState2[1];
  // 处理打开按钮
  var procedureOpenButton = function procedureOpenButton() {
    var type = Object.prototype.toString.call(renderOpenButton);
    if (type === '[object Function]') {
      return renderOpenButton && renderOpenButton(function () {
        onOpen === null || onOpen === void 0 ? void 0 : onOpen();
        setVisible(true);
      });
    } else {
      return /*#__PURE__*/React.createElement(Button, _extends({}, openButtonProps, {
        onClick: function onClick() {
          onOpen === null || onOpen === void 0 ? void 0 : onOpen();
          setVisible(true);
        }
      }), openText);
    }
  };
  useEffect(function () {
    changeVisible === null || changeVisible === void 0 ? void 0 : changeVisible(visible);
  }, [visible]);
  return /*#__PURE__*/React.createElement(React.Fragment, null, procedureOpenButton(), /*#__PURE__*/React.createElement(Modal, _extends({
    className: className,
    destroyOnClose: true,
    style: style,
    title: title,
    width: procedureWidth(width),
    open: visible,
    okText: okText,
    okButtonProps: _objectSpread(_objectSpread({}, okButtonProps), {}, {
      style: _objectSpread({
        display: okText ? 'inline-block' : 'none'
      }, (okButtonProps === null || okButtonProps === void 0 ? void 0 : okButtonProps.style) || {})
    }),
    onOk: function onOk() {
      var blocker = _onOk === null || _onOk === void 0 ? void 0 : _onOk(function () {
        return setVisible(false);
      }); // 拦截器
      if (!blocker) {
        setVisible(false);
      }
    },
    cancelText: cancelText,
    cancelButtonProps: _objectSpread(_objectSpread({}, cancelButtonProps), {}, {
      style: _objectSpread({
        display: cancelText ? 'inline-block' : 'none'
      }, (cancelButtonProps === null || cancelButtonProps === void 0 ? void 0 : cancelButtonProps.style) || {})
    }),
    onCancel: function onCancel() {
      setVisible(false);
      _onCancel === null || _onCancel === void 0 ? void 0 : _onCancel();
    },
    afterClose: afterClose
  }, function () {
    var type = Object.prototype.toString.call(footer);
    if (type === '[object Undefined]') {
      return {};
    } else if (type === '[object Function]') {
      return {
        footer: footer && footer(function () {
          setVisible(false);
        })
      };
    } else {
      return {
        footer: footer
      };
    }
  }()), children));
};
export default Dialog;