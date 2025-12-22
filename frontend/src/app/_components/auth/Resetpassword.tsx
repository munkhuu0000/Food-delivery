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
import { useContext } from "react";
import { stepContext } from "@/app/login/page";
import { ChevronLeft } from "lucide-react";
import Link from "next/link";

export const Resetpassword = () => {
  const { handleBack, handleNext } = useContext(stepContext);

  const formSchema = z.object({
    emailAddress: z.email("Invalid email. Use a format like example@email.com"),
  });
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      emailAddress: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    handleNext();
  }

  return (
    <div className="flex gap-10 justify-center items-center">
      <div className="w-104 h-94 flex flex-col ">
        <Button className="w-9 h-9" variant={"outline"} onClick={handleBack}>
          <ChevronLeft size={16} strokeWidth={2.25} />
        </Button>
        <LoginHeader
          title={"Reset your password"}
          text={"Enter your email to receive a password reset link."}
        />
        <div className="flex flex-col gap-6">
          <Form {...form}>
            <form className="space-y-6" onSubmit={form.handleSubmit(onSubmit)}>
              <FormField
                control={form.control}
                name="emailAddress"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel></FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Enter your email address"
                        {...field}
                      />
                    </FormControl>
                    <FormDescription></FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button
                type="submit"
                className="w-full h-9 background/bg-primary"
                variant="default"
              >
                Send link
              </Button>
            </form>
          </Form>
          <div className="w-104 h-94 flex flex-row gap-2 justify-center">
            <p className="font-normal  text-[16px] text-[#71717A]">
              Already have an account?
            </p>
            <Link href="/login">
              <p className="font-normal text-[16px] text-[#2563EB]">Log in</p>
            </Link>
          </div>
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
