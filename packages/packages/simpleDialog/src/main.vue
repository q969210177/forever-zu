<template>
  <!-- <div class="el-simpleDialog"></div> -->
  <transition name="dialog-fade" @after-enter="afterEnter" @after-leave="afterLeave">
    <div  v-if="showViewModel" class="el-simpleDialog">
      <div class="el-simpleDialog__viewModel" :key="key" @click.self.stop="handleWrapperClick">
        <div class="el-simpleDialog__model" :style="{ width: wd, height: ht }">
          <div class="el-simpleDialog__header">
            <!-- @slot title标题区域插槽-->
            <slot name="title">
              <span class="el-simpleDialog__title">{{title}}</span>
            </slot>
            <button type="button" class="el-simpleDialog__headerbtn" v-if="showClose" @click="handleClose">
              <i class="el-simpleDialog__close el-icon el-icon-close"></i>
            </button>
          </div>
          <div class="el-simpleDialog__content" :style="{ height: cht ? cht : '' }">
            <!-- @slot 默认插槽-->
              <slot></slot>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: 'ElSimpleDialog',
  props: {
    /**
     * 控制显隐，记得加.sync
    */
    showViewModel: {
      type: Boolean,
      default: false
    },
    /**
     * 标题
    */
    title: {
      type: String,
      default: ''
    },
    /**
     * 宽度,css属性值px、百分比等
    */
    wd: {
      type: String,
      default: '50%'
    },
    /**
     * 高度,css属性值px、百分比等
    */
    ht: {
      type: String,
      default: '40%'
    },
    /**
     * 内容区高度,css属性值px、百分比等
    */
    cht: {
      type: String,
      default: ''
    },
    /**
     * 是否显示关闭按钮
    */
    showClose: {
      type: Boolean,
      default: true
    },
    // appendToBody: {
    //   type: Boolean,
    //   default: false
    // },

    closeOnClickModal: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      closed: false,
      key: 0,
      destroyOnClose: true
    };
  },
  watch: {
    // 根据状态来操作隐藏还是显示
    showViewModel(val) {
      if (val) {
        this.closed = false;
        this.$emit('open');
        // if (this.appendToBody) {
        //   document.body.appendChild(this.$el);
        // }
      } else {
        if (!this.closed) this.$emit('close');
        if (this.destroyOnClose) {
          this.$nextTick(() => {
            this.key++;
          });
        }
      }
    }
  },
  methods: {
    handleClose() {
      /**
         *  控制显隐的sync
        */
      this.$emit('update:showViewModel', false);
    },
    handleWrapperClick() {
      console.log(this.closeOnClickModal);
      if (!this.closeOnClickModal) return;
      this.handleClose();
    },
    afterEnter() {
      /**
       * 弹窗显示
      */
      this.$emit('opened');
    },
    afterLeave() {
      /**
       * 弹窗消失
      */
      this.$emit('closed');
    }
  },
  mounted() {
    // if (this.appendToBody) {
    //   document.body.appendChild(this.$el);
    // }
  },

  destroyed() {
    // if appendToBody is true, remove DOM node after destroy
    // if (this.appendToBody && this.$el && this.$el.parentNode) {
    //   this.$el.parentNode.removeChild(this.$el);
    // }
  }
};
</script>
