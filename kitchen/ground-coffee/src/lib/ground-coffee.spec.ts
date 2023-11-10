import {groundCoffee} from './ground-coffee';

describe('groundCoffee', () => {
  it('should work', () => {
    expect(groundCoffee()).toEqual("зерна (обжаренные [2]) (молотые [1])");
  });
});
