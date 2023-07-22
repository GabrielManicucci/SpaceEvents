import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

export default function Card({ children }: Props) {
  return (
    <div className="flex flex-col mb-14 shadow-xl rounded-xl text-left md:flex-row w-full">
      {children}
    </div>
  );
}
