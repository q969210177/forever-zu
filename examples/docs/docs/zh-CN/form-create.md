## FormCreate 内置根据json生成表单
关于form展现的[配置项](#/zh-CN/component/form-create)
原生文档参见<http://www.form-create.com/v2/element-ui/>
### 改动的地方
type是select的时候 可以传入 label:展示的label字段的key showValue:v-model绑定的字段
:::warning
type是 upload 的时候 components字段可以传一个vnode渲染在upload的默认插槽内
:::
:::demo 
```html
<form-create :rule="rule" v-model="fApi" :option="option"></form-create>
<script>
  export default {
    data() {
      return {
        rule:[
          {
            type:"input",
            title:"商品名称",
            field:"goods_name",
            value:"iphone 7",
            col:{
              span:12,
            },
            props: {
              type: "text",
            },
            validate:[
              { required: true, message: '请输入goods_name', trigger: 'blur' },
            ],
          },
          {
            type: "select",
            field: "cate_id",
            title: "产品分类",
            value: ["104","105"],
            col:{
              span:12,
            },
            options: [
                {"name": "104", "code": "生态蔬菜", "disabled": false},
                {"name": "105", "code": "新鲜水果", "disabled": false},
            ],
            props: {
              multiple: true,
              label:"name",
              showValue:"code"
            },
          },
          
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
        fApi:{}
      }
    },
    mouted(){
      console.log(Button)
    },
    methods: {
     
    }
  }
</script>
```
:::
### upload上传
components字段可以传组件进去 componentsProp可以传传入的组件的参数
:::demo
```html
<form-create :rule="rule" v-model="fApi" :option="option"></form-create>
<script>
  export default {
    data() {
      return {
        rule:[
          {
            type: 'upload',
            field: 'pic',
            title: '',
            // components: {},
            value: [],
            props: {
              action: '/',
              showFileList: true,
              multiple: true,
              accept: 'image\/*',
              autoUpload: false,
              limit: 2,
              fileList: [],
              styleObj: { width: '80px', height: '80px','line-height':'80px'},
              listType:"picture-card"
            },
            componentsProp: {
             
            }
          },
          {
            type: 'upload',
            field: 'pissssc',
            title: '',
            // components: {},
            value: [],
            icon:"el-icon-edit",
            props: {
              action: '/',
              showFileList: true,
              multiple: true,
              accept: 'image\/*',
              autoUpload: false,
              limit: 2,
              fileList: [],
              // styleObj: { width: '80px', height: '80px','line-height':'80px'}
              // onSuccess: function(res, file) {
              //   file.url = res.data.filePath;
              // }
            },
            componentsProp: {
             
            }
          },
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
        fApi:{}
      }
    },
    methods: {}
  }
</script>
```
:::
### 
### Props
| 参数      | 说明          | 类型      | 可选值                           | 默认值  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| value   | 事件集合的方法  | object  | — | {} |
| rule     | 表单渲染的数组 | array   | — | [] |
| option | 表单展示的配置项 | object  | — | {} |
### PropsOptions
:::warning
请注意外面用对象包起来 他们是一个对象的里面的属性
:::
```JavaScript
const option = {
  form:{
    //行内表单模式
    inline: false,
    //表单域标签的位置，如果值为 left 或者 right 时，则需要设置 label-width
    labelPosition: 'right',
    //表单域标签的后缀
    labelSuffix: undefined,
    //是否显示必填字段的标签旁边的红色星号
    hideRequiredAsterisk: false,
    //表单域标签的宽度，例如 '50px'。作为 Form 直接子元素的 form-item 会继承该值。支持 auto。
    labelWidth: '125px',
    //是否显示校验错误信息
    showMessage: true,
    //是否以行内形式展示校验信息
    inlineMessage: false,
    //是否在输入框中显示校验结果反馈图标
    statusIcon: false,
    //是否在 rules 属性改变后立即触发一次验证
    validateOnRuleChange: true,
    //是否禁用该表单内的所有组件。若设置为 true，则表单内组件上的 disabled 属性不再生效
    disabled: false,
    //用于控制该表单内组件的尺寸 medium / small / mini
    size: undefined,
  },
  row:{
    //栅格间隔
    gutter: 0,
    //布局模式，可选 flex，现代浏览器下有效
    type: undefined,
    //flex 布局下的垂直排列方式 top/middle/bottom
    align: undefined,
    //flex 布局下的水平排列方式 start/end/center/space-around/space-between
    justify: undefined,
    //自定义元素标签
    tag: 'div'
    },
  submitBtn:{
    //类型 primary / success / warning / danger / info / text
    type: "primary",
    //尺寸 medium / small / mini
    size: "medium",
    //是否朴素按钮
    plain: false,
    //是否圆角按钮
    round: false,
    //是否圆形按钮
    circle: false,
    //是否加载中状态
    loading: false,
    //是否禁用状态
    disabled: false,
    //图标类名
    icon: 'el-icon-upload',
    //按钮宽度
    width: '100%',
    //是否默认聚焦
    autofocus: false,
    //原生 type 属性
    nativeType: "button",
    //按钮内容
    innerText: "提交",
    //按钮是否显示
    show: false,
    //按钮布局规则
    col: undefined,
    //按钮点击事件
    click: undefined,
  }
}
```  
### rule里面的对象的解释
:::warning
验证规则请参考<https://github.com/yiminghe/async-validator>
:::
```JavaScript
//具体的属性得参照具体的组件
const ruleItem =  {
  type: 'upload',//组件的名字
  field: 'pic',//formData的字段名
  title: '',//formItemd的label
  value: [],//双向绑定的 v-model值
  props: {},//组件需要的参数
  validate:[],//验证规则
  col:{//布局 参考el-col
    span:12,//一行24格 他的长度
    labelWidth:'150px' //labelWidth的长度
  },
},
```       
### Events 事件
文档请参照<http://www.form-create.com/v2/guide/event.html#%E9%80%9A%E8%BF%87%E9%85%8D%E7%BD%AE%E9%A1%B9emit%E7%9B%91%E5%90%AC%E4%BA%8B%E4%BB%B6>
