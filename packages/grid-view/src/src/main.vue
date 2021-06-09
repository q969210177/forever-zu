<template>

  <div  class="el-grid-view" :class="['el-grid-view--' + size]" >
    <div :class="[{'is-show_border':border}]" class="el-grid-view__body">
      <template v-for="(item, index) in labelList">
      <div class="el-grid-view__item" :class="{'is-border':border}" :key="index" :style="{width:setSpanWidth(item.span),height:setSpanHight(item.row)}">
        <div :title="item.label" v-if="setItemTooltip(item.tooltip)" class="el-grid-view__item--label" :style="{width:setItemLabelWidth(item.labelWidth)}">{{item.label}}</div>
        <div v-show="!setItemTooltip(item.tooltip)"   class="el-grid-view__item--label" :style="{width:setItemLabelWidth(item.labelWidth)}">{{item.label}}</div>
        <div class="el-grid-view__item--value" :style="{width:'calc(100% - '+setItemLabelWidth(item.labelWidth)+')'}">
          <div style="width:80px;height:100%" v-if="item.type==='img'">
          <img width="100%" height="100%" :src="data[item.prop]" alt="" srcset="">
          </div>
          <div v-else>{{data[item.prop]?data[item.prop]:setItemTip(item.tip)}}</div>
        </div>
      </div>
    </template>
    </div>
    
  </div>
</template>

<script>
export default {
  name: 'ElGridView',
  components: {
  },
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
     *  el-image-block的prop，存在默认值，一般不需要设置。
    */
    imageProp: {
      type: Object
    },
    border: {
      type: Boolean,
      default: false
    },
    labelWidth: {
      type: String,
      default: '80px'
    },
    globalTip: {
      type: String,
      default: '暂无数据'
    }

  },
  computed: {
    // 根据size设置行高
    rowSpanHight() {
      const sizeObj = {
        mini: 30,
        small: 40,
        medium: 50,
        big: 60
      };
      if (sizeObj[this.size]) {
        return sizeObj[this.size];
      }
      return 30;
    }
  },
  mounted() {

  },
  methods: {
    // 设置默认的没数据的展示
    setItemTip(tip) {
      if (tip) {
        return tip;
      }
      return this.globalTip;
    },
    // 设置是否展示
    setItemTooltip(tooltip) {
      console.log(tooltip);
      if (tooltip) {
        return tooltip;
      } else {
        return false;
      }

    },
    // 设置子项的labelWidth
    setItemLabelWidth(itemLabelWidth) {
      if (itemLabelWidth) {
        return itemLabelWidth;
      }
      return this.labelWidth;
    },
    // 设置span的宽度
    setSpanWidth(span) {
      if (span) {
        return `${(span * 100 / this.count)}%`;
      }
      return `${(1 * 100 / this.count)}%`;
    },
    setSpanHight(span) {
      // small mini big

      if (span) {
        return `${(span * this.rowSpanHight)}px`;
      }
      return `${(this.rowSpanHight)}px`;
    }

  }
};
</script>
