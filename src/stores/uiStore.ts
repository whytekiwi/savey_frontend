import { makeAutoObservable } from "mobx";

class UiStore {
  notLibby: boolean;

  constructor() {
    makeAutoObservable(this);
    this.notLibby = false;
  }
}

export default UiStore;
