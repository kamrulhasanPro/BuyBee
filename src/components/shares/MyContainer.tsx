import React from "react";

const MyContainer = ({ children, className }: { children: React.ReactNode, className?: string }) => {
  return <div className={`${className} max-w-[1600] w-11/12 mx-auto pt-10  pb-5`}>{children}</div>;
};

export default MyContainer;
