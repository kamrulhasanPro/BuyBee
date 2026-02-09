"use client"

import { doSocialLogin } from "@/actions/AuthActions";
import MyContainer from "@/components/shares/MyContainer";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Login = () => {
  return (
    <MyContainer>
      <div className="max-w-96 mx-auto">
        <div className="mb-7">
          <h5 className="text-4xl font-medium">LogIn</h5>
          <p>Enter your information.</p>
        </div>

        <form action="" className="flex flex-col gap-3">

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
        <form action={doSocialLogin} className="mt-2">
          {/* google */}
          <Button
            type="submit"
            name="action"
            value={"google"}
            variant={"outline"}
            className="cursor-pointer rounded-sm w-full"
          >
            <Image
              width="40"
              height="40"
              src="https://img.icons8.com/color/48/google-logo.png"
              alt="google-logo"
            />{" "}
            Sign Up To Google Account
          </Button>
        </form>
        <div className="text-sm text-center mt-4">
          <span className="text-gray-400">Don't have account?</span>{" "}
          <Link href={"/register"} className="font-bold">
            Register
          </Link>
        </div>
      </div>
    </MyContainer>
  );
};

export default Login;
