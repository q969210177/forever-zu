/* eslint-disable no-eval */
import deepExtend from './deepextend';
import {err} from './console';

const PREFIX = '[[FORM-CREATE-PREFIX-';
const SUFFIX = '-FORM-CREATE-SUFFIX]]';

export function toJson(obj) {
  return JSON.stringify(deepExtend([], obj, true), function(key, val) {
    if (val && val._isVue === true) {return undefined;}

    if (typeof val !== 'function') {
      return val;
    }
    if (val.__inject) {val = val.__origin;}

    if (val.__emit) {return undefined;}

    return PREFIX + val + SUFFIX;
  });
}

function makeFn(fn) {
  return eval('(function(){return ' + fn + ' })()');
}

export function parseJson(json, mode) {
  return JSON.parse(json, function(k, v) {
    if (!v || !v.indexOf) return v;
    try {
      if (v.indexOf(SUFFIX) > 0 && v.indexOf(PREFIX) === 0) {
        v = v.replace(SUFFIX, '').replace(PREFIX, '');
        return makeFn(v.indexOf('function') === -1 && v.indexOf('(') !== 0 ? 'function ' + v : v);
      } else if (!mode && v.indexOf('function') > -1) {return makeFn(v);};
    } catch (e) {
      err(`json 解析失败:${v}`);
      return undefined;
    }
    return v;
  });
}
