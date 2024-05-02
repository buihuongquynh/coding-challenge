"use client";

import { FC, ReactNode } from "react";

type Props = {
  children: ReactNode;
  label: string;
  errorMessage?: string;
};

export const FormItem: FC<Props> = ({ children, label, errorMessage }) => {
  return (
    <div className="mb-3">
      <div className="text-[#5F5F68] font-medium text-[14px]">
        {label}{" "}
        {!!errorMessage && (
          <span className="text-[#CD4218] font-medium text-[11.4px]">
            {errorMessage}
          </span>
        )}
      </div>
      <div>{children}</div>
    </div>
  );
};
