---
nav:
  title: components
  path: /components
  order: 1
---

## 代码演示

<code src="./demo/demo1.tsx" ></code>

## API


``` tsx | pure
const { state, dispatch } = useModels(initialState);
```


### Result

| 参数     | 说明         | 类型                                                                                      | 默认值 |
| -------- | ------------ | ----------------------------------------------------------------------------------------- | ------ |
| state    | 当前存储数据     | `T`                                                                                       | -      |
| dispatch | 修改当前存储数据 | `(state: T) => void` | -      |

### Params

| 参数         | 说明     | 类型           | 默认值 |
| ------------ | -------- | -------------- | ------ |
| initialState | 初始状态 | `T \| () => T` | {}     |
