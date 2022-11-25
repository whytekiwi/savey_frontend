import { makeAutoObservable, runInAction } from "mobx";
import { Config } from "../constants";

class UiStore {
  notLibby: boolean;
  id: string = "";

  constructor() {
    makeAutoObservable(this);
    this.notLibby = Config.isDev;
  }

  setId(id: string) {
    runInAction(() => {
      this.id = id;
    });
  }
}

export default UiStore;
