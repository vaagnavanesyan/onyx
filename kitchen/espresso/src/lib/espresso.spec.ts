import { espresso } from './espresso';

describe('espresso', () => {
  it('should work', () => {
    expect(espresso()).toEqual('[зерна (обжаренные) (молотые) + вода (горячая) (фильтрованная)]');
  });
});
