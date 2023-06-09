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
| sortTitle | 排序标题 | `string`|  -    | '序号'
| columns | 表格列的配置 | `(ColumnType<RecordType> & { ellipsis?: boolean; ellipsisProps?: TooltipProps;)[]` |  -    | []
| onPageChange | 监听分页 | ` (props: { page: number; pageSize: number; size: number;}) => void`|  -    | {}
| tableProps | antd 表格所有参数 | TableProps | 可用于 antd-表格组件所有的参数 | {} |
