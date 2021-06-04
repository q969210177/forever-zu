import { createTest, destroyVM } from '../util';
import BusinessTable from 'packages/businessTable';

describe('BusinessTable', () => {
  let vm;
  afterEach(() => {
    destroyVM(vm);
  });

  it('create', () => {
    vm = createTest(BusinessTable, true);
    expect(vm.$el).to.exist;
  });
});

