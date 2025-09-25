import { useEffect, useRef } from "react";

export function useOutsideClick(handler, listenCapturing = true) {
  //use the ref to refer to our react component
  const ref = useRef();

  useEffect(
    function () {
      function handleClick(e) {
        //Checking we have an ref & the target event is not within the component
        if (ref.current && !ref.current.contains(e.target)) {
          handler();
        }
      }
      document.addEventListener("click", handleClick, listenCapturing);

      //remove event listen when it unmounts
      return () =>
        document.removeEventListener("click", handleClick, listenCapturing);
    },
    [handler]
  );

  return ref;
}
