/* eslint-disable no-unused-vars */
import getSlot from 'packages/form-create/utils/slot';
import toArray from 'packages/form-create/utils/toarray';
// import './style.css';
import ElUpload from 'packages/upload/index.js';
// packages\progress\src\progress.vue
import ElProgress from 'packages/progress/index.js';

function parseFile(file, i) {
  return {
    url: file,
    name: getFileName(file),
    uid: i
  };
}

function getFileName(file) {
  return ('' + file).split('/').pop();
}

const NAME = 'fcUpload';

export default {
  name: NAME,
  props: {
    formCreateRule: {
      type: Object,
      default: () => ({props: {}})
    },
    onHandle: {
      type: Function,
      default(file) {
        this.previewImage = file.url;
        this.previewVisible = true;
      }
    },
    uploadType: {
      type: String,
      default: 'file'
    },
    limit: {
      type: Number,
      default: 0
    },
    allowRemove: {
      type: Boolean,
      default: true
    },
    previewMask: undefined,
    modalTitle: String,
    handleIcon: {
      type: [String, Boolean],
      default: () => undefined
    },
    value: [Array, String]
  },
  data() {
    return {
      uploadModel: [1111111]
    };
  },
  created() {
    // if (this.formCreateRule.props.showFileList === undefined) {
    //   this.formCreateRule.props.showFileList = false;
    // }
    // this.formCreateRule.props.fileList = toArray(this.value).map(parseFile);
  },
  watch: {
    uploadModel(newV) {
      console.log(newV);
    }
    // limit(n, o) {
    //   if (o === 1 || n === 1) {
    //     this.update();
    //   }
    // }
  },
  methods: {
    key(unique) {
      return unique;
    },
    // isDisabled() {
    //   return this.formCreateRule.props.disabled === true;
    // },
    // onRemove(file) {
    //   if (this.isDisabled()) {
    //     return;
    //   }
    //   this.$refs.upload.handleRemove(file);
    // },
    // handleClick(file) {
    //   if (this.isDisabled()) {
    //     return;
    //   }
    //   this.onHandle(file);
    // },
    // makeItem(file, index) {
    //   return this.uploadType === 'image'
    //     ? <img src={file.url} key={this.key('img' + index)}/>
    //     : <i class="el-icon-tickets" key={this.key('i' + index)}/>;
    // },
    // makeRemoveIcon(file, index) {
    //   return <i class="el-icon-delete" on-click={() => this.onRemove(file)} key={this.key('ri' + index)}/>;
    // },
    // makeHandleIcon(file, index) {
    //   return <i
    //     class={(this.handleIcon === true || this.handleIcon === undefined) ? 'el-icon-view' : this.handleIcon}
    //     on-click={() => this.handleClick(file)} key={this.key('hi' + index)}/>;
    // },
    // makeProgress(file, index) {
    //   return <ElProgress props={{percentage: file.percentage, type: 'circle', width: 52}} style="margin-top:2px;"
    //     key={this.key('pg' + index)}/>;
    // },
    // makeIcons(file, index) {
    //   const icons = [];
    //   if (this.allowRemove || this.handleIcon !== false) {
    //     if ((this.uploadType !== 'file' && this.handleIcon !== false) || (this.uploadType === 'file' && this.handleIcon)) {
    //       icons.push(this.makeHandleIcon(file, index));
    //     }
    //     if (this.allowRemove) {
    //       icons.push(this.makeRemoveIcon(file, index));
    //     }

    //     return <div class='fc-upload-cover'>{icons}</div>;
    //   }
    // },
    // makeFiles() {
    //   return this.uploadList.map((file, index) => this.$scopedSlots.fileList ? this.$scopedSlots.fileList({
    //     file,
    //     index,
    //     vm: this
    //   }) : <div key={this.key(index)}
    //     class='fc-files'>{(file.percentage !== undefined && file.status !== 'success') ? this.makeProgress(file, index) : [this.makeItem(file, index), this.makeIcons(file, index)]}</div>);
    // },
    // makeUpload() {
    //   const isShow = (!this.limit || this.limit > this.uploadList.length);
    //   return <ElUpload {...this.formCreateRule} ref="upload"
    //     styleObj={{display: 'inline-block', width: '80px'}}
    //     key={this.key('upload')}>
    //     {isShow ? <template slot="default">
    //       {this.$slots.default || <div class='fc-upload-btn'>
    //         <i class="el-icon-upload2"/>
    //       </div>}
    //     </template> : null}{getSlot(this.$slots, ['default'])}
    //   </ElUpload>;
    // }
    // update() {
    //   let files = this.$refs.upload.uploadFiles.map((file) => file.url).filter((url) => url !== undefined);
    //   this.$emit('input', this.limit === 1 ? (files[0] || '') : files);
    // },
    // handleCancel() {
    //   this.previewVisible = false;
    // }
    uploadChange(file, fileList) {
      this.$emit('input', fileList);
    }
  },
  mounted() {
    // this.uploadList = this.$refs.upload.uploadFiles;
    // this.$watch(() => this.$refs.upload.uploadFiles, () => {
    //   this.update();
    // }, {deep: true});
  },
  render(h) {
    // if (this.$refs.upload) {
    //   if (this.formCreateRule.props.showFileList === undefined) {
    //     this.formCreateRule.props.showFileList = this.$refs.upload.showFileList;
    //   }
    //   this.formCreateRule.props.fileList = this.$refs.upload.fileList;
    // }
    /**
     * <div
        class='_fc-upload'>{[this.formCreateRule.props.showFileList ? [] : this.makeFiles(), this.makeUpload()]}
        <el-dialog appendToBody={true} modal={this.previewMask} title={this.modalTitle} visible={this.previewVisible}
          on-close={this.handleCancel}>
          <img alt="example" style="width: 100%" src={this.previewImage}/>
        </el-dialog>
      </div>
       scopedSlots: {
    default: props => createElement('span', props.text)
     {componentsVue}
  },{getSlot(this.$slots, ['default'])}
    */
    // const isShow = (!this.limit || this.limit > this.uploadList.length);
    let componentsVue = null;
    if (this.formCreateRule.components) {
      componentsVue = h(this.formCreateRule.components, {props: {...this.formCreateRule.componentsProp}}, this.formCreateRule.componentsProp.text);
    }
    return (
      <div class='fc_upload'>
        <ElUpload ref="upload"
          key={this.key('upload')}
          on-onChange={this.uploadChange}
          {...this.formCreateRule}
        >
          {componentsVue ? componentsVue : <template slot="default">
            {this.$slots.default || <div class='fc-upload-btn'>
              <i class={this.formCreateRule.icon ? this.formCreateRule.icon : 'el-icon-upload2'}/>
            </div>}
          </template>}
        </ElUpload>
      </div>);
  }

};
