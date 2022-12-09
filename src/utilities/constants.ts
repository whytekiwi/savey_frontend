interface IConstants {
  baseUrl: string;
  isDev: boolean;
}

const dev: IConstants = {
  baseUrl: "http://localhost:7071/api",
  isDev: true,
};

const prod: IConstants = {
  baseUrl: "https://fa-savey-backend.azurewebsites.net/api",
  isDev: false,
};

export const Config = process.env.NODE_ENV === "development" ? dev : prod;
