
import React from "react";
import '../index.css';

export const Footer = () => {
  return (
    <div className="flex h-8 items-center gap-2.5 -mt-7 px-[100px] py-0 relative bg-[#121212] border-t [border-top-style:solid] border-[#25262b]">
      <div className="flex flex-col items-center justify-center gap-2 relative flex-1 grow mt-[-13.50px] mb-[-13.50px]">
        <p className="relative w-fit mt-[-1.00px] font-extra-small font-[number:var(--extra-small-font-weight)] text-[#5c5f66] text-[length:var(--extra-small-font-size)] tracking-[var(--extra-small-letter-spacing)] leading-[var(--extra-small-line-height)] whitespace-nowrap [font-style:var(--extra-small-font-style)]">
          © 2024 Reachinbox. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;