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
import { useEffect, useRef, useState } from "react";
import { Images, Trash, X } from "lucide-react";
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
import { FoodType, CategoriesType } from "../page";
import { api } from "@/lib/axios";
import { error } from "console";

const formSchema = z.object({
  foodname: z.string().min(2, {
    message: "Insert valid username.",
  }),
  foodPrice: z.number(),
  category: z.object({
    _id: z.string(),
    name: z.string(),
  }),
  ingredients: z.string().min(2, {
    message: "Ingredients must be at least 2 characters.",
  }),
  image: z.string().min(1, {
    message: "Image is required.",
  }),
  _id: z.string().optional(),
});
type FoodFormValues = z.infer<typeof formSchema>;

type FoodFormProps = {
  categories: CategoriesType[];
  defaultValues: FoodFormValues;
  foods: FoodType[];
  setFoods: React.Dispatch<React.SetStateAction<FoodType[]>>;
};

export function FoodForm(props: FoodFormProps) {
  const { categories, defaultValues, setFoods } = props;
  const [open, setOpen] = useState(false);
  const [uploadedImageUrl, setUploadedImageUrl] = useState<string>("");
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [isUploading, setIsUploading] = useState(false);

  const form = useForm<FoodFormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: defaultValues,
  });

  useEffect(() => {
    form.reset(defaultValues);
    setUploadedImageUrl(defaultValues.image || "");
  }, [defaultValues, form]);

  const handleFileUpload = async (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    const file = event.target.files?.[0];
    if (!file) return;
    setIsUploading(true);

    try {
      const response = await fetch(
        `/api/upload?filename=${encodeURIComponent(file.name)}`,
        { method: "POST", body: file },
      );
      if (!response.ok) {
        const error = await response.json();
        console.error("Upload error:", error);
        alert(`Upload failed: ${error.details || error.error}`);
        return;
      }
      const blob = await response.json();
      setUploadedImageUrl(blob.url);
      form.setValue("image", blob.url);
    } catch (error) {
      console.error("Upload failed:", error);
      alert("Upload failed. Please try again later.");
    } finally {
      setIsUploading(false);
    }
  };
  const handleDelete = (id: string) => {
    setFoods((prev) => prev.filter((food) => food._id !== id));
  };

  const handleFoodDelete = async (e: React.MouseEvent, id: string) => {
    e.stopPropagation();

    if (confirm("Are you sure to delete this food?")) {
      try {
        await api.delete(`food/${id}`);
        handleDelete(id);
      } catch (error) {
        console.error("Can not deleted", error);
        alert("Can not deleted.");
      }
    }
  };

  const removeImage = () => {
    setUploadedImageUrl("");
    form.setValue("image", "");
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  const onSubmit = async (values: FoodFormValues): Promise<void> => {
    try {
      if (defaultValues._id) {
        await api.put("/food", {
          name: values.foodname,
          price: values.foodPrice,
          ingredients: values.ingredients,
          image: values.image,
          categoryIds: [values.category._id],
        });
      } else {
        await api.post("/food", {
          id: values?._id,
          name: values.foodname,
          price: values.foodPrice,
          ingredients: values.ingredients,
          image: values.image,
          categoryIds: [values.category._id],
        });
      }
    } catch {
      form.reset();
      setUploadedImageUrl("");
      console.log(values);
      setOpen(false);
    }
  };

  return (
    <div>
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
                      onChange={(e) => field.onChange(Number(e.target.value))}
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
                    onValueChange={(val) => {
                      const selectedCategory = categories.find(
                        (c) => c._id === val,
                      );
                      field.onChange(selectedCategory);
                    }}
                    value={field.value?._id}
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
                  Food image
                </FormLabel>
                <FormControl>
                  <div>
                    <Input
                      ref={fileInputRef}
                      type="file"
                      accept="image/*"
                      className="hidden"
                      placeholder="Upload image ..."
                      onChange={handleFileUpload}
                      id="file-upload"
                    />
                    {uploadedImageUrl ? (
                      <div className="relative border-2 border-gray-300 rounded-lg overflow-hidden">
                        <img
                          src={uploadedImageUrl}
                          alt="Uploaded food"
                          width={400}
                          height={300}
                          className="w-full h-48 object-cover"
                        />
                        <button
                          type="button"
                          onClick={removeImage}
                          className="absolute top-2 right-2 w-8 h-8 bg-red-500 text-white rounded-full flex items-center justify-center"
                        >
                          <X className="w-4  h-4" />
                        </button>
                      </div>
                    ) : (
                      <label
                        htmlFor="file-upload"
                        className="border-2 border-dashed border-gray-300 rounded-lg flex flex-col items-center justify-center"
                      >
                        {/* <Upload className="w-8 h-8 text-gray-400 mb-3" /> */}
                        <Images className="w-8 h-8 stroke-[0.5px] text-[#8E8E8E]" />
                        <p className="text-gray-400 mb-3">Add image</p>
                      </label>
                    )}
                  </div>
                </FormControl>
                <FormDescription></FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          {defaultValues?._id ? (
            <div className="flex flex-row gap-2">
              <Button
                variant="outline"
                type="button"
                className="w-8 h-8 hover:border-[#EF4444]"
                onClick={(e) => handleFoodDelete(e, defaultValues?._id || "")}
              >
                <Trash />
              </Button>
              <Button type="submit" className="flex-1 h-8">
                {defaultValues.foodname ? "Save changes" : "Add dish"}
              </Button>
            </div>
          ) : (
            <>
              <Button type="submit">
                {defaultValues.foodname ? "Save changes" : "Add dish"}
              </Button>
            </>
          )}
        </form>
      </Form>
    </div>
  );
}
