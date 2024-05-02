import React, { FC, ReactNode, useState } from "react";
import { StepBar } from "../StepBar";

type Props = {
  slides: ReactNode[];
  activeSlide: number;
};

export const SlideShow: FC<Props> = ({ slides, activeSlide }) => {
  return (
    <div className="mx-auto h-screen min-h-[120vh] overflow-hidden relative ">
      {slides.map((slide, index) => (
        <div
          key={index}
          className="absolute inset-0 transition-transform duration-1000 sm:px-[40px] px-[16px]"
          style={{
            transform: `translateX(${100 * (index - activeSlide)}%)`,
          }}
        >
          {slide}
        </div>
      ))}
    </div>
  );
};
SlideShow.displayName = "SlideShow";
