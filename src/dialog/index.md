---
nav:
  title: components
  path: /components
  order: 1
---

## 代码演示

<code src="./demo/demo1.tsx"></code>  


## API

``` tsx | pure
import { Dialog } from "muddyrain"

export default function (){
  return (<Dialog openText="打开">哈哈哈</Dialog>)
}
```

### Dialog - Props

| 参数         | 说明     | 类型           | 描述信息 | 默认值 |
| ------------| -------- | -----------   | ------  | ----- |
| className  | 类名  | `string`  | - | - |
| style  | 样式  | `React.CSSProperties`  | - | - |
| children  | 子节点  | `React.ReactNode` | JSX.Element  | - | - |
| title  | 标题  | `string`  | - | 弹框标题 |
| isDrag  | 是否拖拽  | `boolean`  | - | false |
| width  | 宽度  | `SizeProps` | `number`  | - | medium |
| openText  | 打开按钮文字  | `React.ReactNode`  | - | 打开 |
| okText  | 确定按钮文字  | `React.ReactNode`  | - | 确定 |
| cancelText  | 取消按钮文字  | `React.ReactNode`  | - | 取消 |
| okButtonProps  | 确定按钮配置项  | `ButtonProps`  | - | {} |
| cancelButtonProps  | 取消按钮配置项  | `ButtonProps`  | - | {} |
| openButtonProps  | 打开按钮配置项  | `ButtonProps`  | - | {} |
| onOpen  | 打开之前的操作  | `() => void`  | - | - |
| onOk  | 点击确定之后的操作  | `(hide: () => void) => boolean`  | - | - |
| onCancel  | 关闭之后的操作  | `() => void ` | - | - |
| afterClose  | 关闭之前的操作  | `() => void`  | - | - |
| footer  | 自定义footer  | `(close: () => void) => React.ReactNode  React.ReactNode  any`  | - | - |
| renderOpenButton  | 自定义渲染打开按钮  | `(int: () => void) => void`  | - | - |
| changeVisible  | 监听显示  | `(bool: boolean) => void`  | - | - |


