<template>
  <div class="el-form-button">
    <slot />
    <el-button :size="size" v-bind="confirmVbind" type="primary" @click="handleConfirmClick">{{ confirmText }}</el-button>
    <el-button v-if="resetIsShow" :size="size" v-bind="resetVbind" @click="handleResetClick">{{ resetText }}</el-button>
  </div>
</template>

<script>
export default {
  name: 'ElFormButton',
  props: {
    size: {
      type: String,
      default: ''
    },
    confirmText: {
      type: String,
      default: '提交'
    },
    resetText: {
      type: String,
      default: '取消'
    },
    resetIsShow: {
      type: Boolean,
      default: true
    }
  },
  computed: {
    confirmVbind() {
      return { ...this.$attrs.confirm };
    },
    resetVbind() {
      return { ...this.$attrs.reset };
    }
  },
  methods: {
    handleConfirmClick(event) {
      this.$emit('confirm', event);
    },
    handleResetClick(event) {
      this.$emit('reset', event);
    }
  }
};
</script>
