import Image from "./Image";
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
          aria-label="Join our Discord server"
          href={process.env.NEXT_PUBLIC_DISCORD_INVITE_LINK as string}
          rel="noreferrer"
          target="_blank"
        >
          <Image
            alt="Discord"
            className="w-6 h-6 m-2"
            height={24}
            src="/logos/discord.svg"
            width={24}
          />
        </NextLink>
        <NextLink
          aria-label="Visit our Github repository"
          href="https://github.com/drunkenvalley/no-pressure/graphs/contributors"
          rel="noreferrer"
          target="_blank"
        >
          <Image
            alt="GitHub"
            className="w-6 h-6 m-2"
            height={24}
            src="/logos/github.svg"
            width={24}
          />
        </NextLink>
      </div>
    </footer>
  );
};

export default Footer;
