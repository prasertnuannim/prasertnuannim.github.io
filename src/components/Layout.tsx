import React from "react";

const Layout = ({ children, className }: any) => {
  return (
    <div
      className={`w-full h-auto inline-block z-0 p-28 xl:p-20 lg:p-16 md:p-12 sm:p-8 ${className}`}
    >
      {children}
    </div>
  );
};

export default Layout;
