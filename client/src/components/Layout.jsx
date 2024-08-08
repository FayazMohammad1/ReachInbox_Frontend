import React from "react";
import Header from "./Header";
import Footer from "./Footer";

function Layout({ children }) {
  return (
    <div className="flex relative flex-col justify-center bg-white dark:bg-black">
      <Header />
      <main className="flex z-0 gap-5 justify-center items-center px-7 py-0 w-full rounded min-h-[663px] max-md:px-5 max-md:max-w-full">
        {children}
      </main>
      <Footer />
    </div>
  );
}

export default Layout;
