import { FormItem } from "@/components/ui/FormItem";
import {
  ChangeEventHandler,
  FC,
  FocusEventHandler,
  useEffect,
  useState,
} from "react";
import { FormValue } from "../Home";
import { StepInfo } from "../ui/StepInfo";

type Error = {
  name: string;
  telefonnummer: string;
  postleitzahl: string;
  stadt: string;
  strasse: string;
  hausnummer: string;
};

type Props = {
  formData: FormValue;
  errors: Error;
  onSubmit: () => void;
  onChange: ChangeEventHandler<HTMLInputElement>;
  onBlur: FocusEventHandler<HTMLInputElement>;
};

export const Step3: FC<Props> = ({
  formData,
  errors,
  onSubmit,
  onChange,
  onBlur,
}) => {
  const [enableSubmit, setEnableSubmit] = useState(false);

  useEffect(() => {
    const isFilled = Object.values(formData).every(
      (value) => value.trim() !== ""
    );

    const hasError = Object.values(errors).some((error) => error !== "");
    setEnableSubmit(isFilled && !hasError);
  }, [errors, formData]);

  return (
    <>
      <StepInfo />
      <div className="sm:px-[40px] px-[16px]">
        <h1 className="font-medium text-[#0A2742] sm:text-[18.4px] text-[14.4px] sm:text-center mt-[14px] mb-3">
          Gratulation, das Angebot ist in Ihrer Region noch verfügbar! Wir
          senden Ihnen gerne kostenlose Informationen zu.
        </h1>
        <div className="sm:max-w-[410px] m-auto">
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
            <FormItem label="Name" errorMessage={errors.name}>
              <input
                type="text"
                className={`border border-solid ${
                  !!errors.name ? "border-[#CD4218]" : "border-gray-300"
                } sm:w-[410px] w-full h-[46px] rounded-[8px] text-[20px] text-[#4E4E4E] px-5 py-3 outline-black`}
                placeholder="Vor- und Nachname"
                value={formData.name}
                onChange={onChange}
                onFocus={onBlur}
                name="name"
              />
            </FormItem>
            <FormItem label="Telefonnummer" errorMessage={errors.telefonnummer}>
              <input
                type="text"
                className={`border border-solid ${
                  !!errors.telefonnummer
                    ? "border-[#CD4218]"
                    : "border-gray-300"
                } sm:w-[410px] w-full h-[46px] rounded-[8px] text-[20px] text-[#4E4E4E] px-5 py-3 outline-black`}
                placeholder="+49 123 456 789"
                value={formData.telefonnummer}
                onChange={onChange}
                onFocus={onBlur}
                name="telefonnummer"
              />
            </FormItem>
            <FormItem label="Postleitzahl" errorMessage={errors.postleitzahl}>
              <input
                type="number"
                className={`border border-solid ${
                  !!errors.postleitzahl ? "border-[#CD4218]" : "border-gray-300"
                } sm:w-[410px] w-full h-[46px] rounded-[8px] text-[20px] text-[#4E4E4E] px-5 py-3 outline-black`}
                placeholder="12277"
                value={formData.postleitzahl}
                onChange={onChange}
                onFocus={onBlur}
                name="postleitzahl"
              />
            </FormItem>
            <FormItem label="Ort" errorMessage={errors.stadt}>
              <input
                type="text"
                className={`border border-solid ${
                  !!errors.stadt ? "border-[#CD4218]" : "border-gray-300"
                } sm:w-[410px] w-full h-[46px] rounded-[8px] text-[20px] text-[#4E4E4E] px-5 py-3 outline-black`}
                placeholder="Berlin"
                value={formData.stadt}
                onChange={onChange}
                onFocus={onBlur}
                name="stadt"
              />
            </FormItem>
            <div className="grid grid-cols-3 gap-3">
              <div className="col-span-2">
                <FormItem label="Straße" errorMessage={errors.strasse}>
                  <input
                    type="text"
                    className={`border border-solid ${
                      !!errors.strasse ? "border-[#CD4218]" : "border-gray-300"
                    }  h-[46px] rounded-[8px] text-[20px] text-[#4E4E4E] px-5 py-3 outline-black w-full`}
                    placeholder="Straße"
                    value={formData.strasse}
                    onChange={onChange}
                    onFocus={onBlur}
                    name="strasse"
                  />
                </FormItem>
              </div>
              <FormItem label="Hausnummer" errorMessage={errors.hausnummer}>
                <input
                  type="text"
                  className={`border border-solid ${
                    !!errors.hausnummer ? "border-[#CD4218]" : "border-gray-300"
                  }  h-[46px] rounded-[8px] text-[20px] text-[#4E4E4E] px-5 py-3 outline-black w-full`}
                  placeholder="Nr."
                  value={formData.hausnummer}
                  onChange={onChange}
                  onFocus={onBlur}
                  name="hausnummer"
                />
              </FormItem>
            </div>
            <button
              disabled={!enableSubmit}
              className={`w-full sm:px-[96px] py-[17px] ${
                !enableSubmit && "opacity-70"
              } bg-[#02FF83] rounded-full`}
              onClick={(e) => {
                e.preventDefault();
                enableSubmit && onSubmit();
              }}
            >
              <span className="font-medium text-[16px] text-[#171717]">
                Ja, das ist mein Hausdach.
              </span>
            </button>
          </form>
        </div>
      </div>
    </>
  );
};
Step3.displayName = "Step3";
