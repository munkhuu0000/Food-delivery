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
    ingredients: z.string().min(2, {
      message: "Ingredients must be at least 2 characters.",
    }),
    image: z.string().min(1, {
      message: "Image is required.",
    }),
  });
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      foodname: "",
      foodPrice: undefined,
      ingredients: "",
      image: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
  }

  return (
    <div className="w-[calc(100vw-205px)] p-6 flex flex-row gap-4 ">
      <Dialog>
        <DialogTrigger asChild>
          <div className="w-70 h-60 border border-[#EF4444] border-dashed stroke-dasharray='8%2c 8' flex flex-col justify-center items-center">
            <Button className="w-10 h-10 rounded-full bg-[#EF4444] text-white">
              <Plus />
            </Button>
            <p className="text-[14px] font-medium">Add new Dish</p>
          </div>
        </DialogTrigger>
        <DialogContent className="w-115 h-140.5 flex gap-6 flex-col">
          <DialogHeader>
            <DialogTitle></DialogTitle>
            <DialogDescription className="text-[18px] font-semibold text-[#09090B]">
              Add New Dish to {`categoryName`}
            </DialogDescription>
          </DialogHeader>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              <div className="flex flex-row w-full justify-between">
                <FormField
                  control={form.control}
                  name="foodname"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-[14px] font-medium">
                        Food name
                      </FormLabel>
                      <FormControl>
                        <Input
                          className=""
                          placeholder="Type food name"
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
                  name="foodPrice"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-[14px] font-medium">
                        Food price
                      </FormLabel>
                      <FormControl>
                        <Input placeholder="Enter price ..." {...field} />
                      </FormControl>
                      <FormDescription></FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <FormField
                control={form.control}
                name="ingredients"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-[14px] font-medium">
                      Ingeredients
                    </FormLabel>
                    <FormControl>
                      <Input
                        className="w-full h-22.5 flex justify-start items-start"
                        placeholder="List ingredients ..."
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
                name="ingredients"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-[14px] font-medium">
                      Ingeredients
                    </FormLabel>
                    <FormControl>
                      <Input
                        className="w-full h-22.5 flex justify-start items-start"
                        placeholder="List ingredients ..."
                        {...field}
                      />
                    </FormControl>
                    <FormDescription></FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="submit">Add dish</Button>
            </form>
          </Form>
        </DialogContent>
      </Dialog>
    </div>
  );
}
