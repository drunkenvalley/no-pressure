"use client";

import { ReactNode } from "react";

const FeatureList = ({ children }: { children?: ReactNode[] }) => {
  return (
    <div className="flex flex-col md:flex-row w-full gap-x-4 gap-y-6 px-4 md:px-0">
      {children && children}
    </div>
  );
};

export default FeatureList;
