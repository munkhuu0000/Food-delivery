"use client";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useEffect, useState } from "react";
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
import { Images, Plus } from "lucide-react";
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
import { AdminFoodCard } from "./AdminFoodCard";
import { FoodType, CategoriesType } from "../page";

type FoodMenuProps = {
  categories: CategoriesType[];
  foods: FoodType[];
};

export function FoodMenu(props: FoodMenuProps) {
  const { categories, foods } = props;
  const [open, setOpen] = useState(false);

  const formSchema = z.object({
    foodname: z.string().min(2, {
      message: "Insert valid username.",
    }),
    foodPrice: z.number(),
    category: z.string(),
    ingredients: z.string().min(2, {
      message: "Ingredients must be at least 2 characters.",
    }),
    image: z.file().min(1, {
      message: "Image is required.",
    }),
  });
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      foodname: "",
      foodPrice: 0,
      category: "",
      ingredients: "",
      image: undefined,
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    setOpen(false);
    form.reset();
  }

  return (
    <div className="w-[calc(100vw-205px)] p-6 flex flex-row gap-4 flex-wrap">
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>
          <div className="w-70 h-60 border border-[#EF4444] border-dashed stroke-dasharray='8%2c 8' flex flex-col justify-center items-center">
            <Button className="w-10 h-10 rounded-full bg-[#EF4444] text-white">
              <Plus />
            </Button>
            <p className="text-[14px] font-medium">Add new Dish</p>
          </div>
        </DialogTrigger>
        <DialogContent className="w-115 flex gap-6 flex-col">
          <DialogHeader>
            <DialogTitle></DialogTitle>
            <DialogDescription className="text-[18px] font-semibold text-[#09090B]">
              Add New Dish to {`categoryName`}
            </DialogDescription>
          </DialogHeader>
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="space-y-3 flex flex-col justify-end"
            >
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
                        <Input
                          type="number"
                          placeholder="Enter price ..."
                          {...field}
                          onChange={(e) =>
                            field.onChange(Number(e.target.value))
                          }
                        />
                      </FormControl>
                      <FormDescription></FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <FormField
                control={form.control}
                name="category"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-[14px] font-medium">
                      Category
                    </FormLabel>
                    <FormControl>
                      <Select
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                      >
                        <SelectTrigger className="w-full">
                          <SelectValue placeholder="Select a category" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectGroup>
                            <SelectLabel>Category</SelectLabel>
                            {categories.map((el) => (
                              <SelectItem key={el._id} value={el?._id}>
                                {el?.name}
                              </SelectItem>
                            ))}
                          </SelectGroup>
                        </SelectContent>
                      </Select>
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
              <FormField
                control={form.control}
                name="image"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-[14px] font-medium">
                      Image
                    </FormLabel>
                    <FormControl>
                      <div className="w-full h-22.5 relative flex justify-center items-center">
                        <svg
                          style={{
                            position: "absolute",
                            top: 0,
                            left: 0,
                            width: "100%",
                            height: "100%",
                            pointerEvents: "none",
                          }}
                        >
                          <rect
                            x="0"
                            y="0"
                            width="100%"
                            height="100%"
                            fill="none"
                            stroke="#2563EB33"
                            strokeWidth="1"
                            strokeDasharray="6 6"
                            rx="10"
                          />
                        </svg>
                        <Input
                          type="file"
                          className="absolute top-0 left-0 opacity-0 z-10 cursor-pointer w-full h-full flex justify-start items-start"
                          placeholder="Upload image ..."
                          onChange={(e) => {
                            const files = e.target.files;
                            if (!files) return;
                            const [file] = files;
                            field.onChange(file);
                          }}
                        />
                        {field.value && (
                          <div className=" absolute w-full h-full rounded-xl overflow-hidden flex justify-center items-center">
                            {/* <Image
                              // src={URL.createObjectURL(field.value)}
                              className="object-cover"
                              // fill
                            /> */}
                          </div>
                        )}
                        <div className="w-full rounded-xl flex justify-center items-center gap-3 text-[#8E8E8E]">
                          <Images className="w-8 h-8 stroke-[0.5px] text-[#8E8E8E]" />
                          Add image
                        </div>
                      </div>
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
      <div className="flex-1 h-auto flex flex-row gap-4 items-start justify-start rounded-4xl flex-wrap">
        {foods.map((el) => (
          <AdminFoodCard
            key={el?._id}
            _id={el?._id}
            image={el?.image}
            ingredients={el?.ingredients}
            name={el?.name}
            price={el?.price}
            categoryIds={el?.categoryIds}
          />
        ))}
      </div>
    </div>
  );
}
