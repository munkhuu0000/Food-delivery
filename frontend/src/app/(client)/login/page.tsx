"use client";

import { createContext, Dispatch, SetStateAction, useState } from "react";
import { CreateAccount } from "../../_components/auth/CreateAccount";
import { Createpassword } from "../../_components/auth/CreatePassword";
import { CreateStrongPassword } from "../../_components/auth/CreateStrongPassword";
import { Login } from "../../_components/auth/Login";
import { Resetpassword } from "../../_components/auth/Resetpassword";
import { VerifyEmail } from "../../_components/auth/VerifyEmail";

type StepContextType = {
  setStep: Dispatch<SetStateAction<StepContextType>>;
  step: number;
};
export const stepContext = createContext<StepContextType>(
  {} as StepContextType
);

export default function login() {
  const [step, setStep] = useState<StepContextType>();

  return (
    <div className="flex gap-4 flex-col">
      {step === 1 && <Login />}
      {step === 2 && <Resetpassword />}
      {step === 3 && <VerifyEmail />}
      {step === 4 && <Createpassword />}
    </div>
  );
}
