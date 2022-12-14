interface IServiceConfig {
  devProxyBaseUrl: string,
  devBaseUrl: string,
  devTimeout: number,

  prodProxyBaseUrl: string,
  prodBaseUrl: string,
  prodTimeout: number,
}

const ServiceConfig: IServiceConfig = {
  devProxyBaseUrl: "/api/wjhs",
  devBaseUrl: "http://localhost:80",
  devTimeout: 15000,

  prodProxyBaseUrl: "/api/wjhs",
  prodBaseUrl: "http://114.55.32.234:8127",
  prodTimeout: 5000,
}

export default ServiceConfig;