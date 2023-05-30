---
nav:
  title: components
  path: /components
  order: 1
---

## 代码演示

<code src="./demo/demo1.tsx" ></code>

## API
```tsx | pure
import { createFormer } from "muddyrain"
import {
	Input,
  Form
} from 'antd';
const Former = createFormer(Form, {
	elements: {Input},
});

export default function (){
  return <Fromer 	dataSource={[{key: 'username',label: '用户名',view: 'Input'},]} />
}
```

### 操作使用

``` tsx
import createFormer from "./index"
import {
	Input,
  Form
} from 'antd';
const Former = createFormer(Form, {
	elements: {Input},
});
export default () => {
  const [$form] = Former.useForm();
  return <Former
				form={$form}
				column={3}
				resetText={null}
				actionMode="wrapper"
				onSubmit={(e) => {
					console.log(e);
				}}
				dataSource={[
          {
							key: 'username',
							label: '用户名',
							view: 'Input',
							initialValue: '',
							onlyEntryNumber: true,
							rules: ['integer'],
							required: true,
							Input: {
                // antd -> Input 组件的参数
							},
						},
        ]}
      />
}
```


### Former - Props



| 参数         | 说明     | 类型           | 描述信息 | 默认值 |
| ------------| -------- | -----------   | ------  | ----- |
| className | 类名 | `string;`|  react - className     | {}
| style | 样式 | `React.CSSProperties;`| react - style     | {}
| onSubmit | 提交表单且数据验证成功后回调事件 | `FormProps['onFinish'];`| -     | undefined
| onReset | 重置表单后回调事件 | `() => void;`| 重置表单后回调事件    | undefined
| onFinish | 提交表单且数据验证成功后回调事件 | `FormProps['onFinish'];`| -     | undefined
| onFinishFailed | 提交表单且数据验证失败后回调事件 | `FormProps['onFinishFailed'];`| -     | undefined
| form | Form 实例 | `FormInstance;`| 默认内部创建实例，如调用可自创建实例 `const [$form] = Fromer.useFrom()`     | Form->FormInstance
| column | Col 布局 | `number;`| - | 3
| dataSource | 数据源 | `DataSourceItem[]  ((data: any) => DataSourceItem[])`| -  | []
| wrapperCol | 容器布局 | `number;`| -     | 16
| labelCol | 标签布局 | `number;`| -    | 6
| submitText | 提交按钮文本 | `string  null`| 如果值为 `null` 则不显示该按钮 | '提交'
| resetText | 重置按钮文本 | `string  null`| 如果值为 `null` 则不显示该按钮 | '重置'
| submitProps | 提交按钮的props | `ButtonProps;`| 按钮的参数 - 源自 antd button | {}
| resetProps | 重置按钮的props | `ButtonProps;`| 按钮的参数 - 源自 antd button | {}
| actionMode | 操作按钮模式 | `inner  wrapper`| type -> `'inner' | 'wrapper'` | 'wrapper'
| renderAction | 自定义渲染操作按钮 | `((submit: () => void, reset: () => void) => JSX.Element)`| 自定义渲染的按钮组，需返回JSX元素对象 | undefined
