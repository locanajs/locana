import fs from 'fs'
import { ThemeJsonFormat, ThemeModel } from '../types/theme'

export async function addTheme(name: string, version: string, hash: string) {
  const themeJsonFile = './themes/themes.json'
  const themeJson: ThemeJsonFormat = {
    name: name,
    version: version,
    hash: hash,
    model: ThemeModel.dev,
    created_at: (new Date()).getTime()
  }
  
  let themes = []
  const existThemeJson = fs.existsSync(themeJsonFile)
  if (existThemeJson) {
    themes = JSON.parse(fs.readFileSync(themeJsonFile, 'utf-8'))
  }

  themes.push(themeJson)

  fs.writeFileSync(themeJsonFile, JSON.stringify(themes, null, '\t'))
}