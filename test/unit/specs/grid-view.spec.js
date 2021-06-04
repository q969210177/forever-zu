import { createTest, destroyVM } from '../util';
import GridView from 'packages/grid-view';

describe('GridView', () => {
  let vm;
  afterEach(() => {
    destroyVM(vm);
  });

  it('create', () => {
    vm = createTest(GridView, true);
    expect(vm.$el).to.exist;
  });
});

