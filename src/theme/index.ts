import c from 'picocolors'
import { init } from './options/init'

export async function theme(
  root: string = process.cwd(), 
  options: any
) {
  if (root === 'init') {
    init(options).catch((err) => {
      console.error(c.red(`theme error:\n`), err)
      process.exit(1)
    })
  } else if (root === 'dev') {

  } else if (root === 'publish') {

  } else if (root === 'remove') {

  } else if (!options.root) {
    console.log('please input option')
  } else {
    console.log('Unknown option:', root)
  }
}