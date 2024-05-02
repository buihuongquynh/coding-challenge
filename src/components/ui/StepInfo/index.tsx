/* eslint-disable @next/next/no-img-element */
"use client";

import { FC } from "react";
import info from "./assets/info.png";

export const StepInfo: FC = () => {
  return (
    <div className="bg-[#000D19] sm:py-[40px] py-[16px]">
      <p className="text-[14px] font-medium text-center text-white my-[20px]">
        Eine Solaranlage spart Ihnen ca.
      </p>
      <div className="flex items-center justify-center pb-[40px]">
        <div className="flex items-start">
          <div className="sm:text-[24px] text-[17.6px] font-medium text-center text-white">
            25.000 - 30.000 € Stromkosten
          </div>
          <div className="ml-[20px]">
            <img src={info.src} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

StepInfo.displayName = "StepInfo";
