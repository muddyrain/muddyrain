function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
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
import { Button, Col, Row, Space } from 'antd';
import React, { useState } from 'react';
import CustomRules from "./rules";
var createFormer = function createFormer(Form) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {
    elements: {},
    rules: {}
  };
  var elements = options.elements,
    _rules = options.rules;
  // Merge custom rules with created rules
  var rules = _objectSpread(_objectSpread({}, CustomRules), _rules);
  var Former = function Former(_ref) {
    var dataSource = _ref.dataSource,
      _form = _ref.form,
      _ref$column = _ref.column,
      column = _ref$column === void 0 ? 3 : _ref$column,
      _ref$labelCol = _ref.labelCol,
      labelCol = _ref$labelCol === void 0 ? 6 : _ref$labelCol,
      _ref$wrapperCol = _ref.wrapperCol,
      wrapperCol = _ref$wrapperCol === void 0 ? 16 : _ref$wrapperCol,
      _onFinish = _ref.onFinish,
      onSubmit = _ref.onSubmit,
      onReset = _ref.onReset,
      onFinishFailed = _ref.onFinishFailed,
      style = _ref.style,
      className = _ref.className,
      _ref$submitText = _ref.submitText,
      submitText = _ref$submitText === void 0 ? '提交' : _ref$submitText,
      _ref$resetText = _ref.resetText,
      resetText = _ref$resetText === void 0 ? '重置' : _ref$resetText,
      submitProps = _ref.submitProps,
      resetProps = _ref.resetProps,
      _ref$actionMode = _ref.actionMode,
      actionMode = _ref$actionMode === void 0 ? 'wrapper' : _ref$actionMode,
      renderAction = _ref.renderAction;
    var colSpan = Math.floor(24 / column);
    var _useState = useState({}),
      _useState2 = _slicedToArray(_useState, 2),
      formData = _useState2[0],
      setFormData = _useState2[1];
    var _Form$useForm = Form.useForm(),
      _Form$useForm2 = _slicedToArray(_Form$useForm, 1),
      initForm = _Form$useForm2[0];
    var $form = _form || initForm;
    var DataSources = function DataSources(_dataSource) {
      return _dataSource.map(function (item, index) {
        var _item$rules;
        var formItemProps = {
          label: item.label
        };
        // If this View is not registered in elements, an error will be reported
        if (typeof item.view === 'string' && !(item.view in elements)) {
          throw new Error("The ".concat(item.view, " component is Not registered in elements"));
        }
        var Element = typeof item.view === 'function' ? item.view : elements[item.view];

        // prefix placeholder
        var checksPlaceholderList = ['Select', 'TreeSelect', 'Cascader'];
        var prefixPlaceholder = item.prefixPlaceholder || '请输入';
        if (typeof item.view === 'string') {
          if (checksPlaceholderList.includes(item.view)) {
            prefixPlaceholder = '请选择';
          }
        }
        var formItemRules = ((_item$rules = item.rules) === null || _item$rules === void 0 ? void 0 : _item$rules.map(function (rule) {
          if (typeof rule === 'string' && rule in rules) {
            return rules[rule];
          } else {
            return rule;
          }
        })) || [];
        /**
         * 是否显示 且移除key在表单中
         */
        var _visible = true;
        if (typeof item.visible === 'boolean') {
          _visible = item.visible === undefined ? true : !!item.visible;
        } else if (typeof item.visible === 'function' && item.visible) {
          _visible = item.visible($form.getFieldValue(item.key), index);
        }
        if (_visible) {
          return /*#__PURE__*/React.createElement(Col, {
            key: item.key,
            span: item.span || colSpan
          }, /*#__PURE__*/React.createElement(Form.Item, _extends({
            hidden: item.hide,
            initialValue: item.initialValue,
            style: {
              width: item.width || '100%'
            },
            rules: [{
              required: item.required,
              message: item.requiredMsg || "".concat(item.label, "\u4E0D\u80FD\u4E3A\u7A7A")
            }].concat(_toConsumableArray(formItemRules))
          }, item.onlyEntryNumber && {
            getValueFromEvent: function getValueFromEvent(e) {
              return e.target.value.replace(/[^\d]/g, '');
            }
          }, {
            name: item.key
          }, formItemProps), /*#__PURE__*/React.createElement(Element, _extends({
            placeholder: item.placeholder || prefixPlaceholder + item.label
          }, item.allowClear && {
            allowClear: item.allowClear
          }, item[item.view] || {}))));
        }
        return null;
      });
    };
    var ActionButtons = function ActionButtons() {
      if (renderAction) {
        return renderAction(function () {
          $form.validateFields().then(function (values) {
            onSubmit === null || onSubmit === void 0 ? void 0 : onSubmit(values);
          });
        }, function () {
          $form.resetFields();
          onReset === null || onReset === void 0 ? void 0 : onReset();
        });
      } else {
        return !!(submitText || resetText) ? /*#__PURE__*/React.createElement(Space, null, submitText && /*#__PURE__*/React.createElement(Button, _extends({
          type: "primary",
          htmlType: "submit"
        }, submitProps || {}), submitText), resetText && /*#__PURE__*/React.createElement(Button, _extends({
          type: "default",
          htmlType: "reset"
        }, resetProps, {
          onClick: function onClick() {
            $form.resetFields();
            onReset === null || onReset === void 0 ? void 0 : onReset();
          }
        }), resetText)) : /*#__PURE__*/React.createElement(React.Fragment, null);
      }
    };
    return /*#__PURE__*/React.createElement(Form, {
      form: $form,
      style: style,
      className: className,
      onFinish: function onFinish(values) {
        onSubmit === null || onSubmit === void 0 ? void 0 : onSubmit(values);
        _onFinish === null || _onFinish === void 0 ? void 0 : _onFinish(values);
      },
      onFinishFailed: onFinishFailed,
      onValuesChange: function onValuesChange() {
        setFormData($form.getFieldsValue());
      },
      labelCol: {
        span: labelCol
      },
      wrapperCol: {
        span: wrapperCol
      }
    }, /*#__PURE__*/React.createElement(Row, {
      gutter: 15
    }, Array.isArray(dataSource) ? DataSources(dataSource) : DataSources(dataSource(formData)), actionMode === 'inner' && /*#__PURE__*/React.createElement(ActionButtons, null)), actionMode === 'wrapper' && /*#__PURE__*/React.createElement(ActionButtons, null));
  };
  Former.displayName = 'Former';
  Former.useForm = Form.useForm;
  return Former;
};
export default createFormer;