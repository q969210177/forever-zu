import { createTest, destroyVM } from '../util';
import SimpleDialog from 'packages/simpleDialog';

describe('SimpleDialog', () => {
  let vm;
  afterEach(() => {
    destroyVM(vm);
  });

  it('create', () => {
    vm = createTest(SimpleDialog, true);
    expect(vm.$el).to.exist;
  });
});

