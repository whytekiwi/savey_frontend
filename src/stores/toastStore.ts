import { debounce } from "lodash";
import { makeAutoObservable, runInAction } from "mobx";

class ToastStore {
  text?: string;
  isOpen: boolean;

  constructor() {
    makeAutoObservable(this);
    this.isOpen = false;
  }

  clearToast = () => {
    // clear toast, which will trigger css animation
    runInAction(() => {
      this.isOpen = false;
    });
    // clear text after animation timeout
    setTimeout(() => {
      runInAction(() => {
        this.text = undefined;
      });
    }, 500);
  };

  private clearToastWithDelay = debounce(() => {
    this.clearToast();
  }, 3000);

  showToast(text: string) {
    runInAction(() => {
      this.text = text;
      this.isOpen = true;
    });

    this.clearToastWithDelay();
  }
}

export default ToastStore;
