interface IContants {
  baseUrl: string;
  isDev: boolean;
}

const dev: IContants = {
  baseUrl: "http://localhost:7071/api",
  isDev: true,
};

const prod: IContants = {
  baseUrl: "https://fa-savey-backend.azurewebsites.net/api",
  isDev: false,
};

export const Config = process.env.NODE_ENV === "development" ? dev : prod;
