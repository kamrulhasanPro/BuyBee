"use client";
import Image from "next/image";
import React from "react";
import { Button } from "../ui/button";
import { signIn } from "next-auth/react";

const SocialLogin = () => {
  return (
    <>
      {/* google */}
      <Button
        onClick={() => signIn("google", { callbackUrl: "/" })}
        variant={"outline"}
        className="cursor-pointer rounded-sm w-full mt-2"
      >
        <Image
          width="36"
          height="36"
          src="https://img.icons8.com/color/48/google-logo.png"
          alt="google-logo"
        />{" "}
        Sign Up To Google Account
      </Button>
    </>
  );
};

export default SocialLogin;
