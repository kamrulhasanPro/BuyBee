import React, { ReactNode } from "react";

const MyTitle = ({ children }: { children: ReactNode }) => {
  return <h2 className="text-2xl font-bold border-b-8 border-primary inline-block pb-1">{children}</h2>;
};

export default MyTitle;
