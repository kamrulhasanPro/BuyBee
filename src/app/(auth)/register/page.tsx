"use client";

import SocialLogin from "@/components/cards/SocialLogin";
import MyContainer from "@/components/shares/MyContainer";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Register = () => {
  return (
    <MyContainer>
      <div className="max-w-96 mx-auto">
        <div className="mb-7">
          <h5 className="text-4xl font-medium">Create an account</h5>
          <p>Enter your information.</p>
        </div>

        <form  className="flex flex-col gap-3">
          {/* name */}
          <input
            type="text"
            className="border-b focus:outline-none focus:border-b-sidebar-border"
            placeholder="Name"
          />

          {/* email */}
          <input
            type="email"
            className="border-b focus:outline-none focus:border-b-sidebar-border"
            placeholder="Email Address"
          />

          {/* password */}
          <input
            type="password"
            className="border-b focus:outline-none focus:border-b-sidebar-border"
            placeholder="Password"
          />

          {/* btn */}
          <Button type="submit" className="cursor-pointer rounded-sm">
            Create Account
          </Button>
        </form>

        {/* social login */}
        <SocialLogin />
        
        <div className="text-sm text-center mt-4">
          <span className="text-gray-400">Already have account?</span>{" "}
          <Link href={"/login"} className="font-bold">
            Log In
          </Link>
        </div>
      </div>
    </MyContainer>
  );
};

export default Register;
