import { ReactNode } from 'react';

type ModalProps = {
  children: ReactNode | ReactNode[];
  onClickClose?: () => void;
};
export const Modal = ({ children, onClickClose }: ModalProps) => {
  return (
    <div className="fixed top-0 left-0 h-full w-full  bg-[rgba(0,0,0,0.3)] ">
      <div className="flex h-full scale-[0.65] flex-col items-center justify-center sm:scale-100">
        <div className="w-[80%] overflow-hidden rounded-md bg-white">
          <div className="flex flex-row items-center justify-end">
            <div
              onClick={onClickClose}
              className="mx-3 my-2 h-7 w-7 cursor-pointer rounded-full text-center text-lg font-semibold hover:bg-red-700 hover:text-white"
            >
              X
            </div>
          </div>
          <div className="w-full p-1">{children}</div>
        </div>
      </div>
    </div>
  );
};
