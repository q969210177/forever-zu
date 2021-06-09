import SimpleDialog from './src/main';

/* istanbul ignore next */
SimpleDialog.install = function(Vue) {
  Vue.component(SimpleDialog.name, SimpleDialog);
};

export default SimpleDialog;
