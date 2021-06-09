import { createTest, destroyVM } from '../util';
import RightMenu from 'packages/right-menu';

describe('RightMenu', () => {
  let vm;
  afterEach(() => {
    destroyVM(vm);
  });

  it('create', () => {
    vm = createTest(RightMenu, true);
    expect(vm.$el).to.exist;
  });
});

