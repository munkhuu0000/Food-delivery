"use client";

import { useState } from "react";
import { CreateAccount } from "../_components/auth/CreateAccount";
import { CreateStrongPassword } from "../_components/auth/CreateStrongPassword";
import { StepContextType } from "../login/page";
import { stepContext } from "../login/page";

export default function login() {
  const [step, setStep] = useState<number>(1);
  const handleNext = () => {
    setStep((prev) => Math.min(prev + 1, 4));
  };

  const handleBack = () => {
    setStep((prev) => Math.max(prev - 1, 1));
  };

  return (
    <stepContext.Provider value={{ step, handleBack, handleNext }}>
      <div className="flex gap-4 flex-col">
        {step === 1 && <CreateAccount />}
        {step === 2 && <CreateStrongPassword />}
      </div>
    </stepContext.Provider>
  );
}
