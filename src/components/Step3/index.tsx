import { FormItem } from "@/components/ui/FormItem";
import { ChangeEventHandler, FC, useEffect, useRef } from "react";
import info from "./assets/info.png";
import { FormValue } from "../Home";

type Props = {
  isStep3Active: boolean;
  formData: FormValue;
  onChange: ChangeEventHandler<HTMLInputElement>;
};

export const Step3: FC<Props> = ({ isStep3Active, formData, onChange }) => {
  const isError = true;
  const defaultInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (isStep3Active && defaultInputRef.current) {
        defaultInputRef.current.focus();
      }
    }, 1000);

    return () => clearTimeout(timer);
  }, [isStep3Active]);

  return (
    <>
      <div className="bg-[#000D19] sm:py-[40px] py-[16px]">
        <p className="text-[14px] font-medium text-center text-white my-[20px]">
          Eine Solaranlage spart Ihnen ca.
        </p>
        <div className="flex items-center justify-center pb-[40px]">
          <div className="flex items-start">
            <div className="text-[24px] font-medium text-center text-white">
              25.000 - 30.000 € Stromkosten
            </div>
            <div className="ml-[20px]">
              <img src={info.src} alt="" />
            </div>
          </div>
        </div>
      </div>
      <h1 className="font-medium text-[#0A2742] text-[18.4px] text-center mt-[14px] ">
        Gratulation, das Angebot ist in Ihrer Region noch verfügbar! Wir senden
        Ihnen gerne kostenlose Informationen zu.
      </h1>
      <div className="max-w-[410px] m-auto">
        <form>
          <FormItem label="Anrede">
            <div className="flex items-center gap-10">
              <div className="flex items-center gap-2">
                <input
                  type="radio"
                  className="form-radio h-5 w-5 text-indigo-600 cursor-pointer"
                  name="anrede"
                  value="herr"
                  onChange={onChange}
                />
                <p className="text-[#333333] font-normal">Herr</p>
              </div>
              <div className="flex items-center gap-2">
                <input
                  type="radio"
                  className="form-radio h-5 w-5 text-indigo-600 cursor-pointer"
                  name="anrede"
                  value="frau"
                  onChange={onChange}
                />
                <p className="text-[#333333] font-normal">Frau</p>
              </div>
            </div>
          </FormItem>
          <FormItem
            label="Name"
            errorMessage="Bitte Vor- und Nachnamen angeben"
          >
            <input
              type="text"
              className={`border border-solid ${
                isError ? "border-[#CD4218]" : "border-gray-300"
              } w-[410px] h-[46px] rounded-[8px] text-[20px] text-[#4E4E4E] px-5 py-3 outline-black`}
              placeholder="Vor- und Nachname"
              ref={defaultInputRef}
              value={formData.name}
              onChange={onChange}
              name="name"
            />
          </FormItem>
          <FormItem label="Telefonnummer">
            <input
              type="text"
              className="border border-solid border-gray-300 w-[410px] h-[46px] rounded-[8px] text-[20px] text-[#4E4E4E] px-5 py-3 outline-black"
              placeholder="+49 123 456 789"
              value={formData.telefonnummer}
              onChange={onChange}
              name="telefonnummer"
            />
          </FormItem>
          <FormItem label="Postleitzahl">
            <input
              type="text"
              className="border border-solid border-gray-300 w-[410px] h-[46px] rounded-[8px] text-[20px] text-[#4E4E4E] px-5 py-3 outline-black"
              placeholder="12277"
              value={formData.postleitzahl}
              onChange={onChange}
              name="postleitzahl"
            />
          </FormItem>
          <FormItem label="Ort">
            <input
              type="text"
              className="border border-solid border-gray-300 w-[410px] h-[46px] rounded-[8px] text-[20px] text-[#4E4E4E] px-5 py-3 outline-black"
              placeholder="Berlin"
              value={formData.stadt}
              onChange={onChange}
              name="stadt"
            />
          </FormItem>
          <div className="grid grid-cols-3 gap-3">
            <div className="col-span-2">
              <FormItem label="Straße">
                <input
                  type="text"
                  className="border border-solid border-gray-300  h-[46px] rounded-[8px] text-[20px] text-[#4E4E4E] px-5 py-3 outline-black w-full"
                  placeholder="Straße"
                  value={formData.strasse}
                  onChange={onChange}
                  name="strasse"
                />
              </FormItem>
            </div>
            <FormItem label="Hausnummer">
              <input
                type="text"
                className="border border-solid border-gray-300  h-[46px] rounded-[8px] text-[20px] text-[#4E4E4E] px-5 py-3 outline-black w-full"
                placeholder="Nr."
                value={formData.hausnummer}
                onChange={onChange}
                name="hausnummer"
              />
            </FormItem>
          </div>
          <button className="w-full px-[96px] py-[17px] bg-[#02FF83] rounded-full">
            <span className="font-medium text-[16px] text-[#171717]">
              Ja, das ist mein Hausdach.
            </span>
          </button>
        </form>
      </div>
    </>
  );
};
Step3.displayName = "Step3";
