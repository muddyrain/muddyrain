---
nav:
  title: components
  path: /components
  order: 1
---

## 代码演示 栅格布局

<code src="./demo/demo1.tsx" ></code>


## 代码演示 行内布局

<code src="./demo/demo2.tsx" ></code>




### Former - Props

| 参数         | 说明     | 类型           | 描述信息 | 默认值 |
| ------------| -------- | -----------   | ------  | ----- |
| className | 类名 | `string`|  react - className     | `''`
| itemClassName | item类名 | `string`|  item 类名    | `''`
| layout | 布局方式 | `grid \| flex \| inline`|  栅格布局 \| 行内布局 | `grid`
| itemGap | 间距 | `number`|  仅在 layout 为 `flex` \| `inline` 时生效 | `16`
| style | 样式 | `React.CSSProperties`| react - style     | {}
| onSubmit | 提交表单且数据验证成功后回调事件 | `FormProps['onFinish']`| -     | undefined
| onReset | 重置表单后回调事件 | `() => void`| 重置表单后回调事件    | undefined
| onFinish | 提交表单且数据验证成功后回调事件 | `FormProps['onFinish']`| -     | undefined
| onFinishFailed | 提交表单且数据验证失败后回调事件 | `FormProps['onFinishFailed']`| -     | undefined
| form | Form 实例 | `FormInstance`| 默认内部创建实例，如调用可自创建实例 `const [$form] = Fromer.useFrom()`     | Form->FormInstance
| column | Col 布局 | `number`| - | 3
| dataSource | 数据源 | `DataSourceItem[]  ((data: any) => DataSourceItem[])`| -  | []
| wrapperCol | 容器布局 | `number`| 仅在 layout 为 `grid` 时生效    | 16
| labelCol | 标签布局 | `number`| 仅在 layout 为 `grid` 时生效   | 6
| submitText | 提交按钮文本 | `string  null`| 如果值为 `null` 则不显示该按钮 | '提交'
| resetText | 重置按钮文本 | `string  null`| 如果值为 `null` 则不显示该按钮 | '重置'
| submitProps | 提交按钮的props | `ButtonProps`| 按钮的参数 - 源自 antd button | {}
| itemProps | FormItem的props | `FormItemProps`| 表单项的参数 - 源自 antd FormItem | {label:'自定义'}
| resetProps | 重置按钮的props | `ButtonProps`| 按钮的参数 - 源自 antd button | {}
| actionMode | 操作按钮模式 | `inner  wrapper`| type -> `'inner' | 'wrapper'` | 'wrapper'
| renderAction | 自定义渲染操作按钮 | `((submit: () => void, reset: () => void) => JSX.Element)`| 自定义渲染的按钮组，需返回JSX元素对象 | undefined

### FormerItem - Props

| 参数         | 说明              | 类型                      | 描述信息             | 默认值                 |
| --------------| ----------------- | ----------------------   | ------------------  | -------------------- |
| label         |  标签              |   `string ` | - | 必填  |
| key           |  输出值的`key`值    |  `string  number ` | key | 必填 |
| initialValue  |  初始值            |  `any ` | - | '' |
| requiredMsg   |  必选项提示文本      |  `string ` | - | xxx为必填 |
| placeholder   |  前缀占位字符        |  `string ` | - | 请输入/请选择xxxx |
| onlyEntryNumber|  仅支持输入数字      |  `boolean ` | - | false |
| allowClear    |  支持清除            |  `boolean ` | - | false |
| view          |  展示元素            |  `keyof AntdElementProps \|  React.FC<{value: T; onChange: (value: T) => void; }> ` | 可选择性的 antd 表单组件 或者 自定义 函数组件 | 必填 |
| viewProps     |  视图组件参数         |  `object`  |   -  |  自定义组件参数 |
| prefixPlaceholder|  前缀占位符       |  `string ` | - | '请输入/请选择' |
| required      |  是否为必填          |  `boolean ` | - | false |
| hide          |  是否隐藏            |  `boolean ` | - | false |
| visible       |  是否显示            |  `boolean  ((record: any, index: number) => boolean) ` | - | true |
| rules         |  校验规则            |  `(keyof typeof rules)[]  FormItemProps['rules']  string[] ` | 字符串为自定义类型 - 必须是 自定义rules内的 否则不生效 对象则为标准 `FormItem` 规则 | [] |
| width         |  宽度               |  `number \| string ` | - | 'auto' |
| span          |  Col 布局           |  `number ` | - | 8 |
