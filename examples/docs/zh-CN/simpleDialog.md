## SimpleDialog 简单会居中的弹窗
**el-dialog的body部门没有高度,所以写了一个简单的表格,适配一些简单场景,复杂情况还是推荐用el-dialog**
###  simpleDialog 使用
表格的body部分的宽高是可以被继承的
:::demo 
```html
<template>
    <el-button @click="dialogVisible=true">打开弹窗</el-button>
    <el-simple-dialog @open='handleOpen' @closed='handleClosed' title="简单弹窗" :closeOnClickModal="true" :showViewModel.sync="dialogVisible" >
        <div style="border:1px solid red;height:100%"></div>
    </el-simple-dialog>
</template>

<script>
  export default {
    data() {
      return {
        dialogVisible: false
      };
    },
    methods: {
        handleOpen(){
            console.log(111)
        },
        handleClosed(){
            console.log(222)
        }
    }
  };
</script>
```
:::
### Attributes
| 参数      | 说明          | 类型      | 可选值                           | 默认值  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| showViewModel   | 控制弹窗的显隐，记得加.sync | boolean | — | el-button的参数 |
| title     | 标题 | string | — |  |
| wd | body部分的宽度 | string    | — | 50% |
| ht | body部分的高度 | string    | — | 40% |
| showClose| 是否隐藏和显示关闭按钮 | boolen | — | true |
| closeOnClickModal| 是否可以点击其他地方关闭 | boolen | — | false |
### Slot
| name | 说明 |
|------|--------|
| — | 弹窗的默认显示内容 |
| title | title的插槽 |

### Events
| 事件名称      | 说明    | 回调参数      |
|---------- |-------- |---------- |
| opened  | 弹窗的打开回调 | — |
| closed  |弹窗的关闭回调 | — |
