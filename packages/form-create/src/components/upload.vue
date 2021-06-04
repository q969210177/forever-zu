<template>
  <div id="upload">
      {{this.formCreateRule.components}}
    <el-upload v-bind="formCreateRule.props" v-model="upLoadValue">
        <component v-bind:is="component">111</component>
    </el-upload>
  </div>
</template>

<script>

export default {
  name: 'fcUpload',
  props: {
    formCreateRule: {
      type: Object,
      default: () => ({props: {}})
    },
    onHandle: {
      type: Function,
      default(file) {
        this.previewImage = file.url;
        this.previewVisible = true;
      }
    },
    uploadType: {
      type: String,
      default: 'file'
    },
    limit: {
      type: Number,
      default: 0
    },
    allowRemove: {
      type: Boolean,
      default: true
    },
    previewMask: undefined,
    modalTitle: String,
    handleIcon: {
      type: [String, Boolean],
      default: () => undefined
    },
    value: [Array, String]
  },
  data() {
    return {
      component: 'el-button',
      upLoadValue: []
    };
  },
  watch: {
    upLoadValue() {
      console.log(111);
      this.$emit('input', this.upLoadValue);
    }
  },
  mounted() {
    console.log(this.formCreateRule);
  }
};
</script>

<style lang="scss" scoped>
// @import '@/assets/scss/util.scss';
#upload{
   width:100%;
   height:100%
}
</style>
