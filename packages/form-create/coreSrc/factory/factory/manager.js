/* eslint-disable no-unused-vars */
import mergeProps from 'packages/form-create/utils/mergeprops';
import unique from 'packages/form-create/utils/unique';
import extend from 'packages/form-create/utils/extend';

export function createManager(proto) {
  class CustomManager extends Manager {}

  Object.assign(CustomManager.prototype, proto);
  return CustomManager;
}

export default function Manager(handler) {
  extend(this, {
    $handle: handler,
    vm: handler.vm,
    options: {},
    ref: 'fcForm',
    mergeOptionsRule: {
      normal: ['form', 'row', 'info', 'submitBtn', 'resetBtn']
    }
  });
  this.updateKey();
  this.init();
}

extend(Manager.prototype, {
  __init() {
    this.$render = this.$handle.$render;
    this.$r = (...args) => this.$render.renderRule(...args);
  },
  updateKey() {
    this.key = unique();
  },
  // TODO interface
  init() {},
  update() {},
  beforeRender() {},
  form() {
    return this.vm.$refs[this.ref];
  },
  mergeOptions(args, opt) {
    return mergeProps(
      args.map((v) => this.tidyOptions(v)),
      opt,
      this.mergeOptionsRule
    );
  },
  updateOptions(options) {
    this.options = this.mergeOptions([options], this.getDefaultOptions());
    this.update();
  },
  tidyOptions(options) {
    return options;
  },
  tidyRule(ctx) {},
  mergeProp(ctx) {},
  getDefaultOptions() {
    return {};
  },
  render(children) {}
});
