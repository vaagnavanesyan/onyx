import {execSync} from 'child_process';
import {join} from 'path';

describe('CLI tests', () => {
  it('should print a message', () => {
    const cliPath = join(process.cwd(), 'dist/menu/americano');

    const output = execSync(`node ${cliPath}`).toString();

    expect(output).toEqual(`☕️ 💧 Готовим американо:
  ☕️ Готовим эспрессо:
    [зерна (обжаренные) (молотые [1]) + вода (горячая) (фильтрованная)]
  ☕️ Эспрессо готов!
  [зерна (обжаренные) (молотые [1]) + вода (горячая) (фильтрованная)] + вода (горячая) (фильтрованная)
☕️ 💧 Американо готов!
`);
  });
});
