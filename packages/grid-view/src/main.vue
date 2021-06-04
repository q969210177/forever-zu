<template>
  <div ref="gridView" class="el-grid-view" :class="[size ? 'h-grid-view--' + size : '']">
    <template v-for="(item, index) in labelList">
      <div :key="index">
        {{item}}
      </div>
      <!-- <h-image-block
        v-if="item.type === 'imageSingle'"
        :key="index"
        :class="[
          item.span ? 'h-grid-view--span-' + item.span : '',
          item.rowSpan ? 'h-grid-view--row-span-' + item.rowSpan : ''
        ]"
        :style="calHeight(item)"
        :url="data[item.prop]"
        type="single"
        v-bind="item.imageProp||imageProp"
      ></h-image-block> -->
      <!-- <h-grid-item
        class="h-grid-view__item"
        :key="index"
        :class="[
          item.span ? 'h-grid-view--span-' + item.span : '',
          item.rowSpan ? 'h-grid-view--row-span-' + item.rowSpan : '',
          border ? 'is-' + 'border' : '',
        ]"
        :label="item.label"
        :isShowLabel="item.isShowLabel"
        :isShowValue="item.isShowValue"
        :canClick="item.canClick"
        :size="size"
        :isTip="calcTip(item)"
        v-bind="$attrs"
        v-on="$listeners"
        :color="colorFormat(data[item.prop], item.color)"
        :align="calcAlign(item)"
        @can-label-click="handleLabelClick(item)"
      >

        <template v-if="Object.hasOwnProperty.call(item,'component')">
          <component
            v-bind:is="item.component.name"
            v-bind="item.component.prop"
            v-model="data[item.prop]"
          ></component>
        </template>
        
        <template v-else>
          {{
          data[item.prop] | propFormat(item.format, globalTip)
          }}
        </template>
      </h-grid-item> -->
    </template>
  </div>
</template>

<script>
export default {
  name: 'ElGridView',
  props: {
    /**
     *  列数
    */
    count: {
      type: Number,
      default: 3
    },
    /**
     *  纵向分隔，同css：grid-column-gap。
    */
    colGap: {
      type: String,
      default: '0px'
    },
    /**
     *  纵向分隔，同css：grid-row-gap。
    */
    rowGap: {
      type: String,
      default: '0px'
    },
    /**
     *  数据源
    */
    data: {
      type: Object
    },
    /**
     *  规则数组，详情请见demo
    */
    labelList: {
      type: Array
    },
    /**
     *  整体大小
     * @values medium,mini,small,big
    */
    size: {
      default: 'medium'// small mini big
    },
    /**
     *  h-image-block的prop，存在默认值，一般不需要设置。
    */
    imageProp: {
      type: Object
    },
    border: {
      type: Boolean,
      default: false
    },
    globalTip: {
      type: String,
      default: '暂无数据'
    }

  },
  methods: {
    colorFormat(value, format) {
      let color = '';
      if (format) {
        const rule = format;
        rule.forEach(item => {
          if (value === item[0]) {
            color = item[1];
          }
        });
      }

      return color;
    },
    calcTip(item) {
      const rowSpan = item.rowSpan || '';
      const isTip = item.isTip;
      const rowSpanIsTip = !!rowSpan; // rowSpan?true:false
      const isComponent = item.type || Object.hasOwnProperty.call(item, 'component');
      return (isTip || rowSpanIsTip) && !isComponent;
    },
    calcAlign(item) {
      const rowSpan = item.rowSpan || '';
      const rowSpanAlign = rowSpan ? 'start' : 'center';
      return rowSpanAlign;
    },
    calHeight(item) {
      const rowSpan = item.rowSpan;
      const size = this.size;
      let baseHeight = 60;
      switch (size) {
        case 'medium':
          baseHeight = 60;
          break;
        case 'small':
          baseHeight = 40;
          break;

        case 'big':
          baseHeight = 70;
          break;

        default:
          break;
      }
      const height = baseHeight * rowSpan;
      return {
        height: `${height}px`
      };
    },
    setCount() {
      this.$el.style.setProperty('--count', this.count);
      this.$el.style.setProperty('--col-gap', this.colGap);
      this.$el.style.setProperty('--row-gap', this.rowGap);

    },
    handleLabelClick(item) {
      this.$emit(`can-click-${item.prop}`, item);
    }

  }
};
</script>
