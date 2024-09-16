import Image from "@/components/Image";
import Link from "@/components/Link";
import NextLink from "next/link";

const Footer = () => {
  return (
    <footer className="w-full max-w-full md:max-w-5xl mx-auto bg-purple text-gold text-center py-4">
      <p className="text-sm">
        <Link
          href="https://github.com/drunkenvalley/no-pressure"
          rel="noreferrer"
          target="_blank"
        >
          Made with 🦶 by members of the No Pressure community.
        </Link>
      </p>
      <p className="text-xs md:max-w-3xl mx-auto my-3">
        <span className="text-light/70">
          World of Warcraft® ©2004 Blizzard Entertainment, Inc. All rights
          reserved. World of Warcraft, Warcraft and Blizzard Entertainment are
          trademarks or registered trademarks of Blizzard Entertainment, Inc. in
          the U.S. and/or other countries.
        </span>
      </p>
      <div className="flex items-center justify-center mt-4">
        <NextLink
          aria-label="Join our Discord server"
          href="/invite"
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
