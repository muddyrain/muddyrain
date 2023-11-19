---
nav:
  title: components
  path: /components
  order: 2
---

## 代码演示

<code src="./demo/demo1.tsx"></code>


### Tabler - Props

| 参数         | 说明     | 类型           | 描述信息 | 默认值 |
| ------------| -------- | -----------   | ------  | ----- |
| className | 类名 | `string`|  -    | ''
| style | 样式 | `React.CSSProperties`|  -    | {}
| rowKey | 行key | `string`|  -    | 'key'
| actions | 操作项 | `TablerActionsProps[] | null`|  -    | []
| actionsProps | 操作项参数 | `TablerProps['columns'][number]`|  -    | {}
| actionsWidth | 操作列宽度 | `number`|  -    | 200
| sortTitle | 排序标题 | `string`|  -    | '序号'
| sortWidth | 排序宽度 | `number`|  -    | 80
| showSort | 显示宽度 | `boolean`|  -    | true
| autoHeight | 高度自适应 | `boolean`|  -    | false
| sortProps | 排序参数 | `TablerProps['columns'][number]`|  -    | {}
| columns | 表格列的配置 | `(ColumnType<RecordType> & { ellipsis?: boolean; ellipsisProps?: TooltipProps;)[]` |  -    | []
| onPageChange | 监听分页 | ` (props: { page: number; pageSize: number; size: number;}) => void`|  -    | {}
| tableProps | antd 表格所有参数 | TableProps | 可用于 antd-表格组件所有的参数 | {} |
