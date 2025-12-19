"use client";

import { CreateAccount } from "../../_components/auth/CreateAccount";
import { CreateStrongPassword } from "../../_components/auth/CreateStrongPassword";

export default function login() {
  return (
    <div className="flex gap-4 flex-col">
      <CreateAccount />
      <CreateStrongPassword />
    </div>
  );
}
