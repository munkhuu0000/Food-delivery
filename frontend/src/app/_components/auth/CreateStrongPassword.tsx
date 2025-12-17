"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { email, z } from "zod";
import { Checkbox } from "@/components/ui/checkbox";
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

const passwordRegex =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

export const CreateStrongPassword = () => {
  const formSchema = z
    .object({
      password: z
        .string()
        .regex(
          passwordRegex,
          "Weak password. Use numbers, symbols, lowercase letters and uppercase letters."
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

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
  }

  return (
    <div className="flex gap-10 justify-center items-center">
      <div className="w-104 h-94 flex flex-col ">
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
                      <Input placeholder="Password" {...field} />
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
                      <Input placeholder="Confirm password" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <p className="font-normal text-[14px] text-[#18181B]">
                Forgot password?
              </p>
              <div className="flex gap-2 flex-row">
                <Checkbox />
                <p className="font-normal  text-[16px] text-[#71717A]">
                  Show password
                </p>
              </div>
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
