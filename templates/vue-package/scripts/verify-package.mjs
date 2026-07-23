import assert from 'node:assert/strict'
import { existsSync, readFileSync } from 'node:fs'

const packageJson = JSON.parse(readFileSync(new URL('../package.json', import.meta.url), 'utf8'))
const distUrl = new URL('../dist-lib/', import.meta.url)

for (const file of ['index.js', 'index.d.ts', 'style.css']) {
  assert.ok(existsSync(new URL(file, distUrl)), `Missing dist-lib/${file}`)
}

for (const file of ['hero-visual.png', 'wechat-qr.png', 'scenarios']) {
  assert.ok(!existsSync(new URL(file, distUrl)), `Unexpected landing asset: dist-lib/${file}`)
}

assert.equal(packageJson.name, '@zhixu/fabricmind-ui')
assert.equal(packageJson.type, 'module')
assert.equal(packageJson.exports['.'].import, './dist-lib/index.js')
assert.equal(packageJson.exports['.'].types, './dist-lib/index.d.ts')
assert.equal(packageJson.exports['./style.css'], './dist-lib/style.css')
assert.equal(packageJson.peerDependencies.vue, '^3.5.0')
assert.equal(packageJson.peerDependencies['motion-v'], '^0.13.0')

const library = await import(new URL('index.js', distUrl).href)
const expectedExports = [
  'AlphabetIndex',
  'BrandMark',
  'Button',
  'Checkbox',
  'CheckboxGroup',
  'Collapse',
  'CountUp',
  'DataTable',
  'DateRangeEditor',
  'Dialog',
  'DropdownMenu',
  'EmptyState',
  'Fab',
  'Field',
  'FilterChips',
  'IconButton',
  'Input',
  'Listbox',
  'Pagination',
  'Panel',
  'Popover',
  'ProductCard',
  'Progress',
  'Radio',
  'RadioGroup',
  'Reveal',
  'SectionHeading',
  'Select',
  'SparkBars',
  'Sparkline',
  'Stat',
  'StatusDot',
  'Tabs',
  'Tag',
  'TextArea',
  'ThumbnailStrip',
  'useContactDialog',
  'useTheme',
]

assert.deepEqual(Object.keys(library).sort(), expectedExports.sort())

const bundledSource = readFileSync(new URL('index.js', distUrl), 'utf8')
assert.match(bundledSource, /from\s*["']vue["']/)
assert.match(bundledSource, /from\s*["']motion-v["']/)

console.log('Package artifact contract verified.')

