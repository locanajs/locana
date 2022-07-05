export enum ThemeModel {
  'dev' = 'DEV',
  'prod' = 'PROD'
}

export interface ThemeJsonFormat {
  name: string
  version: string
  hash: string
  model: ThemeModel
  created_at: number
}