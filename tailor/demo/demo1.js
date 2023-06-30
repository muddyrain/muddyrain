function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
import { ColorPicker, Space, Switch } from 'antd';
import React from 'react';
import Tailor from '..';
import image1 from "../images/1.png";
import image2 from "../images/2.png";
import image3 from "../images/3.png";
var Demo1 = function Demo1() {
  var _React$useState = React.useState(false),
    _React$useState2 = _slicedToArray(_React$useState, 2),
    isShowDownload = _React$useState2[0],
    setIsShowDownload = _React$useState2[1];
  var _React$useState3 = React.useState(false),
    _React$useState4 = _slicedToArray(_React$useState3, 2),
    isShowReview = _React$useState4[0],
    setIsShowReview = _React$useState4[1];
  var _React$useState5 = React.useState('#f00000'),
    _React$useState6 = _slicedToArray(_React$useState5, 2),
    areaColor = _React$useState6[0],
    setAreaColor = _React$useState6[1];
  var _React$useState7 = React.useState(0.25),
    _React$useState8 = _slicedToArray(_React$useState7, 2),
    areaAlpha = _React$useState8[0],
    setAreaAlpha = _React$useState8[1];
  return /*#__PURE__*/React.createElement("div", {
    className: "flex"
  }, /*#__PURE__*/React.createElement("h2", null, "\u5C0F\u4E8E\u5BB9\u5668\u5C3A\u5BF8"), /*#__PURE__*/React.createElement(Space, null, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Switch, {
    checked: isShowReview,
    onChange: function onChange() {
      return setIsShowReview(!isShowReview);
    }
  }), /*#__PURE__*/React.createElement("span", null, "\u662F\u5426\u663E\u793A\u9884\u89C8")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Switch, {
    checked: isShowDownload,
    onChange: function onChange() {
      return setIsShowDownload(!isShowDownload);
    }
  }), /*#__PURE__*/React.createElement("span", null, "\u662F\u5426\u663E\u793A\u4E0B\u8F7D")), /*#__PURE__*/React.createElement(Space, null, /*#__PURE__*/React.createElement(ColorPicker, {
    value: areaColor,
    onChange: function onChange(e) {
      setAreaColor('#' + e.toHex());
      setAreaAlpha(e.metaColor.roundA);
    }
  }), /*#__PURE__*/React.createElement("span", null, "\u533A\u57DF\u989C\u8272"))), /*#__PURE__*/React.createElement(Tailor, {
    isShowDownload: isShowDownload,
    isShowReview: isShowReview,
    areaColor: areaColor,
    areaAlpha: areaAlpha,
    src: image1
  }), /*#__PURE__*/React.createElement("h2", null, "\u5927\u4E8E\u5BBD\u5EA6\u5BB9\u5668\u5C3A\u5BF8"), /*#__PURE__*/React.createElement(Tailor, {
    src: image2
  }), /*#__PURE__*/React.createElement("h2", null, "\u5927\u4E8E\u9AD8\u5EA6\u5BB9\u5668\u5C3A\u5BF8"), /*#__PURE__*/React.createElement(Tailor, {
    src: image3
  }));
};
export default Demo1;