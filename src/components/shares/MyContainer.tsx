import React from "react";

const MyContainer = ({ children, className }: { children: React.ReactNode, className?: string }) => {
  return <div className={`${className} max-w-[1600] w-11/12 mx-auto pt-15`}>{children}</div>;
};

export default MyContainer;
