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

const orders = [
  {
    no: "1",
    customer: "Test@gamil.com",
    food: "2 foods",
    date: "2024/12/20",
    total: "$26.97",
    deliveryAddress:
      "2024/12/СБД, 12-р хороо, СБД нэгдсэн эмнэлэг Sbd negdsen emneleg | 100 айлын гүүрэн гарцны хойд талд 4д ногоонСБД, 12-р хороо, СБД нэгдсэн эмнэлэг Sbd negdsen emneleg | 100 айлын гүүрэн гарцны хойд талд 4д ногоон20",
    deliveryState: "Pending",
  },
  {
    no: "2",
    customer: "Test@gamil.com",
    food: "2 foods",
    date: "2024/12/20",
    total: "$26.97",
    deliveryAddress:
      "2024/12/СБД, 12-р хороо, СБД нэгдсэн эмнэлэг Sbd negdsen emneleg | 100 айлын гүүрэн гарцны хойд талд 4д ногоонСБД, 12-р хороо, СБД нэгдсэн эмнэлэг Sbd negdsen emneleg | 100 айлын гүүрэн гарцны хойд талд 4д ногоон20",
    deliveryState: "Pending",
  },
  {
    no: "3",
    customer: "Test@gamil.com",
    food: "2 foods",
    date: "2024/12/20",
    total: "$26.97",
    deliveryAddress:
      "2024/12/СБД, 12-р хороо, СБД нэгдсэн эмнэлэг Sbd negdsen emneleg | 100 айлын гүүрэн гарцны хойд талд 4д ногоонСБД, 12-р хороо, СБД нэгдсэн эмнэлэг Sbd negdsen emneleg | 100 айлын гүүрэн гарцны хойд талд 4д ногоон20",
    deliveryState: "Pending",
  },
  {
    no: "4",
    customer: "Test@gamil.com",
    food: "2 foods",
    date: "2024/12/20",
    total: "$26.97",
    deliveryAddress:
      "2024/12/СБД, 12-р хороо, СБД нэгдсэн эмнэлэг Sbd negdsen emneleg | 100 айлын гүүрэн гарцны хойд талд 4д ногоонСБД, 12-р хороо, СБД нэгдсэн эмнэлэг Sbd negdsen emneleg | 100 айлын гүүрэн гарцны хойд талд 4д ногоон20",
    deliveryState: "Pending",
  },
  {
    no: "5",
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

  // const handleDeliveryStateClick = (state: Pending, Delivered, Cancelled) => {};

  return (
    <div className="w-[calc(100vw-205px)] h-min-screen p-6">
      <div className="w-full h-19 flex flex-row justify-between">
        <div>
          <p className="text-[#09090B] text-[20px] font-bold"> Orders</p>
          <p className="text-[#71717A] text-[12px] font-medium">32 items</p>
        </div>
        <div className="w-fit h-9 border border-[#E4E4E7] rounded-full flex flex-row">
          <Popover>
            <PopoverTrigger className="w-fit h-9 flex items-center justify-center px-5">
              {formatDateRange(dateRange)}
            </PopoverTrigger>
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
          <Button className="w-45 h-9 bg-[#18181B] text-[#FAFAFA] rounded-full">
            Change delivery state
          </Button>
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
            <TableHead className="w-14 flex flex-row gap-2">
              Date <ChevronsUpDown />
            </TableHead>
            <TableHead className="w-24">Total</TableHead>
            <TableHead className="w-120">Delivery address</TableHead>
            <TableHead className="w-40 flex flex-row gap-2">
              Delivery state <ChevronsUpDown />
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody className="w-[calc(100vw-205px)]">
          {orders.map((order) => (
            <TableRow key={order?.no}>
              <TableCell className="font-medium">
                <Checkbox />
              </TableCell>
              <TableCell>{order?.no}</TableCell>
              <TableCell>{order?.customer}</TableCell>
              <TableCell>{order?.food}</TableCell>
              <TableCell>{order?.date}</TableCell>
              <TableCell>{order?.total}</TableCell>
              <TableCell className="text-sm h-fit leading-tight">
                <div className="line-clamp-2 wrap-break-word">
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
