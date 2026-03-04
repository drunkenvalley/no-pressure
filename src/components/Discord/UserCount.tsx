"use client";

import axios from "axios";
import { DetailedHTMLProps, HTMLAttributes, useEffect, useState } from "react";

const UserCount = ({
  className,
  ...props
}: DetailedHTMLProps<HTMLAttributes<HTMLSpanElement>, HTMLSpanElement>) => {
  const [userCount, setUserCount] = useState(0);
  const server = "7WQ8qrsm9g";
  const style = ["font-bold", className].join(" ");

  useEffect(() => {
    axios
      .get(
        `https://discord.com/api/v9/invites/${server}?with_counts=true&with_expiration=true`,
      )
      .then((res: { data: { approximate_member_count: number } }) => {
        setUserCount(res.data.approximate_member_count);
      })
      .catch((e) => {
        // eslint-disable-next-line no-console
        console.error(e);
      });
  }, []);

  return (
    <strong className={style} {...props}>
      {userCount || "many"}
    </strong>
  );
};

export const UserCountPreview = () => (
  <span className="px-1 text-blue-300 font-mono underline">
    {"{"}DISCORD{"}"}
  </span>
);

export default UserCount;
