import { createTest, destroyVM } from '../util';
import FormButton from 'packages/form-button';

describe('FormButton', () => {
  let vm;
  afterEach(() => {
    destroyVM(vm);
  });

  it('create', () => {
    vm = createTest(FormButton, true);
    expect(vm.$el).to.exist;
  });
});

