import c from 'picocolors'
import minimist from 'minimist'
import { site, theme } from '.'
import { version } from '../package.json';

const argv: any = minimist(process.argv.slice(2))

console.log(c.cyan(`locana v${version}`))

const command = argv._[0]
const root = argv._[command ? 1 : 0]

if (root) {
  argv.root = root
}

if(command === 'site') {
  site(root, argv).catch((err) => {
    console.error(c.red(`site error:\n`), err)
    process.exit(1)
  })
} else if (!command || command === 'theme') {
  theme(root, argv).catch((err) => {
    console.error(c.red(`theme error:\n`), err)
    process.exit(1)
  })
} else {
  console.log(c.red(`unknown command "${command}".`))
  process.exit(1)
}