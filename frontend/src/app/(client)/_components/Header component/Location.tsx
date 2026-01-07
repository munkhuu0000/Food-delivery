"use client";
import { Input } from "@/components/ui/input";
import { ChevronRight, MapPin, ShoppingCart, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useState } from "react";

export const Location = () => {
  const [location, setLocation] = useState("Add location");
  const [open, setOpen] = useState(false);

  const formSchema = z.object({
    location: z.string(),
  });
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      location: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    setLocation(values.location);
    setOpen(false);
    console.log(values);
  }

  return (
    <div className="w-min-64 py-4 bg-[#FFFFFF] rounded-full flex flex-row items-center justify-center gap-1 px-3">
      <div className="flex flex-row gap-2">
        <MapPin className="w-5 h-5 text-[#EF4444]" />
        <p className="text-[12px] font-normal text-[#EF4444]">
          Delivery address:
        </p>
      </div>
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>
          <Button
            variant={"outline"}
            className="w-75 min-h-9 px-10 text-[12px] font-normal text-[#71717A] flex flex-row items-center hover:text-black transition-colors border-transparent line-clamp-2 break-words block:line-clamp  text-left"
          >
            {location} <ChevronRight className="ml-1 w-4 h-4" />
          </Button>
        </DialogTrigger>
        <DialogContent className="w-130.5 h-min-72">
          <DialogHeader>
            <DialogTitle>Please write your delivery address!</DialogTitle>
            <DialogDescription></DialogDescription>
          </DialogHeader>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              <FormField
                control={form.control}
                name="location"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel></FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Please share your complete address"
                        {...field}
                      />
                    </FormControl>
                    <FormDescription></FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <div className="w-full flex flex-row justify-end gap-3">
                <DialogClose asChild>
                  <Button
                    variant={"outline"}
                    className="px-4 py-1.5 rounded-md text-[14px] font-medium"
                  >
                    Cancel
                  </Button>
                </DialogClose>
                <DialogClose asChild>
                  <Button
                    type="submit"
                    className="px-4 py-2 rounded-md text-[14px] font-medium"
                  >
                    Deliver here
                  </Button>
                </DialogClose>
              </div>
            </form>
          </Form>
        </DialogContent>
      </Dialog>
    </div>
  );
};
