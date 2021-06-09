import BusinessTable from './src/main';

/* istanbul ignore next */
BusinessTable.install = function(Vue) {
  Vue.component(BusinessTable.name, BusinessTable);
};

export default BusinessTable;
