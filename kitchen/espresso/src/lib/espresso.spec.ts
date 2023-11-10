import { espresso } from './espresso';

describe('espresso', () => {
  it('should work', () => {
    expect(espresso()).toEqual('[зерна (обжаренные [2]) (молотые) + вода (горячая) (фильтрованная)]');
  });
});
