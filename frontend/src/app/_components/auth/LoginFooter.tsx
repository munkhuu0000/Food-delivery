import Link from "next/link";

type LoginFooter = { question: string; answer: string; href: string };

export const LoginFooter = ({ question, answer, href }: LoginFooter) => {
  return (
    <div className="w-104 h-94 flex flex-row gap-2 justify-center">
      <p className="font-normal  text-[16px] text-[#71717A]">{question}</p>
      <Link href={href}>
        <p className="font-normal text-[16px] text-[#2563EB]">{answer}</p>
      </Link>
    </div>
  );
};
