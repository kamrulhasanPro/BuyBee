"use client";
import SocialLogin from "@/components/cards/SocialLogin";
import MyContainer from "@/components/shares/MyContainer";
import { Button } from "@/components/ui/button";
import { signIn } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Login = () => {
  const handleSubmit = (e: any) => {
    e.preventDefault();
    const from = e.target;
    const email = from.email.value;
    const password = from.password.value;

    signIn("credentials", { email, password });
  };
  return (
    <MyContainer>
      <div className="max-w-96 mx-auto">
        <div className="mb-7">
          <h5 className="text-4xl font-medium">LogIn</h5>
          <p>Enter your information.</p>
        </div>

        <form onSubmit={handleSubmit} className="flex flex-col gap-3">
          {/* email */}
          <input
            name="email"
            type="email"
            className="border-b focus:outline-none focus:border-b-sidebar-border"
            placeholder="Email Address"
          />

          {/* password */}
          <input
            name="password"
            type="password"
            className="border-b focus:outline-none focus:border-b-sidebar-border"
            placeholder="Password"
          />

          {/* btn */}
          <Button type="submit" className="cursor-pointer rounded-sm">
            Login Account
          </Button>
        </form>

        {/* social login */}
        <SocialLogin />

        <div className="text-sm text-center mt-4">
          <span className="text-gray-400">Don&apos;t have account?</span>{" "}
          <Link href={"/register"} className="font-bold">
            Register
          </Link>
        </div>
      </div>
    </MyContainer>
  );
};

export default Login;
