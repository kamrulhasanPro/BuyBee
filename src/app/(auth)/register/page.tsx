"use client";

import { userCreate } from "@/actions/AuthActions";
import SocialLogin from "@/components/cards/SocialLogin";
import MyContainer from "@/components/shares/MyContainer";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";

const Register = () => {
  const router = useRouter();

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    // console.log({ name, email, password });

    const result = await userCreate({ name, email, password });
    console.log(result);
    if (result?.error) {
      alert(result?.error);
    } else {
      form.reset();
      router.push("/");
    }
  };

  return (
    <MyContainer>
      <div className="max-w-96 mx-auto">
        <div className="mb-7">
          <h5 className="text-4xl font-medium">Create an account</h5>
          <p>Enter your information.</p>
        </div>

        <form onSubmit={handleSubmit} className="flex flex-col gap-3">
          {/* name */}
          <input
            name="name"
            type="text"
            className="border-b focus:outline-none focus:border-b-sidebar-border"
            placeholder="Name"
          />

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
