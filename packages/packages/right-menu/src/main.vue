<template>
  <div class="el-right-menu"  v-show="show">
    <transition name="context-menu">
      <div
        class="el-right-menu__contextmenu"
        ref="contextmenu"
        @mousedown.stop
        @contextmenu.prevent
      >
        <slot v-bind="param"></slot>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'ElRightMenu',
  props: {
    e: {
      type: MouseEvent
    },
    param: {},
    show: Boolean
  },
  watch: {
    show(show) {
      if (show) {
        this.$nextTick(this.setPosition);
      }
    }
  },
  data() {
    return {
      style: {
        'left': '163px',
        'top': '125px'
      },
      offset: {
        left: 0,
        top: 0
      }
    };
  },
  beforeDestroy() {

    document.removeEventListener('mousedown', this.clickDocumentHandler);
  },
  mounted() {
    document.addEventListener('mousedown', this.clickDocumentHandler);
  },
  methods: {
    // body的点击事件
    handleBodyClick() {
      console.log('body的点击事件');
      this.$emit('update:show', false);
    },
    // 鼠标按压事件处理器
    clickDocumentHandler(e) {
      if (this.show) {
        this.$emit('update:show', false);
      }
    },
    setPosition() {
      this.offset = {
        left: this.e.pageX,
        top: this.e.pageY
      };
      const docHeight = document.documentElement.clientHeight;
      const docWidth = document.documentElement.clientWidth;
      const menuHeight = this.$el.getBoundingClientRect().height;
      const menuWidth = this.$el.getBoundingClientRect().width;
      console.log();

      // 增加点击处与菜单间间隔，较为美观
      const gap = 10;
      const topover =
        this.offset.top + menuHeight + gap >= docHeight
          ? menuHeight + gap
          : -gap;
      const leftover =
        this.offset.left + menuWidth + gap >= docWidth ? menuWidth + gap : -gap;
      this.$el.style.left = `${this.offset.left - leftover}px`;
      this.$el.style.top = `${this.offset.top - topover}px`;
    }
  }
};
</script>
