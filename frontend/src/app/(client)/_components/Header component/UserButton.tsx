"use client";
import { User } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Link from "next/link";
import { useAuth } from "@/app/context/AuthProvider";

export const UserButton = () => {
  const { user, logout } = useAuth();
  console.log({ user });

  return (
    <div>
      <div className="rounded-full bg-[#EF4444] border-0 w-9 h-9 flex justify-center items-center">
        <DropdownMenu>
          <DropdownMenuTrigger>
            <User />
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-47 h-26 flex flex-col justify-center items-center gap-2">
            <DropdownMenuLabel>
              <p className="flex gap-2">
                Hello,<span className="text-red-500">{user?.username}</span>
              </p>
            </DropdownMenuLabel>

            <Button
              variant="outline"
              onClick={logout}
              className="rounded-full bg-[#F4F4F5]"
            >
              Sign out
            </Button>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
};
