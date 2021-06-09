import components from '../components';
import parsers from '../parsers';
import alias from './alias';
import manager from './manager';
// packages/form-create/src/index.js
import FormCreateFactory from 'packages/form-create/coreSrc/index';
import makers from './maker';
import extendApi from './api';

function install(FormCreate) {
  FormCreate.componentAlias(alias);
  components.forEach(component => {
    FormCreate.component(component.name, component);
  });

  parsers.forEach((parser) => {
    FormCreate.parser(parser);
  });

  Object.keys(makers).forEach(name => {
    FormCreate.maker[name] = makers[name];
  });
}

export default function elmFormCreate() {
  return FormCreateFactory({
    ui: `${process.env.UI}`,
    version: `${process.env.VERSION}`,
    manager,
    extendApi,
    install,
    attrs: {
      normal: ['col', 'wrap'],
      array: ['className'],
      key: ['title', 'info']
    }
  });
}
