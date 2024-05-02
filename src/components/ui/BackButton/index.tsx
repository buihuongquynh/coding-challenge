"use client";
import { FC } from "react";
import back from "./assets/back.png";

type Props = {
  onClick: () => void;
};

export const BackButton: FC<Props> = ({ onClick }) => {
  return (
    <div className="flex items-center gap-2 cursor-pointer bg-[#FAFAFA] mt-[18px]">
      <img src={back.src} alt="" />
      <div className="text-[14px] font-normal" onClick={onClick}>
        Zurück
      </div>
    </div>
  );
};
BackButton.displayName = "BackButton";
