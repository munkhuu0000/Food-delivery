"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
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
import { Modifiers, type DateRange } from "react-day-picker";
import { Calendar } from "@/components/ui/calendar";
import { ChevronsUpDown } from "lucide-react";
import { Checkbox } from "@/components/ui/checkbox";

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

  return (
    <div className="w-screen h-min-screen p-6">
      <div className="w-full h-19 flex flex-row justify-between">
        <div>
          <p className="text-[#09090B] text-[20px] font-bold"> Orders</p>
          <p className="text-[#71717A] text-[12px] font-medium">32 items</p>
        </div>
        <div className="flex flex-row gap-3">
          <div className="w-75 h-9 border border-[#E4E4E7] rounded-full">
            {/* <Calendar
              mode="range"
              defaultMonth={dateRange?.from}
              selected={dateRange}
              onSelect={setDateRange}
              numberOfMonths={1}
              className="rounded-lg border shadow-sm z-10"
            /> */}
          </div>
          <div>
            <Button className="w-45 h-9 bg-[#18181B] text-[#FAFAFA] rounded-full">
              Change delivery state
            </Button>
          </div>
        </div>
      </div>
      <Table>
        <TableCaption>A list of your recent orders.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>
              <Checkbox />
            </TableHead>
            <TableHead className="w-[100px]">№</TableHead>
            <TableHead>Customer</TableHead>
            <TableHead>Food</TableHead>
            <TableHead className="flex flex-row items-center gap-2">
              Date <ChevronsUpDown />
            </TableHead>
            <TableHead>Total</TableHead>
            <TableHead>Delivery address</TableHead>
            <TableHead className="flex flex-row items-center gap-2">
              Delivery state <ChevronsUpDown />
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
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
              <TableCell>{order?.deliveryAddress}</TableCell>
              <TableCell>{order?.deliveryState}</TableCell>
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
