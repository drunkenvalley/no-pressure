import Image from "next/image";
import Link from "./Link";
import NextLink from "next/link";

const Footer = () => {
  return (
    <footer className="bg-purple text-gold text-center py-4">
      <p className="text-sm">
        <Link
          href="https://github.com/drunkenvalley/no-pressure"
          rel="noreferrer"
          target="_blank"
        >
          Made with 🦶 by members of the No Pressure community.
        </Link>
      </p>
      <div className="flex items-center justify-center mt-4">
        <NextLink
          href={process.env.NEXT_PUBLIC_DISCORD_INVITE_LINK as string}
          rel="noreferrer"
          target="_blank"
        >
          <Image
            alt="Discord"
            className="w-6 h-6 m-2"
            height={6}
            src="/discord.svg"
            width={6}
          />
        </NextLink>
        <NextLink
          href="https://github.com/drunkenvalley/no-pressure/graphs/contributors"
          rel="noreferrer"
          target="_blank"
        >
          <Image
            alt="GitHub"
            className="w-6 h-6 m-2"
            height={6}
            src="/github.svg"
            width={6}
          />
        </NextLink>
      </div>
    </footer>
  );
};

export default Footer;
