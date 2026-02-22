const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');

test('workspace folders exist and contain package manifests', () => {
  const root = process.cwd();
  const folders = ['packages', 'services', 'integrations'];

  for (const folder of folders) {
    const abs = path.join(root, folder);
    assert.equal(fs.existsSync(abs), true);
    const children = fs.readdirSync(abs, { withFileTypes: true }).filter((d) => d.isDirectory());
    assert.ok(children.length > 0);

    for (const child of children) {
      const pkg = path.join(abs, child.name, 'package.json');
      assert.equal(fs.existsSync(pkg), true);
    }
  }
});
