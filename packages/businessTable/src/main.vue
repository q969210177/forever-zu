<template>
  <div class="el-businessTable  technology">
    <div class="el-businessTable__operation_box" ref="operationBox">
      <div class="el-businessTable__form">
        <form-create ref="fc" v-model="fApi" style="width: 100%" :rule="rule" :option="option" />
      </div>
      <div class="el-businessTable__serach">
        <slot name="serach"></slot>
        <el-button v-bind="serachBtnBind" @click="getTable">{{ serachBtnBind.text }}</el-button>
        <el-button @click="handleRestClick" v-if="showResetBtn" v-bind="resetBtnBind">{{ resetBtnBind.text }}</el-button>
      </div>
    </div>
    <div class="el-businessTable__btn_group">
      <slot name="btnGroup"></slot>
    </div>
    <div class="el-businessTable__main">
      <el-table :data="tableData" highlight-current-row border stripe height="100%" style="width: 100%" size="mini" v-bind="$attrs" v-on="$listeners" @sort-change="sortchange">
        <slot name="column" ></slot>
        <el-table-column label="序号" width="80px">
          <template slot-scope="scope">
            <span>
              {{ scope.$index + 1 }}
            </span>
          </template>
        </el-table-column>
        <template v-for="(item, index) in tableColumns">
          <slot v-if="item.showSlot" :name="item.prop" :params="{...item}"></slot>
          <el-table-column
            show-overflow-tooltip
            :prop="item.prop"
            :label="item.label"
            :key="index"
            :width="item.width"
            :type="item.type"
            :sortable="item.sortable"
            v-else
          ></el-table-column>
        </template>
         <el-table-column
            :label="tableOption.label"
            :width="tableOption.slotWidth"
            v-if="isBtnShow"
          >
            <template slot-scope="scope">
              <!--
                  @slot 最后一列的插槽。scope的值有row与index

              -->
              <slot v-bind="scope"></slot>
            </template>
          </el-table-column>
      </el-table>
    </div>
    <div class="el-businessTable__pag">
      <el-pagination
        @current-change="handleCurrentChange"
        @size-change="handleSizeChange"
        :page-sizes="[10, 20, 30]"
        :current-page.sync="paging.pageNum"
        :page-size="paging.pageSize"
        layout="total,sizes,prev,pager,next,jumper"
        :total="paging.total"
      ></el-pagination>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ElBusinessTable',
  props: {
    // formCreate的value
    value: {
      type: Object,
      default: () => {
        return {};
      }
    },
    // 是否显示操作行
    isBtnShow: {
      type: Boolean,
      default: true
    },
    // 获取表格数据的方法 查询 翻页 重置都会调用这个方法
    getTableVoid: {
      type: Function,
      require: true,
      default: () => {
        return Function;
      }
    },
    // table的配置项
    tableOption: {
      type: Object,
      required: true, // method：请求方法，slotWidth：插槽的宽度
      default() {
        return {
          slotWidth: '200px',
          label: '操作',
          showRadio: false,
          showIndex: false,
          showRadioIndex: false
        };
      }
    },
    /**
     *  表头，包含label和prop具体见下面表格
     */
    tableColumns: {
      type: Array,
      required: true
    },
    /**
     *  搜索框
     */
    rule: {
      type: Array,
      required: true
    },
    /**
     *  是否显示重置按钮
     */
    showResetBtn: {
      type: Boolean,
      default: true
    },
    /**
     *  是否显示分页，如果无分页则请求函数无pageNum与pageSize参数
     */
    showPaging: {
      type: Boolean,
      default: true
    },
    // 加载数据的时候的模态框
    showLoading: {
      type: Boolean,
      default: true
    },
    // 底部导航栏的参数
    pagingParams: {
      type: Object,
      default() {
        return {
          pageNum: 'pageNum',
          pageSize: 'pageSize',
          total: 'total'
        };
      }
    }
  },
  computed: {
    // 查询按钮的配置
    serachBtnBind() {
      const obj = {size: 'mini', type: 'primary', text: '查询'};
      if (this.$attrs.serachBtnConfig) {
        for (const key in this.$attrs.serachBtnConfig) {
          if (Object.hasOwnProperty.call(this.$attrs.serachBtnConfig, key)) {
            const element = this.$attrs.serachBtnConfig[key];
            obj[key] = element;
          }
        }
      }
      return obj;
    },
    // 重置按钮的配置
    resetBtnBind() {
      const obj = { size: 'mini', text: '重置' };
      if (this.$attrs.resetBtnConfig) {
        for (const key in this.$attrs.resetBtnConfig) {
          if (Object.hasOwnProperty.call(this.$attrs.resetBtnConfig, key)) {
            const element = this.$attrs.resetBtnConfig[key];
            obj[key] = element;
          }
        }
      }
      return obj;
    }
  },
  data() {
    return {
      option: {
        form: {
          labelPosition: 'left',
          labelWidth: 'auto',
          statusIcon: true,
          size: 'mini'
        },
        row: {
          type: 'flex',
          justify: 'start',
          align: 'middle',
          gutter: 10
        },
        submitBtn: {
          show: false
        }
      },
      fApi: {},
      tableData: [],
      paging: {
        pageNum: 1,
        pageSize: 20,
        total: 10
      }
    };
  },
  mounted() {
    this.init();
  },
  methods: {
    // init初始化列表\
    init() {
      this.getTable();
      // v-model双向绑定把事件组丢出去
      this.$emit('input', this.fApi);
    },
    // 获取表格数据
    getTable() {
      const params = this.fApi.formData();
      if (this.showPaging) {
        /* params.pageNum = this.paging.pageNum;
        params.pageSize = this.paging.pageSize; */
        params[this.pagingParams.pageNum] = this.paging.pageNum;
        params[this.pagingParams.pageSize] = this.paging.pageSize;
      }
      this.getTableVoid(params).then(res=>{
        this.tableData = [];
        this.tableData = res.data.list;
        this.paging.total = res.data.total;
      });
    },
    // 排序的点击事件
    sortchange(column) {
      this.$emit('sort-change', column);
    },
    // 点击翻页
    handleCurrentChange(current) {
      this.paging.pageNum = current;
      this.getTable();
    },
    // 点击切换页码
    handleSizeChange(size) {
      this.paging.pageSize = size;
      this.getTable();
    },
    // 重置按钮的事件
    handleRestClick() {
      this.$emit('handleRestClick');
    }
  }
};
</script>
