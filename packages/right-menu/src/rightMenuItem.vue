<template>
  <div class="el-right-menu-item" @click.stop="handleItemClick">
     <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'ElRightMenuItem',
  props: {},
  data() {
    return {};
  },
  methods: {
    handleItemClick() {
      this.$emit('click');
    }
  }
};
</script>
