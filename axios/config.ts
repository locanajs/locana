export interface ApiConfig {
  appId: string
  api_verison: string
  version?: string
}

export async function requestConfig(

):Promise<ApiConfig> {
  const config: ApiConfig = {
    appId: "haha",
    api_verison: 'v1'
  }

  return config;
}