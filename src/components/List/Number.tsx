import { PropsWithChildren } from "react";

export default function NumberList({ children }: PropsWithChildren) {
  return (
    <ol className="list-decimal ps-6 max-w-prose mt-4 marker:font-bold marker:text-gold">
      {children}
    </ol>
  );
}
