"use client";

import {
  ChangeEvent,
  FocusEvent,
  FC,
  useCallback,
  useEffect,
  useState,
} from "react";
import { Step1 } from "./Step1";
import { Step2 } from "./Step2";
import { Step3 } from "./Step3";
import { BackButton } from "./ui/BackButton";
import { SlideShow } from "./ui/SlideShow";
import { StepBar } from "./ui/StepBar";
import { Success } from "./Success";

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
    setActiveSlide((prevStep) => (prevStep + 1) % 4);

    setFormData((prevData) => ({
      ...prevData,
      dachform,
    }));
  }, []);

  const handleDachfenster = useCallback((dachfenster: string) => {
    setActiveSlide((prevStep) => (prevStep + 1) % 4);

    setFormData((prevData) => ({
      ...prevData,
      dachfenster,
    }));
  }, []);

  const [errors, setErrors] = useState({
    name: "",
    telefonnummer: "",
    postleitzahl: "",
    stadt: "",
    strasse: "",
    hausnummer: "",
  });

  const validateForm = (name: string, value: string) => {
    let errorMessage = "";
    if (!value.trim()) {
      errorMessage = `Bitte Vor- und ${name} angeben`;
    }

    if (name === "postleitzahl") {
      if (value.length < 4) {
        errorMessage = "Diese Postleitzahl ist leider zu kurz";
      }
    }

    if (name === "telefonnummer") {
      const cleanedPhoneNumber = value.replace(/\s|-|\(|\)/g, "");
      if (
        !/^(\+49|0049)/.test(cleanedPhoneNumber) ||
        !/^\+49\d{9,10}$/.test(cleanedPhoneNumber)
      ) {
        errorMessage = "ungültige telefonnummer";
      }
    }
    return errorMessage;
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    if (name === "postleitzahl" && value.length === 6) {
      return;
    }

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

  const handleBlur = useCallback(
    (e: FocusEvent<HTMLInputElement>) => {
      const { name, value } = e.target;
      const errorMessage = validateForm(name, value);
      setErrors({
        ...errors,
        [name]: errorMessage,
      });
    },
    [errors]
  );

  const handleSubmit = useCallback(async () => {
    try {
      await fetch("https://65590262e93ca47020a9fce8.mockapi.io/insert", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      setActiveSlide((prevStep) => (prevStep + 1) % 4);
    } catch {
      //Do nothing
    }
  }, [formData]);

  const slides = [
    <Step1 onClick={handleChangeDachform} key={1} />,
    <div className="sm:px-[40px] px-[16px]" key={2}>
      <Step2 onClick={handleDachfenster} />
      <BackButton
        onClick={() =>
          setActiveSlide((prevStep) => (prevStep - 1) % slides.length)
        }
      />
    </div>,
    <Step3
      key={3}
      formData={formData}
      errors={errors}
      onChange={handleChange}
      onSubmit={handleSubmit}
      onBlur={handleBlur}
    />,
    <Success key={4} />,
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
    } else if (activeSlide === 3) {
      setStepInfo({
        percent: 100,
        step: 4,
      });
    }
  }, [activeSlide]);

  return (
    <div className="max-w-[930px] m-auto bg-[#FAFAFA] overflow-hidden sm:mt-20">
      <StepBar percent={stepInfo.percent} step={stepInfo.step} />
      <SlideShow activeSlide={activeSlide} slides={slides} />
    </div>
  );
};

Home.displayName = "Home";
