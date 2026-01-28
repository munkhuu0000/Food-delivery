"use client";

import { useState } from "react";
import { CreateAccount } from "../_components/auth/CreateAccount";
import { CreateStrongPassword } from "../_components/auth/CreateStrongPassword";
import { StepContextType } from "../login/page";
import { stepContext } from "../login/page";
import { UserData } from "../_components/auth/CreateAccount";

export default function login() {
  const [step, setStep] = useState<number>(1);
  const [userInfo, setUserInfo] = useState<UserData>({
    username: "",
    emailAddress: "",
  });
  const handleNext = () => {
    setStep((prev) => Math.min(prev + 1, 4));
  };

  const handleBack = () => {
    setStep((prev) => Math.max(prev - 1, 1));
  };

  return (
    <stepContext.Provider value={{ step, handleBack, handleNext }}>
      <div className="flex gap-4 flex-col">
        {step === 1 && (
          <CreateAccount userInfo={userInfo} setUserInfo={setUserInfo} />
        )}
        {step === 2 && <CreateStrongPassword userInfo={userInfo} />}
      </div>
    </stepContext.Provider>
  );
}
