interface IContants {
  base_url: string;
}

const dev: IContants = {
  base_url: "http://localhost:7071/",
};

const prod: IContants = {
  base_url: "https://fa-savey-backend.azurewebsites.net/api/",
};

export const config = process.env.NODE_ENV === "development" ? dev : prod;
