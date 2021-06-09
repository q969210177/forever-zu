import RightMenu from './src/main';

RightMenu.install = function(Vue) {
  Vue.component(RightMenu.name, RightMenu);
};

export default RightMenu;
