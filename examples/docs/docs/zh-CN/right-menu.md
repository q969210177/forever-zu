## RightMenu 右键弹出菜单
params你传进去的我都会在插槽里面给你传出来  插槽取值 <https://cn.vuejs.org/v2/guide/components-slots.html>
:::demo
```html
<template>
<div>
<el-tree :data="data" :props="defaultProps" @node-contextmenu="rightMenuClick"></el-tree>
<el-right-menu :e="rightMenuParams.e" :params="rightMenuParams.params" :show="rightMenuParams.show">
    <template>
        <el-button @click="rightMenuParams.show=false">关闭</el-button>    
    </template> 
</el-right-menu>
</div>

</template>
<script>
export default {
    data(){
        return{
            rightMenuParams:{
                e:null,
                param:{},
                show:false
            },
            data: [{
            label: '一级 1',
            children: [{
                label: '二级 1-1',
                children: [{
                label: '三级 1-1-1'
                }]
            }]
            }, {
            label: '一级 2',
            children: [{
                label: '二级 2-1',
                children: [{
                label: '三级 2-1-1'
                }]
            }, {
                label: '二级 2-2',
                children: [{
                label: '三级 2-2-1'
                }]
            }]
            }, {
            label: '一级 3',
            children: [{
                label: '二级 3-1',
                children: [{
                label: '三级 3-1-1'
                }]
            }, {
                label: '二级 3-2',
                children: [{
                label: '三级 3-2-1'
                }]
            }]
        }],
        defaultProps: {
          children: 'children',
          label: 'label'
        }
        }
    },
    methods:{
        rightMenuClick(event,data){
            this.rightMenuParams={
                e:event,
                params:data,
                show:true
            }
        }
    }
}
</script>
```
:::
 e: {
      type: MouseEvent
    },
    param: {},
    show: Boolean
### right-menu Attributes
| 参数      | 说明          | 类型      | 可选值                           | 默认值  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
|e |主要通过这个判断鼠标点击哪里 | object |MouseEvent  |MouseEvent |
|param | 传进去的参数我都会在插槽里面给你传出来 但是感觉没什么用 | MouseEvent | 你需要啥在插槽里面拿  |MouseEvent |
|show |控制菜单的隐藏和显示 | boolean | - | - |
