/* eslint-disable no-unused-vars */
import getSlot from 'packages/form-create/utils/slot';
import ElRadioGroup from 'packages/radio-group/';

const NAME = 'fcRadio';

export default {
  name: NAME,
  props: {
    formCreateRule: {
      type: Object,
      default: () => ({})
    },
    formCreateOptions: {
      type: Array,
      default: () => []
    },
    value: {},
    type: String
  },
  watch: {
    value() {
      this.update();
    }
  },
  data() {
    return {
      trueValue: []
    };
  },
  methods: {
    onInput(n) {
      this.$emit('input', this.formCreateOptions.filter((opt) => opt.label === n).reduce((initial, opt) => opt.value, ''));
    },
    update() {
      this.trueValue = this.formCreateOptions.filter((opt) => opt.value === this.value).reduce((initial, opt) => opt.label, '');
    }
  },
  created() {
    this.update();
  },
  render() {
    return <ElRadioGroup {...this.formCreateRule} value={this.trueValue}
      on-input={this.onInput}>{this.formCreateOptions.map((opt, index) => {
        const props = {...opt};
        const Type = this.type === 'button' ? 'ElRadioButton' : 'ElRadio';
        delete props.value;
        return <Type {...{props}} key={Type + index + opt.value}/>;
      })}{getSlot(this.$slots)}</ElRadioGroup>;
  }
};
