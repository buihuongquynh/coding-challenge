/* eslint-disable @next/next/no-img-element */
import { FC, useEffect, useState } from "react";
import icon from "./assets/tick.png";

type Props = {
  percent: number;
  step: number;
};

export const StepBar: FC<Props> = ({ percent, step }) => {
  return (
    <div className={`pt-14 pl-3 pr-3 ${step === 3 && "bg-[#000D19]"} pb-5 `}>
      <div className="relative w-full bg-[#64D59F33] h-[4px] rounded-full ">
        <div
          className="absolute left-0 bg-[#02FF83] h-full rounded-full transition-width duration-1000"
          style={{ width: `${percent - 5}%` }}
        />
        <div
          className={`${
            step === 3 ? "text-[#ffffff]" : "text-[#5F5F68]"
          } text-[12px] font-[500] absolute bottom-full transform -translate-x-1/2 pb-[15px] transition-left duration-1000`}
          style={{
            left: `${percent}%`,
          }}
        >
          <div
            className={`${(step === 3 || step === 4) && "min-w-[200px] mr-10"}`}
          >
            {step === 3
              ? `${percent}% - Fast geschafft!`
              : `${percent}% geschafft`}
          </div>
        </div>
        <div
          className={`absolute top-1/2 transform -translate-y-1/2 transition-left duration-1000`}
          style={{
            left: `${percent - 5}%`,
          }}
        >
          <img className="w-[20px] h-[20px]" src={icon.src} alt="Tick Icon" />
        </div>
      </div>
    </div>
  );
};
StepBar.displayName = "StepBar";
