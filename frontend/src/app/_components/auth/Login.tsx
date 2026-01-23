"use client";
import Link from "next/link";
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
import { Dispatch, SetStateAction, useContext, useState } from "react";
import { stepContext, StepContextType } from "@/app/login/page";
import { useAuth } from "@/app/context/AuthProvider";

export const Login = () => {
  const { login } = useAuth();

  const { handleBack, handleNext } = useContext(stepContext);

  const formSchema = z.object({
    username: z.string().min(2, "Username must be more than 2 characters."),
    password: z.string().min(2, "Incorrect password. Please try again"),
  });
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      password: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    await console.log(values);
    login(values.username, values.password);
  }

  return (
    <div className="flex gap-10 justify-center items-center">
      <div className="w-104 h-94 flex flex-col ">
        <LoginHeader
          title={"Log in"}
          text={"Log in to enjoy your favorite dishes."}
        />
        <div className="flex flex-col gap-6">
          <Form {...form}>
            <form className="space-y-6" onSubmit={form.handleSubmit(onSubmit)}>
              <FormField
                control={form.control}
                name="username"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel></FormLabel>
                    <FormControl>
                      <Input placeholder="Enter your username" {...field} />
                    </FormControl>
                    <FormDescription></FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input placeholder="Password" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <p
                className="font-normal text-[14px] text-[#18181B] cursor-pointer"
                onClick={handleNext}
              >
                Forgot password?
              </p>
              <Button
                type="submit"
                className="w-full h-9 background/bg-primary"
                variant="default"
              >
                Let's Go
              </Button>
            </form>
          </Form>
          <div className="w-104 h-94 flex flex-row gap-2 justify-center">
            <p className="font-normal  text-[16px] text-[#71717A]">
              Don't have an account?
            </p>
            <Link href="/signup">
              <p className="font-normal text-[16px] text-[#2563EB]">Sign up</p>
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
