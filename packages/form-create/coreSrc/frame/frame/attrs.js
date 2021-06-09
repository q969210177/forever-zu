import { functionalMerge, normalMerge, toArrayMerge } from 'packages/form-create/utils/mergeprops';

export const keyAttrs = [
  'type',
  'slot',
  'emitPrefix',
  'value',
  'name',
  'native',
  'hidden',
  'display',
  'inject',
  'options',
  'emit',
  'nativeEmit',
  'link',
  'prefix',
  'suffix',
  'update',
  'sync'
];

export const arrayAttrs = ['validate', 'children', 'control'];

export const normalAttrs = ['effect'];

export function attrs() {
  return [
    ...keyAttrs,
    ...normalMerge,
    ...toArrayMerge,
    ...functionalMerge,
    ...arrayAttrs,
    ...normalAttrs
  ];
}
