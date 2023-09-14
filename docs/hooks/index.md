---
nav:
  title: hooks
  order: 1
group: 钩子库
---

# hooks

内置一些 hooks 进行快捷项目开发。


## useExportExcel

导出excel

```typescript pure
import { useExportExcel } from "muddyrain"

const { exportExcel } = useExportExcel('文件名称');

const handleClick = () => {
  exportExcel(columns, data);
}
```

<code src="../../src/hooks/useExportExcel/demo.tsx"></code> 
