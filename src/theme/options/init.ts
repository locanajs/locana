import fs from "fs"
import { addTheme } from "../../../utils"

const themeRootPath = './themes'

export interface ThemeInit {
  name: string,
  title: string
}

export async function init(options: ThemeInit) {
  
  const hash = themeHash(options.name)

  const themePath = `${themeRootPath}/${hash}`

  let exists = fs.existsSync(themePath)
  if (!exists) {
    fs.mkdir(themePath, (err) => {
      err && console.log('主题文件夹创建失败：', err)
    })
  }

  const themeConfig = {
    name: options.name,
    title: options.title,
    version: "1.0.0",
    hash: hash
  }

  fs.writeFileSync(
    `${themePath}/.locana.json`,
    JSON.stringify({
      theme: themeConfig
    }, null, '\t')
  )
  addTheme(options.name,'1.0.0', hash)
}

function themeHash(name: string) {
  return name + '_' + Math.ceil((new Date()).getTime() / 1000);
}