import React from 'react';

function SignUpForm() {
  return (
    <section className="flex flex-col items-center gap-12 px-10 pt-[24px] pb-[40px] my-auto rounded-[17px] border border-[#343A40] bg-gradient-to-r from-[#111214] to-[#121212] w-[480px] max-md:px-5">

      <h2 className="self-start text-xl ml-auto mr-auto font-semibold leading-loose text-white">
        Create a new account
      </h2>
      <button className="flex gap-3 items-center justify-center px-4 py-2 w-[100%] text-base tracking-tight leading-loose text-stone-300 border-[#343A40] border-2 -mt-4 rounded-md">
        <img
          loading="lazy"
          src="https://freelogopng.com/images/all_img/1657952440google-logo-png-transparent.png"
          alt=""
          className="object-contain shrink-0 self-stretch my-auto aspect-[0.72] w-[20px]"
        />
        <span>Sign Up with Google</span>
      </button>
      <div className="flex items-center justify-center gap-2.5 px-[35px] py-[13px] relative rounded bg-gradient-to-r from-[#4B63DD] to-[#0524BFFC]">
        <button className="all-[unset] box-border relative w-fit mt-[-1.00px] [font-family:'Open_Sans-SemiBold',Helvetica] font-semibold text-white text-sm tracking-[0] leading-[21.7px] whitespace-nowrap rounded-md">
          Create an Account
        </button>
      </div>
      <p className="flex gap-1 -mt-5 items-start justify-center text-base">
        <span className="text-neutral-400">Already have an account?</span>
        <a href="#" className="text-stone-100">Sign In</a>
      </p>
    </section>
  );
}

export default SignUpForm;
