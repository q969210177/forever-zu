/* eslint-disable no-return-assign */
// packages\form-create\coreSrc\index.js
import {creatorFactory} from 'packages/form-create/coreSrc/index';
const name = 'timePicker';
export default {
  name,
  maker: {
    time: creatorFactory(name, (m) => m.props.isRange = false),
    timeRange: creatorFactory(name, (m) => m.props.isRange = true)
  },
  mergeProp(ctx) {
    const props = ctx.prop.props;
    if (!props.valueFormat) {
      props.valueFormat = 'HH:mm:ss';
    }
  }
};
