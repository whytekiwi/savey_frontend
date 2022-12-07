import { makeAutoObservable } from "mobx";
import { Config } from "../constants";

class UiStore {
  notLibby: boolean;

  constructor() {
    makeAutoObservable(this);
    this.notLibby = Config.isDev;
  }
}

export default UiStore;
