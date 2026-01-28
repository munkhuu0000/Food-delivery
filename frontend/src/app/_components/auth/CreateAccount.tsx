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
import { Dispatch, SetStateAction, useContext } from "react";
import { stepContext } from "@/app/login/page";
import { useAuth } from "@/app/context/AuthProvider";

export type UserData = {
  username: string;
  emailAddress: string;
};

type RegisterPropsType = {
  userInfo: UserData;
  setUserInfo: Dispatch<SetStateAction<UserData>>;
};

export const CreateAccount = (props: RegisterPropsType) => {
  const { userInfo, setUserInfo } = props;
  const { register } = useAuth();
  const { handleBack, handleNext } = useContext(stepContext);

  const formSchema = z.object({
    emailAddress: z.email("Invalid email. Use a format like example@email.com"),
    username: z
      .string()
      .min(2, "Username must contain more than 2 characters."),
  });
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      emailAddress: userInfo?.emailAddress || "",
      username: userInfo?.username || "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    handleNext();
    setUserInfo(values);
  }

  return (
    <div className="flex gap-10 justify-center items-center">
      <div className="w-104 h-94 flex flex-col ">
        <LoginHeader
          title={"Create your account"}
          text={"Sign up to explore your favorite dishes."}
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
              <FormField
                control={form.control}
                name="username"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel></FormLabel>
                    <FormControl>
                      <Input placeholder="Enter new username" {...field} />
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
                Lest's go
              </Button>
            </form>
          </Form>
          <LoginFooter
            question={"Already have an account?"}
            answer={"Log in "}
            href={"/login"}
          />
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
