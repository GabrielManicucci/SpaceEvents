import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

export default function Section({ children }: Props) {
  return (
    <div className="flex items-center flex-col justify-center p-2 mt-7">
      {children}
    </div>
  );
}
