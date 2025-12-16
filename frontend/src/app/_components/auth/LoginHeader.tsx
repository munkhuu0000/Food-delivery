import { Button } from "@/components/ui/button";
import { ChevronLeft } from "lucide-react";

type LoginHeader = { title: string; text: string };

export const LoginHeader = ({ title, text }: LoginHeader) => {
  return (
    <div className="w-104 h-94 flex flex-col gap-6">
      <Button className="w-9 h-9" variant={"outline"}>
        <ChevronLeft size={16} strokeWidth={2.25} />
      </Button>
      <div>
        <p className="font-semibold text-2xl text/text-foreground "> {title}</p>
        <p className="font-normal text-[16px] text-[#71717A]">{text}</p>
      </div>
    </div>
  );
};
