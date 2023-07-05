---
nav:
  title: components
  path: /components
  order: 2
---

## 代码演示

<code src="./demo/demo1.tsx" description="demo"></code>


<!-- ## 容错处理

<code src="./demo/demo2.tsx" description="demo"></code>

## API

``` tsx | pure
import { Waterfall } from "muddyrain"

export default function (){
  return (<Waterfall dataSource={[{url:'xxx.jpg'},{url:'xxx.jpg'}]} />)
}
```

### Waterfall - Props

> 注意: 瀑布流的滚动事件必须为页面视口最底部才触发。

| 参数         | 说明     | 类型           | 描述信息 | 默认值 |
| ------------| -------- | -----------   | -------  | ------ |
| width  | 图片宽度  | `number`  | - | 200 |
| spacing  | 元素间距  | `number`  | - | 10 |
| renderItem  | 自定义渲染数据  | `(data: `<a href="#render-data-source" >RenderDataSource</a>`, index: number) => React.ReactNode`  | - | - |
| renderKey  | 自定义渲染Key  | `(data: `<a href="#render-data-source" >RenderDataSource</a>`, index: number) => string`  | - | `index` |
| dataSource  | 数据源  | <a href="#data-source" >DataSource</a>`[]`  | - | `Required` |
| threshold  | 临界点  | `number`  | 滚动距离事件的临界点 | 10 |
| onScrollTop  | 滚动顶部监听 | `() => Promise<`<a href="#data-source" >DataSource</a>`[]> \| `<a href="#data-source" >DataSource</a>`[]`  | 需返回数据或promise类型的数据 | - |
| onScrollBottom  | 滚动底部监听  | `() => Promise<`<a href="#data-source" >DataSource</a>`[]> \| `<a href="#data-source" >DataSource</a>`[]`  | 需返回数据或promise类型的数据 | - |


#### render-data-source
| RenderDataSource类型           | 类型 | 描述信息 | 默认值 |
| ------------| -------- | -------- | -------- |
| `left` | `number` | 距离左边的距离 | 0 |
| `top` | `number` | 距离上边的距离 | 0 |
| `url` | `string` | 图片地址 | `required` |
| `isLoad` | `boolean` | 是否加载完毕 | false |
| `isError` | `boolean` | 是否加载报错 | false |
| `errorInfo` | `string \| Event` | 报错信息 | - |
| `width` | `number` | 图片宽度 | 0 |
| `height` | `number` | 图片高度 | 0 |
#### data-source
| DataSource类型           | 类型 | 描述信息 | 默认值 |
| ------------| -------- | -------- | -------- |
| `url` | `string` | 图片地址 | `required` |

 -->
