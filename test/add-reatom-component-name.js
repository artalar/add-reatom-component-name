import { createTest } from '@putout/test';
import * as addReatomComponentName from '../lib/add-reatom-component-name.js';

const test = createTest(import.meta.url, {
  printer: 'putout',
  plugins: [['add-reatom-component-name', addReatomComponentName]],
});

test('plugin-add-reatom-component-name: report', (t) => {
  t.report('component', 'name components properly');
  t.end();
});

test('plugin-add-reatom-component-name: transform', (t) => {
  t.transform('component');
  t.end();
});
