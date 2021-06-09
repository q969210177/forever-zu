## Card 卡片

将信息聚合在卡片容器中展示。

### 基础用法

包含标题，内容和操作。去掉了原来 card body 自带内补的问题 同时 可以外层来限制 card 的大小 只专注于外在的布局
里面的内容自定义 不做限制

:::demo Card 组件包括`header`和`body`部分，`header`部分需要有显式具名 slot 分发，同时也是可选的。

```html
<el-card title="标题的card">
<template slot="left">
		222
	</template>
	<template slot="right">
		<el-button type='text'>操作</el-button>
	</template>
	<div class="item">
		<div v-for="v in 4" :key="v">
			列表内容{{v}}
		</div>
	</div>
</el-card>

<style>
	.item {
		width: 100%;
		height: 100%;
		padding: 5px;
		border: 1px solid red;
	}
</style>
```
### 自定义header的card
:::
:::demo Card 组件包括`header`和`body`部分，`header`部分需要有显式具名 slot 分发，同时也是可选的。

```html
<el-card title="标题的card">
	<template slot="header">
		<el-input size="mini" v-model="inputValue"></el-input>
		<el-button size="mini">查询</el-button>
	</template>
	
	<div class="item">
		<div v-for="v in 4" :key="v">
			列表内容{{v}}
		</div>
	</div>
</el-card>
<script>
  export default {
	  data(){
		  return{inputValue:""}
	  }
  }
</script>
<style>
	.item {
		width: 100%;
		height: 100%;
		padding: 5px;
		border: 1px solid red;
	}
</style>
```

:::
### 简单卡片

卡片可以只有内容区域 通过 showHeader 来控制是否展示 cardheader。

:::demo

```html
<el-card :showHeader="false">
	<div v-for="o in 4" :key="o" class="text item">
		{{'列表内容 ' + o }}
	</div>
</el-card>

<style></style>
```

:::

### 带图片

可配置定义更丰富的内容展示。

:::demo 配置`body-style`属性来自定义`body`部分的`style`，我们还使用了布局组件。

```html
<el-row>
	<el-col
		:span="8"
		v-for="(o, index) in 2"
		:key="o"
		:offset="index > 0 ? 2 : 0"
	>
		<el-card :body-style="{ padding: '0px' }" :showHeader="false">
			<img
				src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"
				class="image"
			/>
			<div style="padding: 14px;">
				<span>好吃的汉堡</span>
				<div class="bottom clearfix">
					<time class="time">{{ currentDate }}</time>
					<el-button type="text" class="button">操作按钮</el-button>
				</div>
			</div>
		</el-card>
	</el-col>
</el-row>

<style></style>

<script>
	export default {
		data() {
			return {
				currentDate: new Date(),
			};
		},
	};
</script>
```

:::

### 卡片阴影

可对阴影的显示进行配置。

:::demo 通过`shadow`属性设置卡片阴影出现的时机：`always`、`hover`或`never`。

```html
<el-row :gutter="12">
	<el-col :span="8">
		<el-card shadow="always">
			总是显示
		</el-card>
	</el-col>
	<el-col :span="8">
		<el-card shadow="hover">
			鼠标悬浮时显示
		</el-card>
	</el-col>
	<el-col :span="8">
		<el-card shadow="never">
			从不显示
		</el-card>
	</el-col>
</el-row>
```

:::

### Attributes

| 参数       | 说明                                           | 类型   | 可选值                 | 默认值              |
| ---------- | ---------------------------------------------- | ------ | ---------------------- | ------------------- |
| header     | 设置 header，也可以通过 `slot#header` 传入 DOM | string | —                      | —                   |
| body-style | 设置 body 的样式                               | object | —                      | {  } |
| shadow     | 设置阴影显示时机                               | string | always / hover / never | always              |
| showHeader     | 是否展示头部                              | boolen | true / false / 		 	| true              |
| title     | header左侧的title                              | string | always / hover / never | always              |
