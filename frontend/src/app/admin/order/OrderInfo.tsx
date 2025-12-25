"use client";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import * as React from "react";
import { type DateRange } from "react-day-picker";
import { Calendar } from "@/components/ui/calendar";
import { ChevronsUpDown } from "lucide-react";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { format } from "date-fns";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Bold, Italic, Underline } from "lucide-react";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { useState } from "react";

const orders = [
  {
    id: "1",
    no: "1",
    customer: "Test@gmail.com",
    food: "2 foods",
    date: "2024/12/20",
    total: "$26.97",
    deliveryAddress:
      "2024/12/СБД, 12-р хороо, СБД нэгдсэн эмнэлэг Sbd negdsen emneleg | 100 айлын гүүрэн гарцны хойд талд 4д ногоонСБД, 12-р хороо, СБД нэгдсэн эмнэлэг Sbd negdsen emneleg | 100 айлын гүүрэн гарцны хойд талд 4д ногоон20",
    deliveryState: "Pending",
  },
  {
    id: "2",
    no: "2",
    customer: "Test@gmail.com",
    food: "2 foods",
    date: "2024/12/20",
    total: "$26.97",
    deliveryAddress:
      "2024/12/СБД, 12-р хороо, СБД нэгдсэн эмнэлэг Sbd negdsen emneleg | 100 айлын гүүрэн гарцны хойд талд 4д ногоонСБД, 12-р хороо, СБД нэгдсэн эмнэлэг Sbd negdsen emneleg | 100 айлын гүүрэн гарцны хойд талд 4д ногоон20",
    deliveryState: "Pending",
  },
  {
    id: "3",
    no: "3",
    customer: "Test@gmail.com",
    food: "2 foods",
    date: "2024/12/20",
    total: "$26.97",
    deliveryAddress:
      "2024/12/СБД, 12-р хороо, СБД нэгдсэн эмнэлэг Sbd negdsen emneleg | 100 айлын гүүрэн гарцны хойд талд 4д ногоонСБД, 12-р хороо, СБД нэгдсэн эмнэлэг Sbd negdsen emneleg | 100 айлын гүүрэн гарцны хойд талд 4д ногоон20",
    deliveryState: "Pending",
  },
  {
    id: "4",
    no: "4",
    customer: "Test@gmail.com",
    food: "2 foods",
    date: "2024/12/20",
    total: "$26.97",
    deliveryAddress:
      "2024/12/СБД, 12-р хороо, СБД нэгдсэн эмнэлэг Sbd negdsen emneleg | 100 айлын гүүрэн гарцны хойд талд 4д ногоонСБД, 12-р хороо, СБД нэгдсэн эмнэлэг Sbd negdsen emneleg | 100 айлын гүүрэн гарцны хойд талд 4д ногоон20",
    deliveryState: "Pending",
  },
  {
    id: "5",
    no: "5",
    customer: "Test@gmail.com",
    food: "2 foods",
    date: "2024/12/20",
    total: "$26.97",
    deliveryAddress:
      "2024/12/СБД, 12-р хороо, СБД нэгдсэн эмнэлэг Sbd negdsen emneleg | 100 айлын гүүрэн гарцны хойд талд 4д ногоонСБД, 12-р хороо, СБД нэгдсэн эмнэлэг Sbd negdsen emneleg | 100 айлын гүүрэн гарцны хойд талд 4д ногоон20",
    deliveryState: "Pending",
  },

  {
    id: "6",
    no: "6",
    customer: "Test@gmail.com",
    food: "2 foods",
    date: "2024/12/20",
    total: "$26.97",
    deliveryAddress:
      "2024/12/СБД, 12-р хороо, СБД нэгдсэн эмнэлэг Sbd negdsen emneleg | 100 айлын гүүрэн гарцны хойд талд 4д ногоонСБД, 12-р хороо, СБД нэгдсэн эмнэлэг Sbd negdsen emneleg | 100 айлын гүүрэн гарцны хойд талд 4д ногоон20",
    deliveryState: "Pending",
  },
  {
    id: "7",
    no: "7",
    customer: "Test@gmail.com",
    food: "2 foods",
    date: "2024/12/20",
    total: "$26.97",
    deliveryAddress:
      "2024/12/СБД, 12-р хороо, СБД нэгдсэн эмнэлэг Sbd negdsen emneleg | 100 айлын гүүрэн гарцны хойд талд 4д ногоонСБД, 12-р хороо, СБД нэгдсэн эмнэлэг Sbd negdsen emneleg | 100 айлын гүүрэн гарцны хойд талд 4д ногоон20",
    deliveryState: "Pending",
  },
  {
    id: "8",
    no: "8",
    customer: "Test@gmail.com",
    food: "2 foods",
    date: "2024/12/20",
    total: "$26.97",
    deliveryAddress:
      "2024/12/СБД, 12-р хороо, СБД нэгдсэн эмнэлэг Sbd negdsen emneleg | 100 айлын гүүрэн гарцны хойд талд 4д ногоонСБД, 12-р хороо, СБД нэгдсэн эмнэлэг Sbd negdsen emneleg | 100 айлын гүүрэн гарцны хойд талд 4д ногоон20",
    deliveryState: "Pending",
  },
  {
    id: "9",
    no: "9",
    customer: "Test@gmail.com",
    food: "2 foods",
    date: "2024/12/20",
    total: "$26.97",
    deliveryAddress:
      "2024/12/СБД, 12-р хороо, СБД нэгдсэн эмнэлэг Sbd negdsen emneleg | 100 айлын гүүрэн гарцны хойд талд 4д ногоонСБД, 12-р хороо, СБД нэгдсэн эмнэлэг Sbd negdsen emneleg | 100 айлын гүүрэн гарцны хойд талд 4д ногоон20",
    deliveryState: "Pending",
  },
  {
    id: "10",
    no: "10",
    customer: "Test@gamil.com",
    food: "2 foods",
    date: "2024/12/20",
    total: "$26.97",
    deliveryAddress:
      "2024/12/СБД, 12-р хороо, СБД нэгдсэн эмнэлэг Sbd negdsen emneleg | 100 айлын гүүрэн гарцны хойд талд 4д ногоонСБД, 12-р хороо, СБД нэгдсэн эмнэлэг Sbd negdsen emneleg | 100 айлын гүүрэн гарцны хойд талд 4д ногоон20",
    deliveryState: "Pending",
  },
  {
    id: "11",
    no: "11",
    customer: "Test@gamil.com",
    food: "2 foods",
    date: "2024/12/20",
    total: "$26.97",
    deliveryAddress:
      "2024/12/СБД, 12-р хороо, СБД нэгдсэн эмнэлэг Sbd negdsen emneleg | 100 айлын гүүрэн гарцны хойд талд 4д ногоонСБД, 12-р хороо, СБД нэгдсэн эмнэлэг Sbd negdsen emneleg | 100 айлын гүүрэн гарцны хойд талд 4д ногоон20",
    deliveryState: "Pending",
  },
  {
    id: "12",
    no: "12",
    customer: "Test@gamil.com",
    food: "2 foods",
    date: "2024/12/20",
    total: "$26.97",
    deliveryAddress:
      "2024/12/СБД, 12-р хороо, СБД нэгдсэн эмнэлэг Sbd negdsen emneleg | 100 айлын гүүрэн гарцны хойд талд 4д ногоонСБД, 12-р хороо, СБД нэгдсэн эмнэлэг Sbd negdsen emneleg | 100 айлын гүүрэн гарцны хойд талд 4д ногоон20",
    deliveryState: "Pending",
  },
  {
    id: "13",
    no: "13",
    customer: "Test@gamil.com",
    food: "2 foods",
    date: "2024/12/20",
    total: "$26.97",
    deliveryAddress:
      "2024/12/СБД, 12-р хороо, СБД нэгдсэн эмнэлэг Sbd negdsen emneleg | 100 айлын гүүрэн гарцны хойд талд 4д ногоонСБД, 12-р хороо, СБД нэгдсэн эмнэлэг Sbd negdsen emneleg | 100 айлын гүүрэн гарцны хойд талд 4д ногоон20",
    deliveryState: "Pending",
  },
];

