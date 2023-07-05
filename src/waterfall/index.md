---
nav:
  title: components
  path: /components
  order: 2
---

<!-- ## 代码演示

<code src="./demo/demo1.tsx" description="demo"></code> -->
## 代码演示

<code src="./demo/demo2.tsx" description="demo"></code>

## API

``` tsx | pure
import { Waterfall } from "muddyrain"

export default function (){
  return (<Waterfall dataSource={['xxx.jpg',['xxx.jpg']]}></Waterfall>)
}
```

### Waterfall - Props

| 参数         | 说明     | 类型           | 描述信息 | 默认值 |
| ------------| -------- | -----------   | ------  | ----- |
| src  | 要裁剪的图片路径  | `string`  | - | - |
| filename  | 文件名称  | `string`  | - | 文件 |
| onFinish  | 返回的裁剪后的图片  | `(image: string) => void`  | - | 无 |
| isShowReview  | 是否显示预览  | `boolean`  | - | true |
| isShowDownload  | 是否显示下载  | `boolean`  | - | true |
| sideColor  | 缩放边界边缘的颜色  | `string`  | - | transparent |
| areaColor  | 缩放区域的颜色  | `string`  | - | #f00000 |
| areaAlpha  | 缩放区域的透明度  | `number`  | - | 0.1 |
