/* eslint-disable one-var */
import { err } from 'packages/form-create/utils/console';
import fetch from './fetch';
import { invoke } from './util';
import is from 'packages/form-create/utils/type';

const $fetch = {
  name: 'fetch',
  loaded(...args) {
    run(...args);
  },
  watch(inject, rule, api) {
    if (!run(inject, rule, api)) {
      inject.clearProp();
      api.sync(rule);
    }
  }
};

function parseOpt(option) {
  if (is.String(option)) {
    option = {
      action: option,
      to: 'options'
    };
  }
  return option;
}

function run(inject, rule, api) {
  let option = inject.value;
  if (!option) return false;
  option = parseOpt(option);
  if (!option.to) {
    return false;
  }
  const onError = option.onError;

  const check = () => {
    if (!inject.getValue()) {
      inject.clearProp();
      api.sync(rule);
      return true;
    }
  };

  const set = (val) => {
    let data = inject.getProp(),
      to;
    option.to.split('.').forEach((v) => {
      if (to) {
        data = data[to] = {};
      }
      to = v;
    });
    data[to] = val;
  };

  invoke(() =>
    fetch({
      ...option,
      onSuccess(body) {
        if (check()) return;
        set((option.parse || ((v) => v.data))(body));
        api.sync(rule);
      },
      onError(e) {
        set(undefined);
        if (check()) return;
        (onError || ((e) => err(e.message || 'fetch fail ' + option.action)))(
          e,
          rule,
          api
        );
      }
    })
  );

  return true;
}

export default $fetch;
