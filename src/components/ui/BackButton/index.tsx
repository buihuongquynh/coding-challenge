/* eslint-disable @next/next/no-img-element */
"use client";
import { FC } from "react";
import back from "./assets/back.png";

type Props = {
  onClick: () => void;
};

export const BackButton: FC<Props> = ({ onClick }) => {
  return (
    <div className="flex items-center gap-2 cursor-pointer bg-[#FAFAFA] mt-[20px]">
      <img src={back.src} alt="" />
      <div className="text-[14px] font-normal text-[#5F5F68]" onClick={onClick}>
        Zurück
      </div>
    </div>
  );
};
BackButton.displayName = "BackButton";
