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

export const FirstLogin = () => {
  const formSchema = z.object({
    emailAddress: z.email("Invalid email. Use a format like example@email.com"),
    password: z.string("Incorrect password. Please try again"),
  });
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      emailAddress: "",
      password: "",
    },
  });
  return (
    <div className="w-104 h-94 flex flex-col gap-6">
      <div>
        <p className="font-semibold text-2xl text/text-foreground "> Log in</p>
        <p className="font-normal text-[16px] text-[#71717A]">
          Log in to enjoy your favorite dishes.
        </p>
      </div>
      <div className="flex flex-col gap-4">
        <Form {...form}>
          <form className="space-y-8">
            <FormField
              control={form.control}
              name="emailAddress"
              render={({ field }) => (
                <FormItem>
                  <FormLabel></FormLabel>
                  <FormControl>
                    <Input placeholder="Enter your email address" {...field} />
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
                  <FormLabel></FormLabel>
                  <FormControl>
                    <Input placeholder="Password" {...field} />
                  </FormControl>
                  <FormDescription></FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <p className="font-normal text-[14px] text-[#18181B]">
              Forgot password?
            </p>
            <Button
              type="submit"
              className="w-full h-9 background/bg-primary"
              variant="outline"
            >
              Let's Go
            </Button>
          </form>
        </Form>
      </div>
    </div>
  );
};
