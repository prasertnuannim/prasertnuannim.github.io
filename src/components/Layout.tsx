import React from "react";

const Layout = ({ children, className }: any) => {
  return (
    <div
      className={`w-full h-auto inline-block z-0 pr-28 pl-28 
        xl:pr-20 xl:pl20 
        lg:pr-16 lg:pl-16
        md:pr-12  md:pl-12
        sm:pr-8  sm:pl-8
        ${className}`}
    >
      {children}
    </div>
  );
};

export default Layout;
