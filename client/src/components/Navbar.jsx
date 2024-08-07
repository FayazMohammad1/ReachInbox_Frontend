import React from 'react'
import {ChevronDown } from 'lucide-react'; 

const Navbar = () => {
  return (
    <div>
        <header className="flex relative flex-col items-start w-full bg-[#111111] border-b border-gray-700 min-h-[80px] max-md:max-w-full">
    <h1 className="absolute max-w-full text-xl font-bold mt-6 tracking-tight text-white whitespace-nowrap left-[34px] w-[127px]">
      Onebox
    </h1>
    <div className="flex absolute z-0 gap-6 items-center bottom-[19px] right-[19px]">
      {/* <div className="flex gap-2 items-center self-stretch px-1.5 py-1 my-auto bg-neutral-800 rounded-[80px]">
        <div className="flex shrink-0 self-stretch my-auto w-4 h-4 rounded-full bg-zinc-500" />
        <div className="flex overflow-hidden gap-2.5 items-start self-stretch p-px my-auto w-[18px]">
          <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/fea1425d90aa4badb5ff847285fda6dadbdf73f2bf6ff233e6f6a1743b268009?apiKey=668dba3ade934f8e90837c8a2a069136&&apiKey=668dba3ade934f8e90837c8a2a069136" alt="Status icon" className="object-contain w-4 aspect-square" />
        </div>
      </div> */}
      <div className="flex gap-2 items-center self-stretch mb-1 text-md font-semibold leading-loose text-white">
        <div className="flex gap-2 justify-center items-center self-stretch my-auto">
          <div className="gap-2 self-stretch">Tim's Workspace</div>
        </div>

        <ChevronDown/>
        {/* <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/e2dd969bcadcd4e64412df731160a7bfae5aa7a136c12cda4e1789078d986fda?apiKey=668dba3ade934f8e90837c8a2a069136&&apiKey=668dba3ade934f8e90837c8a2a069136" alt="Dropdown icon" className="object-contain shrink-0 self-stretch my-auto w-4 aspect-square" /> */}
      </div>
    </div>
  </header>
    </div>
  )
}

export default Navbar;