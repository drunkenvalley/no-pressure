import Link from "next/link";
import Image from "next/image";
import { ReactNode } from "react";

interface RecruitmentProps {
  id: string;
  children: ReactNode;
  link: ReactNode;
}

const Recruitment = async ({ id, children, link }: RecruitmentProps) => (
  <article className="bg-dark p-8 lg:p-6 lg:rounded-lg flex flex-col lg:flex-row gap-6">
    <div
      className="grow text-left flex flex-row flex-wrap items-center justify-center scroll-mt-32"
      id={id}
    >
      {children && children}
    </div>
    <div className="flex flex-row justify-center items-center">
      <Link
        className="p-4 border text-gold border-gold rounded-md relative flex flex-row gap-3 items-center group"
        href="/invite"
      >
        <Image
          alt="Discord"
          className="h-6 w-6"
          height={24}
          src="/images/no-pressure-logo-icon.png"
          width={24}
        />
        <span className="text-gold outline-offset-2 cursor-pointer relative bg-gradient-to-r from-current to-current bg-no-repeat group-hover:bg-[length:100%_0.1em] group-focus:bg-[length:100%_0.1em] bg-[left_top_100%] transition-[background-size] duration-300 ease-in-out  bg-[length:1em_0.1em]">
          {link && link}
        </span>
      </Link>
    </div>
  </article>
);

export default Recruitment;
