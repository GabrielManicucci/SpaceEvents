import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

export default function Card({ children }: Props) {
  return (
    <div className="flex flex-col p-9 mb-5 shadow-xl rounded-xl text-left">
      {children}
    </div>
  );
}
