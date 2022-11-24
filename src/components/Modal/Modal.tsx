import { ReactNode } from 'react';

type ModalProps = {
  children: ReactNode | ReactNode[];
};
export const Modal = ({ children }: ModalProps) => {
  return (
    <div className="fixed top-0 left-0 h-full w-full  bg-[rgba(0,0,0,0.3)] ">
      <div className="flex h-full scale-[0.65] flex-col items-center justify-center sm:scale-100">
        {children}
      </div>
    </div>
  );
};
