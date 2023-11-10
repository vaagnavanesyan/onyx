import {execSync} from 'child_process';
import {join} from 'path';

describe('CLI tests', () => {
  it('should print a message', () => {
    const cliPath = join(process.cwd(), 'dist/menu/tea');

    const output = execSync(`node ${cliPath}`).toString();

    expect(output).toEqual(`🍵 Готовим чай:
  [листовой чай + вода (горячая)]
🍵 Чай готов!
`);
  });
});
