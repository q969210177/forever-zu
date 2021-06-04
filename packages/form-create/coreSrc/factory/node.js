import toLine from 'packages/form-create/utils/toline';
import is from 'packages/form-create/utils/type';
import toString from 'packages/form-create/utils/tostring';
import extend from 'packages/form-create/utils/extend';
import Vue from 'vue';

function parseProp(prop) {
  if (is.String(prop)) return { domProps: { innerHTML: prop } };
  return prop;
}

export function CreateNodeFactory() {
  const aliasMap = {};

  function CreateNode(vm) {
    vm && this.setVm(vm);
  }

  extend(CreateNode.prototype, {
    setVm(vm) {
      this.vm = vm;
      this.$h = vm.$createElement;
    },
    make(tag, data, children) {
      if (Vue.config.isReservedTag(tag) && data.nativeOn) delete data.nativeOn;
      let Node = this.$h(tag, parseProp(data), children || []);
      Node.context = this.vm;
      return Node;
    },
    aliasMap
  });

  extend(CreateNode, {
    aliasMap,
    alias(alias, name) {
      aliasMap[alias] = name;
    },
    use(nodes) {
      Object.keys(nodes).forEach((k) => {
        const line = toLine(k);
        const lower = toString(k).toLocaleLowerCase();
        const v = nodes[k];
        [k, line, lower].forEach((n) => {
          CreateNode.alias(k, v);
          CreateNode.prototype[n] = function(data, children) {
            return this.make(v, data, children);
          };
        });
      });
    }
  });

  return CreateNode;
}
