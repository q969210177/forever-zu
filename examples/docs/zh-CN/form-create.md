## FormCreate 内置根据json生成表单
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
              labelWidth:150
            },
            props: {
              type: "text",
            },
            validate:[
              { required: true, message: '请输入goods_name', trigger: 'blur' },
            ],
          }
        ],
        option:{
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
        },
        fApi:{}
      }
    },
    methods: {
      onSubmit() {
        console.log('submit!');
      }
    }
  }
</script>
```
:::
