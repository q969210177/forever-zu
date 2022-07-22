## BusinessTable 带搜索条件和分页的表格  所有el-table的参数我都可以接收并传递下去 
### 基础表格 
:::demo
```html
  <template>
    <el-business-table
      v-model="fApi"
      :tableColumns="tableColumns"
      :tableOption="tableOption"
      :rule="rule"
      :getTableVoid="getTable"
    >
    <!--  -->
    <template slot="bfcw">
      <el-table-column
        show-overflow-tooltip
        prop="item.prop"
        label="item.label"
        width=""
      ></el-table-column>
    </template>
    <template slot-scope="scope">
      <el-button type="danger" @click='handleDelectClick(scope)' size="mini">删除</el-button>
    </template>
    </el-business-table>
  </template>

  <script>
  
    export default {
      data() {
        return {
          tableOption: {
          slotWidth: '80px',
          showIndex: true,
          label: '操作'
        },
        tableColumns: [
          { prop: 'name', label: '姓名', sortable: true },
          { prop: 'sex', label: '性别' },
          { prop: 'age', label: '年龄' },
          { prop: 'address', label: ' 地址' },
          { prop: 'politicalStatus', label: '政治面貌' },
        ],
        fApi: {},
        rule: [
          {
            type: 'el-input',
            title: '搜索人员',
            field: 'a',
            value: '1111',
            col: {
              span: 6
            },
            props: {
              type: 'text'
            }
          },
          {
            type: 'el-input',
            title: '搜索人员',
            field: 'z',
            value: '1111',
            col: {
              span: 6
            },
            props: {
              type: 'text'
            }
          },
          {
            type: 'el-input',
            title: '搜索人员',
            field: 'x',
            value: '1111',
            col: {
              span: 6
            },
            props: {
              type: 'text'
            }
          },
          {
            type: 'el-input',
            title: '搜索人员',
            field: 'c',
            value: '1111',
            col: {
              span: 6
            },
            props: {
              type: 'text'
            }
          },
        // 一行
          {
            type: 'el-input',
            title: '搜索人员',
            field: 'v',
            value: '1111',
            col: {
              span: 6
            },
            props: {
              type: 'text'
            }
          },
          {
            type: 'el-input',
            title: '搜索人员',
            field: 'gggg',
            value: '',
            col: {
              span: 6
            },
            props: {
              type: 'text'
            }
          },
          {
            type: 'select',
            field: 'cate_id',
            title: '单位',
            value: '',
            options: [
              { code: '104', ddd: '生态蔬菜', disabled: true },
              { code: '105', ddd: '新鲜水果' }
            ],
            col: {
              span: 6
            },
            props: {
              label: 'ddd',
              value: 'code'
            },
            optionProps: {
              label: 'ddd',
              value: 'code'
            }
          },
        ]
        }
      },
    methods: {
      getTable(formPar) {
        //一般来说这里是应该是接口 直接 如果有更好的解决方法也可以联系我
        // eslint-disable-next-line no-undef
        return new Promise((res, rej)=>{
          res({data: {
            list: [
               {id: 1,name: '张三',sex:"男",age:"25",address:"湖北省武汉市洪山区",politicalStatus:"党员" },
            ],
            total: 10
          }});
          rej('表格请求错误');
        });
      },
      handleDelectClick(scope){
        console.log(scope)
      }
    },
  }
  </script>
```
:::

