
// eslint-disable-next-line no-unused-vars
import is from 'packages/form-create/utils/type';
import ElSelect from 'packages/select/src/select';
import ElOption from 'packages/select/src/option.vue';
const NAME = 'fcSelect';
export default {
  name: NAME,
  functional: true,
  components: {
    ElSelect,
    ElOption
  },
  props: {
    formCreateOptions: {
      type: Array,
      default: () => ([])
    }
  },
  render(h, ctx) {
    function setLabelOrValue(key, showKey) {
      if (key) {
        return key;
      } else {
        return showKey;
      }
    }
    let select = (
      <ElSelect {...ctx.data}>
        {ctx.props.formCreateOptions.map((props, index) => {
          const slot = props.slot;
          return <ElOption
            label={props[setLabelOrValue(ctx.data.props.label, 'label')]}
            value={props[setLabelOrValue(ctx.data.props.showValue, 'value')]}
            disabled={props.disabled}
            key={'' + index * Math.ceil(Math.random() * 1000 * Math.ceil(Math.random() * 1000)) }>
            {slot ? <template
              slot={props.slotName || 'default'}>{is.Function(slot) ? props.slot(h) : slot}</template> : null}
          </ElOption>;
        })}{ctx.children}
      </ElSelect>
    );
    return <div>{select}</div>;
  }
};
