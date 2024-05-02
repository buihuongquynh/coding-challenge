import { FC } from "react";
import { DachfensterList } from "./DachfensterList";

type Props = {
  onClick: (dachfenster: string) => void;
};

export const Step2: FC<Props> = ({ onClick }) => {
  return (
    <div>
      <p className="sm:text-[14px] text-[16px] font-[500] text-[#5F5F68] pb-[12px]">
        Kostenloser Solarstrom-Check in einer Minute.
      </p>
      <h2 className="text-[20px] text-[#0A2742] font-[500] mb-[23px]">
        Besitzt Ihr Haus Gauben oder Dachfenster?
      </h2>
      <DachfensterList onClick={onClick} />
    </div>
  );
};
Step2.displayName = "Step2";
