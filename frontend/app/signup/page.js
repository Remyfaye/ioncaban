"use client";

import ButtonComponent from "@/components/ButtonComponent";
import FormComponent from "@/components/FormComponent";
import Icon from "@/components/Icons";
import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <div className="lg:-mx-[60px] h-[100vh] flex jus justify-between">
      <Icon
        url="/loginimg.png"
        additionalStyle="h-[100vh] fixed lg:w-[50%] hidden lg:block"
      />
      <div className="lg:w-[50%] p-5 flex flex-col justify-items-end justify-center items-center lg:ml-auto gap-5 h-[140vh] lg:h-[130vh]">
        <Icon url="/logo.png" />
        <p className="font-[800] text-[32px]">Create account</p>
        <div className="lg:w-[70%] w-[100%]">
          <FormComponent label="Email" />
          <FormComponent label="Password" password />
          <FormComponent label="Confirm Password" password />
        </div>
        <p>
          Already have an account? <Link href="/login">Login</Link>
        </p>
        <button className="bg-[#03623F] text-white h-[52px] rounded-[15px] lg:w-[400px] w-full py-[10px] px-[20px]">
          Create Account
        </button>
        <Icon url="/icons/or.png" />
        <button className="border text-black h-[52px] rounded-[15px] lg:w-[400px] w-full py-[10px] px-[20px] flex justify-center gap-5 items-center">
          <Icon url="/icons/google.svg.png" />
          <p>Continue with Google</p>
        </button>
        <p>By Submitting, I accept Mycaban terms of use</p>
      </div>
    </div>
  );
};

export default page;
