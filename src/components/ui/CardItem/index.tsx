"use client";
import { FC } from "react";

type Item = {
  imageUrl: string;
  name: string;
};

type Props = {
  item: Item;
  onClick: () => void;
};

export const CardItem: FC<Props> = ({ item, onClick }) => {
  return (
    <div
      onClick={onClick}
      className="w-full cursor-pointer card relative sm:h-[220px] text-center rounded-[10px] bg-white shadow flex items-center"
    >
      <div className="center sm:absolute  sm:mb-5">
        <div className="flex items-center justify-center sm:mb-[46px] bg-white px-[32px] py-[16px] rounded-[10px]">
          <div className="sm:w-[120px] sm:h-[108px] w-[31px] h-[35px]">
            <img src={item.imageUrl} alt="" />
          </div>
        </div>
      </div>
      <div className="cardTextWrapper text-[18px] font-[500] sm:pl-0 pl-3">
        <span className="cardText">{item.name}</span>
      </div>
    </div>
  );
};

CardItem.displayName = "CardItem";
