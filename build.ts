import { build } from 'esbuild'

const shared = {
  bundle: true,
  entryPoints: ['src/index.ts'],
  minify: true,
  sourcemap: true,
}

build({
  ...shared,
  format: 'esm',
  logLevel: "info",
  outfile: './dist/index.esm.js',
  target: ['es2015'],
})
.then(() => {
  console.log('Done.')
})
