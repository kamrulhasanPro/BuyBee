import React from "react";

const MyContainer = ({ children }: { children: React.ReactNode }) => {
  return <div className="max-w-[1600] w-11/12 mx-auto pt-10">{children}</div>;
};

export default MyContainer;
