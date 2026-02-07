import React, { ReactNode } from "react";

const MyTitle = ({ children }: { children: ReactNode }) => {
  return <h2>{children}</h2>;
};

export default MyTitle;
