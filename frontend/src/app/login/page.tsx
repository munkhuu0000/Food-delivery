"use client";

import { CreateAccount } from "../_components/auth/CreateAccount";
import { Createpassword } from "../_components/auth/CreatePassword";
import { CreateStrongPassword } from "../_components/auth/CreateStrongPassword";
import { Login } from "../_components/auth/Login";
import { Resetpassword } from "../_components/auth/Resetpassword";
import { VerifyEmail } from "../_components/auth/VerifyEmail";

export default function login() {
  return (
    <div className="flex gap-4 flex-col">
      <Login />
      <Resetpassword />
      <VerifyEmail />
      <Createpassword />
      <CreateAccount />
      <CreateStrongPassword />
    </div>
  );
}
