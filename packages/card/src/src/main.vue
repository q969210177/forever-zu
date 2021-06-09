<template>
  <div class="el-card" :class="shadow ? 'is-' + shadow + '-shadow' : 'is-always-shadow'">
     <div class="el-card__header " v-if="showHeader">
       <slot name="header">
          <div class="">
          <slot name="left">
            {{title}}
          </slot>
       </div>
         <div class="">
          <slot name="right"></slot>
        </div>
       </slot>
     </div>
     <div class="el-card__body" :style="bodyStyle">
        <div :class="showHeader+'showHeader'">
          <slot></slot>
        </div>
     </div>
  </div>
</template>

<script>
  export default {
    name: 'ElCard',
    props: {
      // 是否显示头部
      showHeader: {
        type: Boolean,
        default: true
      },
      // card主题的style
      bodyStyle: { },
      // 阴影
      shadow: {
        type: String
      },
      // position: {
      //   type: String,
      //   default: 'top'
      // },
      // 显示的字
      title: {
        type: String
      }
      // 字体颜色
      // color: {
      //   type: String
      // }
    },
    mounted() {
    }
  };
</script>
