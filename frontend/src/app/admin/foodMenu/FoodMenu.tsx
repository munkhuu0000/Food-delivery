"use client";
import { foodItems } from "@/app/(client)/page";
import { useState } from "react";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Plus } from "lucide-react";
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

export function FoodMenu() {
  const formSchema = z.object({
    foodname: z.string().min(2, {
      message: "Username must be at least 2 characters.",
    }),
    foodPrice: z.number(),
  });
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      foodname: "",
      foodPrice: 0,
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
  }

  return (
    <div className="w-[calc(100vw-205px)] p-6 flex flex-row gap-4">
      <Dialog>
        <DialogTrigger>
          <div className="w-70 h-60 border border-[#EF4444] border-dashed stroke-dasharray='8%2c 8' flex flex-col">
            <div className="w-10 h-10 rounded-full bg-[#EF4444] text-white">
              <Plus />
            </div>
            <p className="text-[14px] font-medium">Add new Dish</p>
          </div>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle></DialogTitle>
            <DialogDescription>Add New Dish</DialogDescription>
          </DialogHeader>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              <FormField
                control={form.control}
                name="foodname"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Food name</FormLabel>
                    <FormControl>
                      <Input placeholder="Type food name" {...field} />
                    </FormControl>
                    <FormDescription></FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="submit">Submit</Button>
            </form>
          </Form>
        </DialogContent>
      </Dialog>
    </div>
  );
}
