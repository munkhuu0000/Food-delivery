"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
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
import { ChevronLeft, Eye, EyeOff } from "lucide-react";
import { useContext, useState } from "react";
import { stepContext } from "@/app/login/page";
import { useAuth } from "@/app/context/AuthProvider";
import { UserData } from "./CreateAccount";

const passwordRegex =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

export const CreateStrongPassword = ({ userInfo }: { userInfo: UserData }) => {
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const toggleVisibility = (): void => {
    setIsVisible((prev) => !prev);
  };
  const { register } = useAuth();
  const { handleBack, handleNext } = useContext(stepContext);
  const formSchema = z
    .object({
      password: z
        .string()
        .regex(
          passwordRegex,
          "Weak password. Use numbers, symbols, lowercase letters and uppercase letters.",
        ),
      confirmpassword: z.string(),
    })
    .refine((data) => data.password === data.confirmpassword, {
      message: "Those password did’t match, Try again",
      path: ["confirmpassword"],
    });
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      password: "",
      confirmpassword: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    await register(userInfo?.username, userInfo?.emailAddress, values.password);
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
          title={"Create a strong password"}
          text={"Create a strong password with letters, numbers."}
        />

        <div className="flex flex-col gap-6">
          <Form {...form}>
            <form className="space-y-6" onSubmit={form.handleSubmit(onSubmit)}>
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel></FormLabel>
                    <FormControl>
                      <div className="flex flex-row justify-between relative">
                        <Input
                          type={isVisible ? "text" : "password"}
                          placeholder="Password"
                          {...field}
                        />
                        <Button
                          type="button"
                          variant="outline"
                          onClick={toggleVisibility}
                          className="absolute right-0"
                        >
                          {isVisible ? <Eye /> : <EyeOff />}
                        </Button>
                      </div>
                    </FormControl>
                    <FormDescription></FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="confirmpassword"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <div className="flex flex-row justify-between relative">
                        <Input
                          type={isVisible ? "text" : "password"}
                          placeholder="Password"
                          {...field}
                        />
                        <Button
                          type="button"
                          variant="outline"
                          onClick={toggleVisibility}
                          className="absolute right-0"
                        >
                          {isVisible ? <Eye /> : <EyeOff />}
                        </Button>
                      </div>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button
                type="submit"
                className="w-full h-9 background/bg-primary"
                variant="default"
              >
                Let's Go
              </Button>
            </form>
          </Form>
          <LoginFooter
            href={""}
            question={"Already have an account?"}
            answer={"Log in "}
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
