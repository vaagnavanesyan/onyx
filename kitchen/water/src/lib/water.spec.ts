import {water} from './water';

describe('water', () => {
  it('should work', () => {
    expect(water()).toEqual("вода (горячая) (фильтрованная)");
  });
});
