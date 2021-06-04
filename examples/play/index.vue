<template>
  <div id="index">
    {{formData}}
    <form-create ref="fc" v-model="fApi" style="width: 100%" :rule="rule" :option="option" >
      <div>9999</div>
    </form-create>
    <el-button @click="test">111</el-button>
    <!-- <el-upload  listType='picture-card' @onChange="onChange" :auto-upload="false" v-model="labelList" action='/'>提交</el-upload> -->
  </div>
</template>

<script>
import elButton from 'packages/button/index.js';
// eslint-disable-next-line no-unused-vars
import progress from 'packages/progress/src/progress.vue';
// packages\progress\src\progress.vue
export default {
  name: 'index',
  components: {},
  props: {},
  data() {
    return {
      labelList: [],
      rule: [
        // {
        //   type: 'select',
        //   field: 'cate_id',
        //   title: '产品分类',
        //   value: ['104', '105'],
        //   // optionProps: {
        //   //   label: 'label',
        //   //   value: 'value'
        //   // },
        //   options: [
        //     {aa: '104', bb: '生态蔬菜', disabled: false},
        //     {aa: '105', bb: '新鲜水果', disabled: false}
        //   ],
        //   props: {
        //     multiple: true,
        //     label: 'bb',
        //     showValue: 'aa'
        //   }
        // },
        {
          type: 'upload',
          field: 'pic',
          title: '',
          components: elButton,
          value: [],
          props: {
            listType: 'picture-card',
            action: 'https://jsonplaceholder.typicode.com/posts/',
            showFileList: true,
            multiple: true,
            accept: 'image\/*',
            autoUpload: true,
            fileList: [{name: '222', url: 'www.baidu.com'}],
            styleObj: { width: '80px', height: '80px', 'line-height': '80px'},
            onRemove: (file)=>{
              console.log(file);
            }
          },
          componentsProp: {
            type: 'danger',
            size: 'small',
            text: '上传'
          }
        }
      ],
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
      formData: {}
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
  width: 98.5vw;
  height: 99vh;
   margin: 0 auto;
  padding: 0;
  // @include grid-col(2, 3);
}
</style>