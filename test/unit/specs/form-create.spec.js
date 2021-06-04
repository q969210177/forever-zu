import { createTest, destroyVM } from '../util';
import FormCreate from 'packages/form-create';

describe('FormCreate', () => {
  let vm;
  afterEach(() => {
    destroyVM(vm);
  });

  it('create', () => {
    vm = createTest(FormCreate, true);
    expect(vm.$el).to.exist;
  });
});