### 带操作的按钮
表格上方自带了一行自定义按钮的插槽 同时不带 操作行的表格  同时展示了 一下
:::demo
```html
<template>
  <el-business-table
      v-model="fApi"
      :tableColumns="tableColumns"
      :tableOption="tableOption"
      :rule="rule"
      :getTableVoid="getTable"
      :isBtnShow="false"
    >
    <template slot="btnGroup">
      <el-button size="mini" type="primary">添加</el-button>
      <el-button size="mini" type="success">导出</el-button>
    </template>
  </el-business-table>
  <h3>这个是重置了搜索按钮和重置按钮的表格</h3>
  <el-business-table
      v-model="fApi"
      :tableColumns="tableColumns"
      :tableOption="tableOption"
      :rule="rule"
      :getTableVoid="getTable"
      :isBtnShow="false"
      :serachBtnConfig="{size: 'mini', type: 'danger', text: '搜索',icon:'el-icon-upload'}"
      :resetBtnConfig="{type: 'success',text:'置空'}"
    >
  </el-business-table>
</template>
<script>
  export default{
    data(){
      return {
        rule:[
           {
            type: 'input',
            title: '搜索',
            field: 'a',
            value: '1111',
            col: {
              span: 12
            },
            props: {
              type: 'text'
            }
          },
        ],
        fApi:{},
         tableOption: {
          slotWidth: '80px',
          showIndex: true,
          // label: '操作'
        },
        tableColumns: [
          { prop: 'name', label: '姓名', sortable: true },
          { prop: 'sex', label: '性别' },
          { prop: 'age', label: '年龄' },
          { prop: 'address', label: ' 地址' },
          { prop: 'politicalStatus', label: '政治面貌' },
        ],
      }
    },
    methods: {
      getTable(formPar) {
        //一般来说这里是应该是接口 直接 如果有更好的解决方法也可以联系我
        // eslint-disable-next-line no-undef
        //  {id: 1,name: '张三',sex:"男",age:"25",address:"湖北省武汉市洪山区",politicalStatus:"党员" },
              
        return new Promise((res, rej)=>{
          res({data: {
            list: [
              {id: 1,name: '张三',sex:"男",age:"25",address:"湖北省武汉市洪山区",politicalStatus:"党员" },
              {id: 2,name: '李四',sex:"男",age:"22",address:"湖北省武汉市武昌区",politicalStatus:"群众" },
              {id: 3,name: '王五',sex:"女",age:"21",address:"湖北省武汉市江岸区",politicalStatus:"团员" },
              {id: 4,name: '赵六',sex:"男",age:"40",address:"湖北省武汉市汉阳区",politicalStatus:"党员" },
            ],
            total: 10
          }});
          rej('表格请求错误');
        });
      }
    },
  }
</script>
```
:::
### 多级表头 主要还是通过数据解决
:::demo
```html
<template>
  <el-business-table
      v-model="fApi"
      :tableColumns="tableColumns"
      :tableOption="tableOption"
      :rule="rule"
      :getTableVoid="getTable"
      :isBtnShow="false"
    >
    <template slot="btnGroup">
      <el-button size="mini" type="primary">添加</el-button>
      <el-button size="mini" type="success">导出</el-button>
    </template>
    <template slot='testTableHeader' slot-scope="{params}">
     <el-table-column label="省市区地址" >
      <el-table-column :prop="v.prop" :label="v.label" v-for="(v,k) in params.chilred" :key="k">
      </el-table-column>
     </el-table-column> 
    </template>
  </el-business-table>
</template>
<script>
  export default{
    data(){
      return {
        rule:[
           {
            type: 'input',
            title: '搜索',
            field: 'a',
            value: '1111',
            col: {
              span: 12
            },
            props: {
              type: 'text'
            }
          },
        ],
        fApi:{},
         tableOption: {
          slotWidth: '80px',
          showIndex: true,
          // label: '操作'
        },
        tableColumns: [
          { prop: 'name', label: '姓名', sortable: true },
          { prop: 'sex', label: '性别' },
          { prop: 'age', label: '年龄' },
          { prop: 'testTableHeader', label: ' 地址',showSlot:true,chilred:[
            { prop: 'province', label: '省' },
            { prop: 'city', label: '市' },
          ] },
          { prop: 'politicalStatus', label: '政治面貌' },
        ],
      }
    },
    methods: {
      testClick(v){
        console.log(v)
      },
      getTable(formPar) {
        //一般来说这里是应该是接口 直接 如果有更好的解决方法也可以联系我
        // eslint-disable-next-line no-undef
        //  {id: 1,name: '张三',sex:"男",age:"25",address:"湖北省武汉市洪山区",politicalStatus:"党员" },
              
        return new Promise((res, rej)=>{
          res({data: {
            list: [
              {id: 1,name: '张三',sex:"男",age:"25",province:"湖北省",politicalStatus:"党员",city:"武汉市" },
              {id: 2,name: '李四',sex:"男",age:"22",province:"湖北省",politicalStatus:"群众",city:"武汉市" },
              {id: 3,name: '王五',sex:"女",age:"21",province:"湖北省",politicalStatus:"团员" ,city:"武汉市"},
              {id: 4,name: '赵六',sex:"男",age:"40",province:"山东省",politicalStatus:"党员",city:"青岛市" },
            ],
            total: 10
          }});
          rej('表格请求错误');
        });
      }
    },
  }
</script>
```
:::
### businessTable Attributes
| 参数      | 说明          | 类型      | 可选值                           | 默认值  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| getTableVoid | 获取数据的方法 | function | — | 必须返回 {data:{list:["这里是表格数据"],total:"这里是总页数"}} |
| tableColumns| Table-column里面的参数 我用数组整合起来了 同时可以自定义参数 我会通过动态插槽把传进来的 每一项然后传给你 主要是用来 配合筛选表格项 举例A:看到的是 姓名 年龄 政治面貌,但是B看到的是姓名 性别 住址 | Array [{Table-column的子项}] | —  | []|
| height | Table 的高度，默认为自动高度。如果 height 为 number 类型，单位 px；如果 height 为 string 类型，则这个高度会设置为 Table 的 style.height 的值，Table 的高度会受控于外部样式。  | string/number | — | — |
|serachBtnConfig |查询按钮的配置项 | object |el-button的配置项  |{size: 'mini', type: 'primary', text: '查询'} |
|resetBtnConfig  | 重置按钮的配置项| object |el-button的配置项   |{ size: 'mini', text: '重置' } |
|value  | formCreate的value| object | formCreate的value  | {} |
|isBtnShow  | 是否显示操作行| boolean | 是否显示操作行   |true |
|tableOption  | 表单的配置| object | { slotWidth: '200px',label: '操作',showIndex: false,}   |{ 第一个是最后一栏的长度,展示的名字,以及是否显示序号 } |
|rule  | formCreate的rule| array |formCreate的rule   |[参见](/#/zh-CN/component/form-create)formCreate |
|showResetBtn  | 是否显示重置按钮| boolean |   |true |
|showPaging  | 是否展示分页| boolean |   |true |
|pagingParams  | 分页的参数的key| objec | pageNum:"当前页" pageSize:"展示数量" total:"总数"   |{pageNum: 'pageNum',pageSize: 'pageSize',total: 'total'}; |
| max-height | Table 的最大高度。合法的值为数字或者单位为 px 的高度。 | string/number | — | — |
| stripe | 是否为斑马纹 table | boolean | — | false |
| border | 是否带有纵向边框 | boolean | — | false |
| size | Table 的尺寸 | string | medium / small / mini | — |
| fit | 列的宽度是否自撑开 | boolean | — | true |
| show-header | 是否显示表头 | boolean | — | true |
| highlight-current-row | 是否要高亮当前行 | boolean | — | false |
| current-row-key | 当前行的 key，只写属性 | String,Number | — | — |
| row-class-name | 行的 className 的回调方法，也可以使用字符串为所有行设置一个固定的 className。 | Function({row, rowIndex})/String | — | — |
| row-style | 行的 style 的回调方法，也可以使用一个固定的 Object 为所有行设置一样的 Style。 | Function({row, rowIndex})/Object | — | — |
| cell-class-name | 单元格的 className 的回调方法，也可以使用字符串为所有单元格设置一个固定的 className。 | Function({row, column, rowIndex, columnIndex})/String | — | — |
| cell-style | 单元格的 style 的回调方法，也可以使用一个固定的 Object 为所有单元格设置一样的 Style。 | Function({row, column, rowIndex, columnIndex})/Object | — | — |
| header-row-class-name | 表头行的 className 的回调方法，也可以使用字符串为所有表头行设置一个固定的 className。 | Function({row, rowIndex})/String | — | — |
| header-row-style | 表头行的 style 的回调方法，也可以使用一个固定的 Object 为所有表头行设置一样的 Style。 | Function({row, rowIndex})/Object | — | — |
| header-cell-class-name | 表头单元格的 className 的回调方法，也可以使用字符串为所有表头单元格设置一个固定的 className。 | Function({row, column, rowIndex, columnIndex})/String | — | — |
| header-cell-style | 表头单元格的 style 的回调方法，也可以使用一个固定的 Object 为所有表头单元格设置一样的 Style。 | Function({row, column, rowIndex, columnIndex})/Object | — | — |
| row-key | 行数据的 Key，用来优化 Table 的渲染；在使用 reserve-selection 功能与显示树形数据时，该属性是必填的。类型为 String 时，支持多层访问：`user.info.id`，但不支持 `user.info[0].id`，此种情况请使用 `Function`。 | Function(row)/String | — | — |
| empty-text | 空数据时显示的文本内容，也可以通过 `slot="empty"` 设置 | String | — | 暂无数据 |
| default-expand-all | 是否默认展开所有行，当 Table 包含展开行存在或者为树形表格时有效 | Boolean | — | false |
| expand-row-keys | 可以通过该属性设置 Table 目前的展开行，需要设置 row-key 属性才能使用，该属性为展开行的 keys 数组。| Array | — | |
| default-sort | 默认的排序列的 prop 和顺序。它的`prop`属性指定默认的排序的列，`order`指定默认排序的顺序| Object | `order`: ascending, descending | 如果只指定了`prop`, 没有指定`order`, 则默认顺序是ascending |
| tooltip-effect | tooltip `effect` 属性 | String | dark/light | | dark |
| show-summary | 是否在表尾显示合计行 | Boolean | — | false |
| sum-text | 合计行第一列的文本 | String | — | 合计 |
| summary-method | 自定义的合计计算方法 | Function({ columns, data }) | — | — |
| span-method | 合并行或列的计算方法 | Function({ row, column, rowIndex, columnIndex }) | — | — |
| select-on-indeterminate | 在多选表格中，当仅有部分行被选中时，点击表头的多选框时的行为。若为 true，则选中所有行；若为 false，则取消选择所有行 | Boolean | — | true |
| indent      | 展示树形数据时，树节点的缩进 | Number | — | 16 |
| lazy        | 是否懒加载子节点数据 | Boolean | — | — |
| load        | 加载子节点数据的函数，lazy 为 true 时生效，函数第二个参数包含了节点的层级信息 | Function(row, treeNode, resolve) | — | — |
| tree-props  | 渲染嵌套数据的配置选项 | Object | — | { hasChildren: 'hasChildren', children: 'children' } |

### Table Events el-table所有的方法我也都接收
| 事件名 | 说明 | 参数 |
| ---- | ---- | ---- |
| select | 当用户手动勾选数据行的 Checkbox 时触发的事件 | selection, row |handleRestClick
| handleRestClick | 重置按钮的事件 |  |
| select-all | 当用户手动勾选全选 Checkbox 时触发的事件 | selection |
| selection-change | 当选择项发生变化时会触发该事件 | selection |
| cell-mouse-enter | 当单元格 hover 进入时会触发该事件 | row, column, cell, event |
| cell-mouse-leave | 当单元格 hover 退出时会触发该事件 | row, column, cell, event |
| cell-click | 当某个单元格被点击时会触发该事件 | row, column, cell, event |
| cell-dblclick | 当某个单元格被双击击时会触发该事件 | row, column, cell, event |
| row-click | 当某一行被点击时会触发该事件 | row, column, event |
| row-contextmenu | 当某一行被鼠标右键点击时会触发该事件 | row, column, event |
| row-dblclick | 当某一行被双击时会触发该事件 | row, column, event |
| header-click | 当某一列的表头被点击时会触发该事件 | column, event |
| header-contextmenu | 当某一列的表头被鼠标右键点击时触发该事件 | column, event |
| sort-change | 当表格的排序条件发生变化的时候会触发该事件 | { column, prop, order } |
| filter-change | 当表格的筛选条件发生变化的时候会触发该事件，参数的值是一个对象，对象的 key 是 column 的 columnKey，对应的 value 为用户选择的筛选条件的数组。 | filters |
| current-change | 当表格的当前行发生变化的时候会触发该事件，如果要高亮当前行，请打开表格的 highlight-current-row 属性 | currentRow, oldCurrentRow |
| header-dragend | 当拖动表头改变了列的宽度的时候会触发该事件 | newWidth, oldWidth, column, event |
| expand-change  | 当用户对某一行展开或者关闭的时候会触发该事件（展开行时，回调的第二个参数为 expandedRows；树形表格时第二参数为 expanded） | row, (expandedRows \| expanded) |

### Table Methods
| 方法名 | 说明 | 参数 |
| ---- | ---- | ---- |
| clearSelection | 用于多选表格，清空用户的选择 | — |
| toggleRowSelection | 用于多选表格，切换某一行的选中状态，如果使用了第二个参数，则是设置这一行选中与否（selected 为 true 则选中） | row, selected |
| toggleAllSelection | 用于多选表格，切换所有行的选中状态 | - |
| toggleRowExpansion | 用于可展开表格与树形表格，切换某一行的展开状态，如果使用了第二个参数，则是设置这一行展开与否（expanded 为 true 则展开） | row, expanded |
| setCurrentRow | 用于单选表格，设定某一行为选中行，如果调用时不加参数，则会取消目前高亮行的选中状态。 | row |
| clearSort | 用于清空排序条件，数据会恢复成未排序的状态 | — |
| clearFilter | 不传入参数时用于清空所有过滤条件，数据会恢复成未过滤的状态，也可传入由columnKey组成的数组以清除指定列的过滤条件 | columnKey |
| doLayout | 对 Table 进行重新布局。当 Table 或其祖先元素由隐藏切换为显示时，可能需要调用此方法 | — |
| sort | 手动对 Table 进行排序。参数`prop`属性指定排序列，`order`指定排序顺序。 | prop: string, order: string |

### Table Slot
| name | 说明 |
|------|--------|
| btnGroup | 插入至表格的上方 可以是任意内容。 |
| 动态插槽  | 插槽是名字是你的item.prop 同时需要在 tableColumns 你需要自定义的那一行给到一个sortable: true,我就会帮你抛出一个动态插槽|
### Table-column Attributes
| 参数      | 说明          | 类型      | 可选值                           | 默认值  |
|---------- |-------------- |---------- |--------------------------------  |-------- |

| type | 对应列的类型。如果设置了 `selection` 则显示多选框；如果设置了 `index` 则显示该行的索引（从 1 开始计算）；如果设置了 `expand` 则显示为一个可展开的按钮 | string | selection/index/expand | — |
| column-key | column 的 key，如果需要使用 filter-change 事件，则需要此属性标识是哪个 column 的筛选条件 | string | — | — |
| label | 显示的标题 | string | — | — |
| prop | 对应列内容的字段名，也可以使用 property 属性 | string | — | — |
| width | 对应列的宽度 | string | — | — |
| min-width | 对应列的最小宽度，与 width 的区别是 width 是固定的，min-width 会把剩余宽度按比例分配给设置了 min-width 的列 | string | — | — |
| fixed | 列是否固定在左侧或者右侧，true 表示固定在左侧 | string, boolean | true, left, right | — |
| render-header | 列标题 Label 区域渲染使用的 Function | Function(h, { column, $index }) | — | — |
| sortable | 对应列是否可以排序，如果设置为 'custom'，则代表用户希望远程排序，需要监听 Table 的 sort-change 事件 | boolean, string | true, false, 'custom' | false |
| sort-method | 对数据进行排序的时候使用的方法，仅当 sortable 设置为 true 的时候有效，需返回一个数字，和 Array.sort 表现一致 | Function(a, b) | — | — |
| sort-by | 指定数据按照哪个属性进行排序，仅当 sortable 设置为 true 且没有设置 sort-method 的时候有效。如果 sort-by 为数组，则先按照第 1 个属性排序，如果第 1 个相等，再按照第 2 个排序，以此类推 | String/Array/Function(row, index) | — | — |
| sort-orders | 数据在排序时所使用排序策略的轮转顺序，仅当 sortable 为 true 时有效。需传入一个数组，随着用户点击表头，该列依次按照数组中元素的顺序进行排序 | array | 数组中的元素需为以下三者之一：`ascending` 表示升序，`descending` 表示降序，`null` 表示还原为原始顺序 | ['ascending', 'descending', null] |
| resizable | 对应列是否可以通过拖动改变宽度（需要在 el-table 上设置 border 属性为真） | boolean | — | true |
| formatter | 用来格式化内容 | Function(row, column, cellValue, index) | — | — |
| show-overflow-tooltip | 当内容过长被隐藏时显示 tooltip | Boolean | — | false |
| align | 对齐方式 | String | left/center/right | left |
| header-align | 表头对齐方式，若不设置该项，则使用表格的对齐方式 | String | left/center/right | — |
| class-name | 列的 className | string | — | — |
| label-class-name | 当前列标题的自定义类名 | string | — | — |
| selectable | 仅对 type=selection 的列有效，类型为 Function，Function 的返回值用来决定这一行的 CheckBox 是否可以勾选 | Function(row, index) | — | — |
| reserve-selection | 仅对 type=selection 的列有效，类型为 Boolean，为 true 则会在数据更新之后保留之前选中的数据（需指定 `row-key`） | Boolean | — | false |
| filters | 数据过滤的选项，数组格式，数组中的元素需要有 text 和 value 属性。 | Array[{ text, value }] | — | — |
| filter-placement | 过滤弹出框的定位 | String | 与 Tooltip 的 `placement` 属性相同 | — |
| filter-multiple | 数据过滤的选项是否多选 | Boolean | — | true |
| filter-method | 数据过滤使用的方法，如果是多选的筛选项，对每一条数据会执行多次，任意一次返回 true 就会显示。 | Function(value, row, column) | — | — |
| filtered-value | 选中的数据过滤项，如果需要自定义表头过滤的渲染方式，可能会需要此属性。 | Array | — | — |

### Table-column Scoped Slot
| name | 说明 |
|------|--------|
| — | 自定义列的内容，参数为 { row, column, $index } |
| header | 自定义表头的内容. 参数为 { column, $index } |

