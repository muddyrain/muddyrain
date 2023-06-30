function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
/**
 * title: 基础用法
 * description: 加装过的form表单组件，拥有全新的类型支持系统
 */

import { Cascader, Checkbox, DatePicker, Form, Input, Radio, Select, TimePicker, TreeSelect } from 'antd';
import React from 'react';
import createFormer from "../index";
var Test = function Test(_ref) {
  var onChange = _ref.onChange;
  return /*#__PURE__*/React.createElement("input", {
    type: "text",
    onChange: onChange
  });
};
var Former = createFormer(Form, {
  elements: {
    Input: Input,
    Select: Select,
    DatePicker: DatePicker,
    TimePicker: TimePicker,
    TextArea: Input.TextArea,
    Cascader: Cascader,
    CheckboxGroup: Checkbox.Group,
    TreeSelect: TreeSelect,
    RadioGroup: Radio.Group
  }
});
var Demo = function Demo() {
  var _Former$useForm = Former.useForm(),
    _Former$useForm2 = _slicedToArray(_Former$useForm, 1),
    $form = _Former$useForm2[0];
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Former, {
    form: $form,
    column: 3,
    resetText: null,
    actionMode: "wrapper",
    onSubmit: function onSubmit(e) {
      console.log(e);
    },
    dataSource: function dataSource(data) {
      console.log(data);
      return [{
        key: 'a',
        label: '用户名',
        view: 'Input',
        initialValue: '',
        placeholder: '掉毛',
        requiredMsg: '哒哒哒',
        onlyEntryNumber: true,
        rules: ['integer'],
        required: true,
        Input: {
          // placeholder: '请输入用户名自定义',
        }
      }, {
        key: 'b',
        label: '选择器',
        view: 'Select',
        allowClear: true,
        Select: {
          options: [{
            value: '北京',
            label: '北京'
          }, {
            value: '上海',
            label: '上海'
          }, {
            value: '杭州',
            label: '杭州'
          }]
        }
      }, {
        key: 'c',
        label: '日期选择器',
        view: 'DatePicker',
        Select: {
          placeholder: '请输入选择器'
        }
      }, {
        key: 'd',
        label: '时间选择器',
        view: 'TimePicker',
        Select: {
          placeholder: '请输入选择器'
        }
      }, {
        key: 'e',
        label: '级联选择器',
        view: 'Cascader',
        Cascader: {
          options: [{
            value: 'zhejiang',
            label: 'Zhejiang',
            children: [{
              value: 'hangzhou',
              label: 'Hangzhou',
              children: [{
                value: 'japan',
                label: 'West Lake'
              }]
            }]
          }]
        }
      }, {
        key: 'f',
        label: '复选框组',
        view: 'CheckboxGroup',
        CheckboxGroup: {
          options: [{
            label: 'Apple',
            value: 'Apple'
          }, {
            label: 'Pear',
            value: 'Pear'
          }, {
            label: 'Orange',
            value: 'Orange'
          }]
        }
      }, {
        key: 'g',
        label: '单选框组',
        view: 'RadioGroup',
        RadioGroup: {
          options: [{
            label: 'Apple',
            value: 'Apple'
          }, {
            label: 'Pear',
            value: 'Pear'
          }, {
            label: 'Orange',
            value: 'Orange'
          }]
        }
      }, {
        key: 'h',
        label: '文本框',
        view: 'TextArea'
      }, {
        key: 'i',
        label: '树形选择',
        view: 'TreeSelect',
        TreeSelect: {
          treeData: [{
            value: 'parent 1',
            title: 'parent 1',
            children: [{
              value: 'parent 1-0',
              title: 'parent 1-0',
              children: [{
                value: 'leaf1',
                title: 'leaf1'
              }, {
                value: 'leaf2',
                title: 'leaf2'
              }]
            }]
          }]
        }
      }, {
        key: 'a2',
        label: '用户名',
        view: Test
      }];
    }
  }));
};
export default Demo;