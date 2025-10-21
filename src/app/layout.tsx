import "@/styles/globals.scss";
import type { Metadata } from "next";

const meta = {
  description: `Welcome to No Pressure - a community built on enjoying World of Warcraft: Dragonflight together, with no pressure`,
  images: "/images/og.png",
  title: "No Pressure",
  url: "https://no-pressure.eu",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://no-pressure.eu"),
  description: meta.description,
  openGraph: {
    images: meta.images,
    url: meta.url,
  },
  title: {
    default: meta.title,
    template: `${meta.title} | %s`,
  },
  twitter: {
    images: meta.images,
  },
};

const RootLayout = ({
  children,
}: {
  children: React.ReactNode;
}): React.ReactNode => {
  return (
    <html lang="en">
      <head>
        <link
          href="/images/no-pressure-logo-icon.png"
          rel="icon"
          type="image/svg+xml"
        />
        <meta content="width=device-width, initial-scale=1.0" name="viewport" />
        <meta charSet="UTF-8" />
      </head>
      <body className="font-nunito bg-purple text-gold">{children}</body>
    </html>
  );
};

export default RootLayout;
