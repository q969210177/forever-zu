import FormButton from './src/main';

/* istanbul ignore next */
FormButton.install = function(Vue) {
  Vue.component(FormButton.name, FormButton);
};

export default FormButton;
