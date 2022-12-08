import { RefObject, useEffect } from "react";

function useOutsideAlerter(ref: RefObject<any>, onClickOutside?: () => void) {
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (ref.current && !ref.current.contains(event.target)) {
        onClickOutside?.();
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref, onClickOutside]);
}

export default useOutsideAlerter;
