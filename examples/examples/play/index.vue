<template>
  <div id="index"> 
    <el-card title="详情">
        <el-grid-view
      labelWidth="50px"
      :count="4"
      :labelList="tableColumns"
      :data="gridView"
      :border="true"
      colGap='10px'
      size="mini"
    >
    </el-grid-view>
      
    </el-card>
      
   <!-- <div>
       <el-grid-view
      labelWidth="80px"
      :count="4"
      :labelList="tableColumns"
      :data="gridView"
      :border="true"
      colGap='10px'
      size="small"
    >
    </el-grid-view>
    </div>
    <br>
    <div>
       <el-grid-view
      labelWidth="80px"
      :count="4"
      :labelList="tableColumns"
      :data="gridView"
      :border="true"
      colGap='10px'
      size="medium"
    >
    </el-grid-view>
    </div>
    <br>
    <div>
       <el-grid-view
      labelWidth="80px"
      :count="4"
      :labelList="tableColumns"
      :data="gridView"
      :border="true"
      colGap='10px'
      size="big"
    >
    </el-grid-view>
    </div> -->

   
  <!-- <form-create :rule="rule" v-model="fApi" :option="option"></form-create> -->
    <!-- <el-simpleDialog :showViewModel.sync='show' title="111"></el-simpleDialog> -->
    <!-- <el-business-table
      v-model="fApi"
      :tableColumns="tableColumns"
      :tableOption="tableOption"
      :rule="rule"
      :getTableVoid="getTable"
    >
      
      <template slot="bfcw">
        <el-table-column
          show-overflow-tooltip
          prop="item.prop"
          label="item.label"
          width=""
        ></el-table-column>
      </template>
      <template slot-scope="scope">
        <el-button type="danger" @click="handleDelectClick(scope)" size="mini"
          >删除</el-button
        >
      </template>
    </el-business-table> -->
  </div>
</template>

<script>
export default {
  name: 'index',
  components: {},
  props: {},
  data() {
    return {
      gridView: {
        hzysb: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg'
      },
      tableColumns: [
        {
          prop: 'hzkssj',
          label: '预约会诊时间',
          span: '2',
          tooltip: true
        },
        {
          prop: 'hzyya',
          label: '会诊医院',
          span: '2'
        },
        {
          prop: 'hzysb',
          label: '会诊医生',
          span: '4',
          row: 3,
          type: 'img'
        },
        {
          prop: 'hzysc',
          label: '会诊医生',
          span: '1'
        },
        {
          prop: 'hzysd',
          label: '会诊医生',
          span: '1'
        },
        {
          prop: 'hzysd',
          label: '会诊医生',
          span: '1'
        },
        {
          prop: 'hzysz',
          label: '会诊医生',
          span: '1'
        }
      ]

    };
  },
  computed: {},
  created() { },
  mounted() {
    // console.log(ElProgress);
  },
  methods: {
    onChange() {
      console.log(111);
    },
    test() {
      this.formData = this.fApi.formData();
    }
  }
};

</script>
<style lang='scss'>
.bor {
  border: 1px solid red;
}
html,body{
  margin: 0;
  padding: 0;
}
@mixin grid-col($row, $col) {
  display: grid;
  grid-template-columns: repeat($col, 1fr);
  grid-template-rows: repeat($row, 1fr);
  grid-gap: 20px;
}

.item {
  width: 100%;
  height: 100%;
  padding: 30px;
}

#index {
  width: 50vw;
  height: 50vh;
  padding: 0;
  // @include grid-col(2, 3);
}
</style>