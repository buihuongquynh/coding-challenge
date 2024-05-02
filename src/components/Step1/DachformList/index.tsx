"use client";

import { FC } from "react";
import anderes from "./asset/anderes.png";
import flachdach from "./asset/flachdach.png";
import pultdach from "./asset/pultdach.png";
import satteldach from "./asset/satteldach.png";
import { CardItem } from "../../ui/CardItem";

const dachformData = [
  {
    key: "satteldach",
    imageUrl: satteldach.src,
    name: "Satteldach",
  },
  {
    key: "flachdach",
    imageUrl: flachdach.src,
    name: "Flachdach",
  },
  {
    key: "pultdach",
    imageUrl: pultdach.src,
    name: "Pultdach",
  },
  {
    key: "anderes",
    imageUrl: anderes.src,
    name: "Anderes",
  },
];

type Props = {
  onClick: (dachform: string) => void;
};

export const DachformList: FC<Props> = ({ onClick }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-4 gap-3 ">
      {dachformData.map((dachform) => {
        return (
          <CardItem
            key={dachform.key}
            onClick={() => onClick(dachform.key)}
            item={dachform}
          />
        );
      })}
    </div>
  );
};

DachformList.displayName = "DachformList";
