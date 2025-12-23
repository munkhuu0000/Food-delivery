"use client";

import { LeftPanel } from "../LeftPanel";
import { OrderInfo } from "./OrderInfo";

export default function Home() {
  return (
    <div className="flex min-h-screen">
      <LeftPanel />
      <OrderInfo />
    </div>
  );
}
