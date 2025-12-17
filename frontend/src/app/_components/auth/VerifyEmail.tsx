"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { email, z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { _email } from "zod/v4/core";
import { LoginHeader } from "./LoginHeader";
import { LoginFooter } from "./LoginFooter";

export const VerifyEmail = () => {
  return (
    <div className="flex gap-10 justify-center items-center">
      <div className="w-104 h-94 flex flex-col ">
        <LoginHeader
          title={"Please verify Your Email"}
          text={
            "We just sent an email to Test@gmail.com. Click the link in the email to verify your account."
          }
        />
        <div className="flex flex-col gap-6">
          <Button
            type="submit"
            className="w-full h-9 background/bg-primary"
            variant="default"
          >
            Resend email
          </Button>
        </div>
      </div>
      <div className="w-214 h-226 rounded-4xl">
        <img
          className="w-214 h-226 rounded-4xl object-cover"
          src="/deliveryGuy.jpg"
          alt="deliveryGuy"
        />
      </div>
    </div>
  );
};
