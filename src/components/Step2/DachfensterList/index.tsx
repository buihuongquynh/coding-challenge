"use client";

import { FC } from "react";
import { CardItem } from "../../ui/CardItem";
import anderes from "./asset/anderes.png";
import gauben from "./asset/gauben.png";
import keineGouben from "./asset/keineGauben.png";

const dachfensterData = [
  {
    key: "ja",
    imageUrl: gauben.src,
    name: "Ja",
  },
  {
    key: "nein",
    imageUrl: keineGouben.src,
    name: "Nein",
  },
  {
    key: "anderes",
    imageUrl: anderes.src,
    name: "Anderes",
  },
];

type Props = {
  onClick: (dachfenster: string) => void;
};

export const DachfensterList: FC<Props> = ({ onClick }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 ">
      {dachfensterData.map((dachfenster) => {
        return (
          <CardItem
            key={dachfenster.key}
            onClick={() => onClick(dachfenster.key)}
            item={dachfenster}
          />
        );
      })}
    </div>
  );
};

DachfensterList.displayName = "DachfensterList";
