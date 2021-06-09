import GridView from './src/main';

/* istanbul ignore next */
GridView.install = function(Vue) {
  Vue.component(GridView.name, GridView);
};

export default GridView;
