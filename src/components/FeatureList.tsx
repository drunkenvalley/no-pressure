"use client";

import { ReactNode } from "react";

const FeatureList = ({ children }: { children?: ReactNode[] }) => {
  /**
   
  const [userCount, setUserCount] = useState(0);
  const server = "7WQ8qrsm9g";
  
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
  */

  return (
    <div className="flex flex-col md:flex-row w-full gap-x-4 gap-y-6 px-4 md:px-0">
      {children && children}
    </div>
  );
};

export default FeatureList;
