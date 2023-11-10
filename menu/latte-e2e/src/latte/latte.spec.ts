import {execSync} from 'child_process';
import {join} from 'path';

describe('CLI tests', () => {
  it('should print a message', () => {
    const cliPath = join(process.cwd(), 'dist/menu/latte');

    const output = execSync(`node ${cliPath}`).toString();

    expect(output).toEqual(`☕️ 🥛 Готовим латте:
  ☕️ Готовим эспрессо:
    [зерна (обжаренные) (молотые) + вода (горячая)]
  ☕️ Эспрессо готов!
  [зерна (обжаренные) (молотые) + вода (горячая)] + молоко
☕️ 🥛 Латте готов!
`);
  });
});
