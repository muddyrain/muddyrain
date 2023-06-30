function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
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
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import { useSetState } from 'ahooks';
import { Button, Popconfirm, Space, Table, Tooltip } from 'antd';
import React from 'react';
var handleActions = function handleActions(actions) {
  if (!actions) {
    return [];
  }
  return [{
    title: '操作',
    render: function render(_, record, index) {
      return /*#__PURE__*/React.createElement(Space, null, actions.map(function (action, _index) {
        var key = action.key || _index;
        /**
         * 是否显示
         */
        if (action.visible === false) {
          return null;
        }
        /**
         * 自定义函数组件式方式
         */
        if (typeof (action === null || action === void 0 ? void 0 : action.content) === 'function') {
          return /*#__PURE__*/React.createElement("div", {
            key: key
          }, action === null || action === void 0 ? void 0 : action.content(record, index));
        }
        if (action.confirm) {
          return /*#__PURE__*/React.createElement(Popconfirm, _extends({
            title: "\u63D0\u793A",
            key: key,
            description: typeof action.confirm === 'string' ? action.confirm : action.confirm(record, index),
            disabled: !!action.disabled,
            okText: "\u786E\u5B9A",
            cancelText: "\u53D6\u6D88",
            onConfirm: function onConfirm() {
              var _action$onClick;
              (_action$onClick = action.onClick) === null || _action$onClick === void 0 ? void 0 : _action$onClick.call(action, record, index);
            }
          }, action.confirmProps), /*#__PURE__*/React.createElement(Button, _extends({
            disabled: !!action.disabled,
            loading: !!action.loading,
            type: "primary"
          }, action.props), action.content || ''));
        }
        /**
         * 普通方式 - 展示内容按钮
         */
        return /*#__PURE__*/React.createElement(Button, _extends({
          key: key,
          loading: !!action.loading,
          disabled: !!action.disabled,
          type: "primary",
          onClick: function onClick() {
            var _action$onClick2;
            (_action$onClick2 = action.onClick) === null || _action$onClick2 === void 0 ? void 0 : _action$onClick2.call(action, record, index);
          }
        }, action.props), action.content);
      }));
    }
  }];
};
var handleSort = function handleSort(props, pagination) {
  return [{
    title: props.sortTitle || '序号',
    render: function render(_, __, index) {
      if (pagination) {
        return index + 1 + (((pagination === null || pagination === void 0 ? void 0 : pagination.current) || 1) - 1) * ((pagination === null || pagination === void 0 ? void 0 : pagination.pageSize) || 10);
      } else {
        return index + 1;
      }
    }
  }];
};
var handleCell = function handleCell(columns) {
  return columns.map(function (column) {
    return _objectSpread(_objectSpread({}, column), {}, {
      render: function render(text) {
        if (typeof column.ellipsis === 'boolean' && column.ellipsis) {
          return /*#__PURE__*/React.createElement(Tooltip, _extends({
            title: text
          }, column.ellipsisProps), text);
        } else {
          return /*#__PURE__*/React.createElement("div", null, text);
        }
      }
    });
  });
};
var Tabler = function Tabler(props) {
  var _props$columns = props.columns,
    columns = _props$columns === void 0 ? [] : _props$columns,
    _props$dataSource = props.dataSource,
    dataSource = _props$dataSource === void 0 ? [] : _props$dataSource,
    _props$actions = props.actions,
    actions = _props$actions === void 0 ? null : _props$actions,
    onPageChange = props.onPageChange;
  var _useSetState = useSetState({
      current: 1,
      pageSize: 10
    }),
    _useSetState2 = _slicedToArray(_useSetState, 2),
    state = _useSetState2[0],
    setState = _useSetState2[1];
  var pagination = typeof props.pagination === 'boolean' ? props.pagination : _objectSpread({
    current: state.current,
    pageSize: state.pageSize,
    total: dataSource.length,
    showTotal: function showTotal(value) {
      return "\u5171 ".concat(value, " \u6761");
    },
    onChange: function onChange(page, pageSize) {
      setState({
        current: page,
        pageSize: pageSize
      });
      onPageChange === null || onPageChange === void 0 ? void 0 : onPageChange({
        page: page,
        size: pageSize,
        pageSize: pageSize
      });
    }
  }, props.pagination);
  return /*#__PURE__*/React.createElement(Table, _extends({}, props, {
    columns: [].concat(_toConsumableArray(handleSort(props, pagination) || []), _toConsumableArray(handleCell(columns) || []), _toConsumableArray(handleActions(actions) || [])),
    pagination: pagination,
    dataSource: dataSource
  }));
};
export default Tabler;