export function OrderInfo() {
  const [dateRange, setDateRange] = React.useState<DateRange | undefined>({
    from: new Date(),
    to: new Date(),
  });
  const [isClicked, setIsClicked] = useState<boolean>(false);

  const formatDateRange = (range: DateRange | undefined) => {
    if (!range?.from) return "Select date";
    if (!range?.to) {
      return format(range.from, "yyyy.MM.dd");
    }
    return `${format(range.from, "yyyy.MM.dd")} - ${format(
      range.to,
      "yyyy.MM.dd"
    )}`;
  };

  const handleDeliveryStateClick = () => {
    setIsClicked((isClicked) => !isClicked);
    console.log(1);
  };

  return (
    <div className="w-[calc(100vw-205px)] h-min-screen p-6">
      <div className="w-full h-19 flex flex-row justify-between">
        <div>
          <p className="text-[#09090B] text-[20px] font-bold"> Orders</p>
          <p className="text-[#71717A] text-[12px] font-medium">32 items</p>
        </div>
        <div className="w-125 h-9 flex flex-row justify-between gap-3">
          <div className="w-75 h-9 flex justify-center items-center border border-[#E4E4E7] rounded-full">
            <Popover>
              <PopoverTrigger>{formatDateRange(dateRange)}</PopoverTrigger>
              <PopoverContent className="w-fit h-fit">
                <Calendar
                  mode="range"
                  defaultMonth={dateRange?.from}
                  selected={dateRange}
                  onSelect={setDateRange}
                  numberOfMonths={2}
                  className="rounded-lg border shadow-sm"
                />
              </PopoverContent>
            </Popover>
          </div>
          <Dialog>
            <DialogTrigger>
              <div className="w-60 h-9 bg-[#18181B] text-[#FAFAFA] font-medium rounded-full flex items-center justify-center gap-2">
                Change delivery state
                <div className="w-6.5 h-5 bg-[#FAFAFA] text-[#18181B] rounded-full flex justify-center items-center">
                  1
                </div>
              </div>
            </DialogTrigger>
            <DialogContent className="w-110 h-50 flex justify-center">
              <DialogHeader className="flex flex-col gap-6">
                <DialogTitle className="text-[14px] font-medium text-[#09090B]">
                  Change delivery state?
                </DialogTitle>
                <div
                  className="flex flex-row gap-4 justify-center items-center w-full"
                  onClick={handleDeliveryStateClick}
                >
                  <div className="w-24 h-8 bg-[#F4F4F5] border rounded-full text-[12px] font-medium flex justify-center items-center">
                    Delivered
                  </div>
                  <div className="w-24 h-8 bg-[#F4F4F5] border rounded-full text-[12px] font-medium flex justify-center items-center">
                    Pending
                  </div>
                  <div className="w-24 h-8 bg-[#F4F4F5] border rounded-full text-[12px] font-medium flex justify-center items-center ">
                    Cancelled
                  </div>
                </div>
                <div className="w-full h-10 bg-[#18181B] text-[#F4F4F5] text-[14px] font-medium flex justify-center items-center rounded-full">
                  Save
                </div>
              </DialogHeader>
            </DialogContent>
          </Dialog>
        </div>
      </div>
      <Table className="w-full table-fixed">
        <TableCaption>A list of your recent orders.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-12">
              <Checkbox />
            </TableHead>
            <TableHead className="w-12">№</TableHead>
            <TableHead className="w-36">Customer</TableHead>
            <TableHead className="w-18">Food</TableHead>
            <TableHead className="w-24">
              <div className="w-full flex gap-2">
                Date <ChevronsUpDown className="w-4 h-4" />
              </div>
            </TableHead>
            <TableHead className="w-24">Total</TableHead>
            <TableHead className="w-120">Delivery address</TableHead>
            <TableHead className="w-28 ">
              <div className="flex flex-row gap-2">
                Delivery state
                <ChevronsUpDown className="w-4 h-4" />
              </div>
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody className="w-[calc(100vw-205px)]">
          {orders.slice(0, 12).map((order) => (
            <TableRow key={order?.no}>
              <TableCell className="font-medium">
                <Checkbox />
              </TableCell>
              <TableCell>{order?.no}</TableCell>
              <TableCell>{order?.customer}</TableCell>
              <TableCell>{order?.food}</TableCell>
              <TableCell>{order?.date}</TableCell>
              <TableCell>{order?.total}</TableCell>
              <TableCell>
                <div className="whitespace-normal">
                  {order?.deliveryAddress}
                </div>
              </TableCell>
              <TableCell>
                <Button variant={"outline"}>{order?.deliveryState}</Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
        <TableFooter>
          <TableRow>
            <TableCell colSpan={3}>Total</TableCell>
            <TableCell className="text-right">$2,500.00</TableCell>
          </TableRow>
        </TableFooter>
      </Table>
    </div>
  );
}
