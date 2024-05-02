"use client";

import {
  ChangeEvent,
  ChangeEventHandler,
  FC,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from "react";
import { Step1 } from "./Step1";
import { Step2 } from "./Step2";
import { Step3 } from "./Step3";
import { BackButton } from "./ui/BackButton";
import { SlideShow } from "./ui/SlideShow";
import { StepBar } from "./ui/StepBar";

export type FormValue = {
  dachform: string;
  dachfenster: string;
  anrede: string;
  name: string;
  telefonnummer: string;
  postleitzahl: string;
  stadt: string;
  strasse: string;
  hausnummer: string;
};

export const Home: FC = () => {
  const [formData, setFormData] = useState<FormValue>({
    dachform: "",
    dachfenster: "",
    anrede: "",
    name: "",
    telefonnummer: "",
    postleitzahl: "",
    stadt: "",
    strasse: "",
    hausnummer: "",
  });

  const [activeSlide, setActiveSlide] = useState(0);
  const [stepInfo, setStepInfo] = useState({
    percent: 10,
    step: 1,
  });

  const handleChangeDachform = useCallback((dachform: string) => {
    setActiveSlide((prevStep) => (prevStep + 1) % slides.length);

    setFormData((prevData) => ({
      ...prevData,
      dachform,
    }));
  }, []);

  const handleDachfenster = useCallback((dachfenster: string) => {
    setActiveSlide((prevStep) => (prevStep + 1) % slides.length);

    setFormData((prevData) => ({
      ...prevData,
      dachfenster,
    }));
  }, []);

  const [errors, setErrors] = useState({
    username: "",
    password: "",
  });

  const validateForm = (name: string, value: string) => {
    let errorMessage = "";
    if (name === "name") {
      if (value.trim() === "") {
        errorMessage = "Username không được để trống";
      }
    } else if (name === "password") {
      if (value.trim() === "") {
        errorMessage = "Password không được để trống";
      }
    }
    return errorMessage;
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    const errorMessage = validateForm(name, value);

    setFormData({
      ...formData,
      [name]: value,
    });

    setErrors({
      ...errors,
      [name]: errorMessage,
    });
  };

  const slides = [
    <Step1 onClick={handleChangeDachform} />,
    <div>
      <Step2 onClick={handleDachfenster} />
      <BackButton
        onClick={() =>
          setActiveSlide((prevStep) => (prevStep - 1) % slides.length)
        }
      />
    </div>,
    <Step3
      isStep3Active={stepInfo.step === 3}
      formData={formData}
      onChange={handleChange}
    />,
  ];

  useEffect(() => {
    if (activeSlide === 0) {
      setStepInfo({
        percent: 10,
        step: 1,
      });
    } else if (activeSlide === 1) {
      setStepInfo({
        percent: 50,
        step: 2,
      });
    } else if (activeSlide === 2) {
      setStepInfo({
        percent: 95,
        step: 3,
      });
    }
  }, [activeSlide]);

  return (
    <div className="max-w-[930px] m-auto bg-[#FAFAFA]">
      <div className="sm:px-[40px] px-[16px]">
        <StepBar percent={stepInfo.percent} step={stepInfo.step} />
      </div>
      <SlideShow activeSlide={activeSlide} slides={slides} />
    </div>
  );
};

Home.displayName = "Home";
