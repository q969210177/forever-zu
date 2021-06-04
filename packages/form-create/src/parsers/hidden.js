import { creatorFactory } from 'packages/form-create/coreSrc/index';

const name = 'hidden';
export default {
  name,
  maker: {
    [name]: (field, value) => creatorFactory(name)('', field, value)
  },
  render() {
    return [];
  }
};
