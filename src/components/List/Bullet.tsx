import { PropsWithChildren } from "react";

export default function BulletList({ children }: PropsWithChildren) {
  return (
    <ul className="list-[square] ps-6 max-w-prose mt-4 marker:font-bold marker:text-gold">
      {children}
    </ul>
  );
}
