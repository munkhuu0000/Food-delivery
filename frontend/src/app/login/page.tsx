"use client";

import { createContext, Dispatch, SetStateAction, useState } from "react";
import { Createpassword } from "../_components/auth/CreatePassword";
import { Login } from "../_components/auth/Login";
import { Resetpassword } from "../_components/auth/Resetpassword";
import { VerifyEmail } from "../_components/auth/VerifyEmail";

export type StepContextType = {
  step: number;
  handleNext: () => void;
  handleBack: () => void;
};
export const stepContext = createContext<StepContextType>(
  {} as StepContextType
);

export default function login() {
  const [step, setStep] = useState<number>(1);
  const [data, setData] = useState({ emailAddress: "", password: "" });

  const handleNext = () => {
    setStep((prev) => Math.min(prev + 1, 4));
  };

  const handleBack = () => {
    setStep((prev) => Math.max(prev - 1, 1));
  };

  return (
    <stepContext.Provider value={{ step, handleBack, handleNext }}>
      <div className="flex gap-4 flex-col">
        {step === 1 && <Login />}
        {step === 2 && <Resetpassword />}
        {step === 3 && <VerifyEmail />}
        {step === 4 && <Createpassword />}
      </div>
    </stepContext.Provider>
  );
}
