## FormButton 提交取消按钮
在可以配合着 simpleDialog 使用
### 基本用法
:::demo 
```html
<template>
    <div class='form-button-box'>
         <el-form-button size="mini"></el-form-button>
    </div> 
</template>

<script>
  export default {
    data() {
      return {
        dialogVisible: false
      };
    },
    methods: {
      handleClose(done) {
        this.$confirm('确认关闭？')
          .then(_ => {
            done();
          })
          .catch(_ => {});
      }
    }
  };
</script>
```
:::
### 自定义按钮
confirm 设置第一个按钮的样子 reset设置第二个按钮的样子 自带一个默认插槽
:::demo 
```html
<template>
    <div class='form-button-box'>
         <el-form-button size="mini" :confirm="{type:'danger',icon:'el-icon-search'}" :reset="{type:'text'}" confirmText="默认的第一个按钮的文字" resetText="默认的第二个按钮的文字">
             <el-button type="success" size="mini">查看</el-button>
         </el-form-button>
    </div> 
</template>

<script>
  export default {
    data() {
      return {
        dialogVisible: false
      };
    },
    methods: {
      handleClose(done) {
        this.$confirm('确认关闭？')
          .then(_ => {
            done();
          })
          .catch(_ => {});
      }
    }
  };
</script>
```
:::
### 配合着 simpleDialog 使用
confirm 设置第一个按钮的样子 reset设置第二个按钮的样子 自带一个默认插槽
:::demo 
```html
<template>
    <el-button @click="dialogVisible=true">打开弹窗</el-button>
    <el-simple-dialog :showViewModel.sync="dialogVisible">
        <div style="{width:100%;height:100%}">
        <el-form-button  :confirm="{type:'danger',icon:'el-icon-search'}" :reset="{type:'text'}" confirmText="默认的第一个按钮的文字" resetText="默认的第二个按钮的文字">
             
         </el-form-button>
        </div>
        
    </el-simple-dialog>
    <!-- <div class='form-button-box'>
         
    </div>  -->
</template>

<script>
  export default {
    data() {
      return {
        dialogVisible: false
      };
    },
    methods: {}
  };
</script>
```
:::
### Attributes
| 参数      | 说明          | 类型      | 可选值                           | 默认值  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| confirm   | 第一个按钮的样式设置 | {} | — | el-button的参数 |
| reset     | 第二个按钮的样式设置 | {} | — | el-button的参数 |
| confirmText | 第一个按钮的内部文字 | string    | — | 提交 |
| resetText | 第一个按钮的内部文字 | string    | — | 重置 |
| resetIsShow| 是否显示第二个按钮 | boolen | — | true |
### Slot
| name | 说明 |
|------|--------|
| — | 会在初始的两个按钮前面的内容 |

### Events
| 事件名称      | 说明    | 回调参数      |
|---------- |-------- |---------- |
| confirm  | 第一个按钮的点击 | — |
| reset  |第二个按钮的点击 | — |
