import { ReactNode, RefObject, useCallback, useEffect, useRef, useState } from 'react';
import ReactDOM from 'react-dom';

export const useModal = (child: ReactNode) => {
  const modalRoot = document.getElementById("modal-root");
  const ref = useRef<HTMLDivElement>(null);

  const [show, setShow] = useState<boolean>(false);

  //   useEffect(() => {
  //     if (show) {
  //       ReactDOM.createPortal(
  //         <div
  //           ref={ref}
  //           className="absolute flex h-full w-full flex-col items-center justify-center"
  //         >
  //           {childRef.current}
  //         </div>,
  //         modalRoot!
  //       );
  //     }
  //   }, [childRef, modalRoot, show]);

  const showModal = useCallback(() => {
    ReactDOM.createPortal(
      <div
        ref={ref}
        className="absolute flex h-full w-full flex-col items-center justify-center"
      >
        {child}
      </div>,
      modalRoot!
    );
    setShow(true);
  }, [child, modalRoot]);

  const hideModal = useCallback(() => {
    setShow(false);
  }, []);

  return {
    showModal,
    hideModal,
    isShown: show,
  };
};
