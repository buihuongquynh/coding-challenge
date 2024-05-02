import { FC } from "react";
import { DachformList } from "./DachformList";

type Props = {
  onClick: (dachform: string) => void;
};

export const Step1: FC<Props> = ({ onClick }) => {
  return (
    <div className="sm:px-[40px] px-[16px]">
      <p className="sm:text-[14px] text-[16px] font-[500] text-[#5F5F68] pb-[12px]">
        Kostenloser Solarstrom-Check in einer Minute.
      </p>
      <h2 className="text-[20px] text-[#0A2742] font-[500] mb-[23px]">
        Welche Dachform hat Ihr Haus?
      </h2>
      <DachformList onClick={onClick} />
    </div>
  );
};
Step1.displayName = "Step1";
