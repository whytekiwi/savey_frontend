import classNames from "classnames";
import { observer } from "mobx-react-lite";
import React from "react";
import { useStores } from "../../stores/rootStore";
import "./toast.sass";

const Toast = () => {
  const { toastStore } = useStores();

  return (
    <div
      className={classNames("toast", {
        open: toastStore.isOpen,
      })}
      onClick={toastStore.clearToast}
    >
      {toastStore.text}
    </div>
  );
};

export default observer(Toast);
