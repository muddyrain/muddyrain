function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
import Tippy from '@tippyjs/react';
import gsap from 'gsap';
import React, { useEffect, useLayoutEffect, useRef, useState } from 'react';
import colors from 'tailwindcss/colors';
import 'tippy.js/dist/tippy.css';
import styles from "./index.module.less";
/**
 * 处理渲染行数据
 */
var handleRenderRowData = function handleRenderRowData(column, item, index) {
  var text = column.dataIndex && item[column.dataIndex];
  if (column.ellipsis) {
    return /*#__PURE__*/React.createElement(Tippy, {
      placement: column.ellipsisPlacement || 'top',
      content: /*#__PURE__*/React.createElement("div", {
        className: column.ellipsisClassName
      }, text)
    }, /*#__PURE__*/React.createElement("span", {
      className: styles['ellipsis-line']
    }, text));
  } else {
    if (column.render) {
      return column.render(item[column.dataIndex], item, index);
    } else {
      return text;
    }
  }
};
var ScrollTable = function ScrollTable(_ref) {
  var columns = _ref.columns,
    dataSource = _ref.dataSource,
    _ref$isAutoPlay = _ref.isAutoPlay,
    isAutoPlay = _ref$isAutoPlay === void 0 ? true : _ref$isAutoPlay,
    _ref$className = _ref.className,
    className = _ref$className === void 0 ? '' : _ref$className,
    _ref$headClassName = _ref.headClassName,
    headClassName = _ref$headClassName === void 0 ? '' : _ref$headClassName,
    _ref$rowClassName = _ref.rowClassName,
    rowClassName = _ref$rowClassName === void 0 ? '' : _ref$rowClassName,
    _ref$headStyle = _ref.headStyle,
    headStyle = _ref$headStyle === void 0 ? {} : _ref$headStyle,
    _ref$rowStyle = _ref.rowStyle,
    rowStyle = _ref$rowStyle === void 0 ? {} : _ref$rowStyle,
    _ref$headSpacing = _ref.headSpacing,
    headSpacing = _ref$headSpacing === void 0 ? [10, 15] : _ref$headSpacing,
    _ref$rowSpacing = _ref.rowSpacing,
    rowSpacing = _ref$rowSpacing === void 0 ? [10, 15] : _ref$rowSpacing,
    _ref$headBackgroundCo = _ref.headBackgroundColor,
    headBackgroundColor = _ref$headBackgroundCo === void 0 ? colors['blue']['400'] : _ref$headBackgroundCo,
    _rowBackgroundColor = _ref.rowBackgroundColor,
    _ref$striped = _ref.striped,
    striped = _ref$striped === void 0 ? true : _ref$striped,
    _ref$duration = _ref.duration,
    duration = _ref$duration === void 0 ? 1000 : _ref$duration,
    _ref$delay = _ref.delay,
    delay = _ref$delay === void 0 ? 250 : _ref$delay,
    _ref$waitTime = _ref.waitTime,
    waitTime = _ref$waitTime === void 0 ? 2000 : _ref$waitTime,
    rowScrollHeight = _ref.rowScrollHeight,
    _ref$hoverPause = _ref.hoverPause,
    hoverPause = _ref$hoverPause === void 0 ? false : _ref$hoverPause,
    _onClick = _ref.onClick,
    _onMouseOver = _ref.onMouseOver,
    _onMouseMove = _ref.onMouseMove,
    _onMouseLeave = _ref.onMouseLeave,
    style = _ref.style;
  var rowBackgroundColor = _rowBackgroundColor || (striped ? [colors['cyan']['700'], colors['sky']['700']] : colors['cyan']['700']);
  var timer = useRef();
  // 表格身体元素
  var tableBodyRef = useRef(null);
  // 表格外部元素
  var tableWrapperRef = useRef(null);
  // 行元素
  var rowRef = useRef(null);
  var scrollHeight = useRef(0);
  // 是否播放
  var isPlay = useRef(isAutoPlay);
  var dataLength = useRef(dataSource.length);
  var widths = useRef([]);
  var isInit = useRef(false);
  var rowHeight = useRef(0);
  var _useState = useState(dataSource),
    _useState2 = _slicedToArray(_useState, 2),
    data = _useState2[0],
    setData = _useState2[1];
  // 当前滚动的索引
  var currentScrollIndex = useRef(0);
  /**
   * 计算行的高度
   */
  var computedRowHeight = function computedRowHeight() {
    if (!rowRef.current) return;
    var _rowRef$current$getBo = rowRef.current.getBoundingClientRect(),
      height = _rowRef$current$getBo.height;
    rowHeight.current = height;
  };
  /**
   * 计算间距
   */
  var computedSpacing = function computedSpacing(spacing) {
    if (Array.isArray(spacing)) {
      if (spacing.length === 2) {
        return "".concat(spacing[0], "px ").concat(spacing[1], "px");
      }
      if (spacing.length === 4) {
        return "".concat(spacing[0], "px ").concat(spacing[1], "px ").concat(spacing[2], "px ").concat(spacing[3], "px");
      }
    }
    if (typeof spacing === 'string') {
      return "".concat(spacing);
    }
    if (typeof spacing === 'number') {
      return "".concat(spacing, "px");
    }
    return "";
  };
  /**
   * 计算数据源
   */
  var computedData = function computedData() {
    /**
     * 迭代数据
     */
    function iterateData(data, num) {
      var _data = [];
      for (var i = 0; i < num; i++) {
        _data = [].concat(_toConsumableArray(_data), _toConsumableArray(data));
      }
      setData(_toConsumableArray(_data));
    }
    if (tableWrapperRef.current) {
      var targetElement = tableWrapperRef.current;
      var _targetElement$getBou = targetElement.getBoundingClientRect(),
        height = _targetElement$getBou.height;
      // 承载个数
      var CarryingNumber = Math.ceil(height / rowHeight.current);
      // 承载需求层叠次数
      var needsNumber = Math.ceil(CarryingNumber / dataLength.current);
      if (CarryingNumber > dataLength.current) {
        iterateData(data, needsNumber + 1);
      }
      computedRowHeight();
    }
  };
  /**
   * 计算表格宽度
   */
  var computedWidth = function computedWidth() {
    if (tableBodyRef.current) {
      var targetElement = tableBodyRef.current;
      var _targetElement$getBou2 = targetElement.getBoundingClientRect(),
        width = _targetElement$getBou2.width;
      widths.current = Array.from({
        length: columns.length
      }).map(function () {
        return width / columns.length;
      });
    }
  };
  // 开始运动
  var startMove = function startMove() {
    if (!isPlay.current) return;
    timer.current = setTimeout(function () {
      if (tableBodyRef.current && rowRef.current) {
        var targetElement = tableBodyRef.current;
        scrollHeight.current += rowScrollHeight || rowHeight.current;
        currentScrollIndex.current += 1;
        gsap.to(tableBodyRef.current.style, {
          duration: duration / 1e3,
          delay: delay / 1e3,
          transform: "translateY(-".concat(scrollHeight.current, "px)"),
          onComplete: function onComplete() {
            // 如果当前滚动的索引小于数据总长度
            if (currentScrollIndex.current < dataLength.current) {
              startMove();
            } else {
              targetElement.style.transform = "translateY(0px)";
              scrollHeight.current = 0;
              currentScrollIndex.current = 0;
              startMove();
            }
          }
        });
      }
    }, waitTime);
  };
  var computedRowBackgroundColor = function computedRowBackgroundColor(index) {
    if (striped) {
      if (index % 2 === 0) {
        return rowBackgroundColor[0];
      } else {
        return rowBackgroundColor[1];
      }
    } else {
      return rowBackgroundColor;
    }
  };
  var computedJustify = function computedJustify(align) {
    switch (align) {
      case 'left':
        return 'flex-start';
      case 'center':
        return 'center';
      case 'right':
        return 'flex-end';
      default:
        return 'flex-start';
    }
  };
  useLayoutEffect(function () {
    if (isInit.current) return;
    computedWidth();
    computedRowHeight();
    isInit.current = true;
    computedData();
    startMove();
  }, [tableBodyRef.current, rowRef.current]);
  useEffect(function () {
    return function () {
      clearTimeout(timer.current);
    };
  }, []);
  return /*#__PURE__*/React.createElement("div", {
    className: "".concat(styles.scrollTable_container, " ").concat(className),
    style: style,
    onMouseOver: function onMouseOver() {
      if (hoverPause) {
        isPlay.current = false;
        clearTimeout(timer.current);
      }
    },
    onMouseLeave: function onMouseLeave() {
      isPlay.current = true;
      startMove();
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "".concat(styles.head, " ").concat(headClassName),
    style: _objectSpread({
      backgroundColor: headBackgroundColor
    }, headStyle)
  }, columns.map(function (column, columnIndex) {
    return /*#__PURE__*/React.createElement("div", {
      key: columnIndex,
      className: styles.head_item,
      style: {
        width: column.width || widths.current[columnIndex],
        padding: computedSpacing(headSpacing),
        justifyContent: computedJustify(column.headAlign || 'left')
      }
    }, column.title);
  })), /*#__PURE__*/React.createElement("div", {
    className: styles.wrapper,
    ref: tableWrapperRef
  }, /*#__PURE__*/React.createElement("div", {
    className: styles.body,
    ref: tableBodyRef,
    style: {
      transform: 'translateY(0px)'
    }
  }, data.map(function (item, index) {
    return /*#__PURE__*/React.createElement("div", _extends({
      className: "".concat(styles.row, " ").concat(rowClassName),
      style: _objectSpread({
        backgroundColor: computedRowBackgroundColor(index)
      }, rowStyle),
      key: index
    }, index === 0 ? {
      ref: rowRef
    } : {}), columns.map(function (column, columnIndex) {
      return /*#__PURE__*/React.createElement("div", {
        key: columnIndex,
        className: styles.row_item,
        style: {
          width: column.width || widths.current[columnIndex],
          padding: computedSpacing(rowSpacing),
          justifyContent: computedJustify(column.align || 'left'),
          cursor: column.cursor
        },
        onClick: function onClick(e) {
          _onClick === null || _onClick === void 0 ? void 0 : _onClick(item, index, e);
        },
        onMouseOver: function onMouseOver(e) {
          _onMouseOver === null || _onMouseOver === void 0 ? void 0 : _onMouseOver(item, index, e);
        },
        onMouseMove: function onMouseMove(e) {
          _onMouseMove === null || _onMouseMove === void 0 ? void 0 : _onMouseMove(item, index, e);
        },
        onMouseLeave: function onMouseLeave(e) {
          _onMouseLeave === null || _onMouseLeave === void 0 ? void 0 : _onMouseLeave(item, index, e);
        }
      }, handleRenderRowData(column, item, index));
    }));
  }))));
};
export default ScrollTable;