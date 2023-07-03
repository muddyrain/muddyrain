---
nav:
  title: components
  path: /components
  order: 2
---

## 代码演示
<code src="./demo/demo1.tsx" description="demo"></code>

## 实例代码
``` tsx | pure
<ScrollTable
  style={{ height: 400 }}
  isAutoPlay={true}
  duration={200}
  waitTime={1000}
  hoverPause={true}
  onClick={(record, index) => {
    console.log(record, index);
  }}
  dataSource={Array.from({ length: 5 }).map((_, index) => ({
    name: '陈子涵' + (index + 1),
    age: '21',
    address: '广东省深圳市',
    date: '2023-01-01 12:00:00',
  }))}
  columns={[
    {
      title: '姓名',
      width: '450px',
      dataIndex: 'name',
      align: 'center',
      headAlign: 'center',
      render: () => {
        return (
          <div
            style={{
              width: '100%',
              height: 50,
              display: 'flex',
              alignItems: 'center',
            }}
          >
            <img
              src="https://p3-passport.byteimg.com/img/user-avatar/09e00df42d9bfe86f3b0c7c8cdbf1c84~100x100.awebp"
              alt=""
            />
            <span>陈子涵</span>
          </div>
        );
      },
    },
    {
      title: '年龄',
      dataIndex: 'age',
      render(text) {
        return text + '岁';
      },
    },
    {
      title: '地址',
      dataIndex: 'address',
      ellipsis: true,
      cursor: 'pointer',
    },
    {
      title: '日期',
      dataIndex: 'date',
    },
  ]}
/>
```


### ScrollTable-Props

| 参数         | 说明     | 类型           | 描述信息 | 默认值 |
| -------------| -------- | -----------   | ------  | ----- |
| columns | 表格列的配置描述，具体项见下表 | <a href="#columns-type" >ColumnType</a>|  -    | -
| className | 类名 | `string`|  -    | ''
| style | 样式 | `React.CSSProperties`|  -    | {}
| headClassName | 表头容器类名 | `string`|  -    | ''
| rowClassName | 行容器类名 | `string`|  -    | ''
| headStyle | 表头容器样式 | `React.CSSProperties`|  -    | {}
| rowStyle | 行容器样式 | `React.CSSProperties`|  -    | {}
| isAutoPlay | 是否自动播放 | `boolean`|  -    | true
| headSpacing | 表头每列间距 | <a href="#spacing-type" >SpacingType</a> |  内用于 padding 属性    | [10,15]
| headSpacing | 表头每列间距 | <a href="#spacing-type" >SpacingType</a> |  内用于 padding 属性    | [10,15]
| headBackgroundColor | 表头背景颜色 | `backgroundColor(string) \| backgroundColor(string)[] `|  -    | <a href="https://www.tailwindcss.cn/docs/customizing-colors" target="_blank">blue-400 (tailwind 颜色)</a>
| rowBackgroundColor | 行背景颜色 | `backgroundColor(string)`|  有条纹的:   [cyan-700,sky-700]  | <a href="https://www.tailwindcss.cn/docs/customizing-colors" target="_blank">cyan-700 (tailwind 颜色)</a>
|  headTextColor | 表头文字颜色 | `color(string)`| -  | white
|  rowTextColor | 行文字颜色 | `color(string)`| -  | white
| striped | 有条纹的 | `boolean`|  -    | true
| duration | 滚动动画执行时长 (毫秒) | `number`|  -    | 1000
| delay | 延时停留时长 (毫秒) | `number`|  -    | 250
| waitTime | 轮播时间间隔 (毫秒) | `number`|  -    | 2000
| rowScrollHeight | 每行滚动行高 | `number`|  根据第一行数据自动计算 如果添加则覆盖    | -
| hoverPause | 悬浮暂停 | `boolean`|  -    | false
| onClick | 点击事件 | <a href="#mouse-event-handler" >MouseEventHandler</a>|  -    | -
| onMouseOver | 鼠标进入事件 | <a href="#mouse-event-handler" >MouseEventHandler</a>|  -    | -
| onMouseLeave | 鼠标离开事件 | <a href="#mouse-event-handler" >MouseEventHandler</a>|  -    | -
| onMouseMove | 鼠标移动事件 | <a href="#mouse-event-handler" >MouseEventHandler</a>|  -    | -


#### spacing-type
| SpacingType类型           | 描述信息 | 默认值 |
| ------------| -------- | ------- |
| `[number \| string, number \| string]` | - | [10,15]
| `[number \| string, number \| string, number \| string, number \| string]` | - | [10,15,10,15]
| `number` | - | - |
| `string` | - | - |
#### mouse-event-handler
| MouseEventHandler类型           | 描述信息 | 默认值 |
| ------------| -------- | ------- |
| `(record: any,index: number,event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void` | - | -

#### columns-type

`ColumnType 类型`

| 参数         | 说明     | 类型           | 描述信息 | 默认值 |
| -------------| -------- | -----------   | ------  | ----- |
| className | 类名 | `string`|  -    | ''
| dataIndex | 列数据在数据项中对应的路径 | `string`|  -    | ''
| ellipsis | 超过宽度将自动省略 | `boolean`|  -    | false
| render | 生成复杂数据的渲染函数，参数分别为当前行的值，当前行数据，行索引 | `(text: any,record: any,index: number) => string | React.ReactNode | JSX.Element`|  -    | -
| title | 列头显示文字 | `string`|  -    | -
| width | 列宽度 | `boolean`|  每列自动平均占比宽度    | -
| align | 行数据对齐方式 | <a href="#align-type" >AlignType</a> |  -    | 'left'
| headAlign | 表头对齐方式 | <a href="#align-type" >AlignType</a>|  -    | 'left'
| ellipsisClassName | 省略元素类名 | `string`|  -    | -
| ellipsisPlacement | 省略方向 | `Placement`|  -    | 'top'
| cursor | 指针 | `cursor`|  css-cursor   | 'auto'


#### align-type
| AlignType类型           | 描述信息 |
| ------------| -------- |
| `left` | `左对齐` |
| `center` | `居中` |
| `right` | `右对齐` |
