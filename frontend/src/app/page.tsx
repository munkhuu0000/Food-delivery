import Image from "next/image";
import { FirstLogin } from "./_components/FirstLogin";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans">
      <FirstLogin />
    </div>
  );
}
