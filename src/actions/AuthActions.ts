"use server";
import { UserType } from "@/types/types";

export const userCreate = async (user: UserType) => {
  if (!user) {
    return {
      message: "please define a user",
    };
  }
  try {
    // // check isExist User
    // const findUser = await fetch(
    //   `${process.env.NEXTAUTH_URL}/api/users/${user?.email}`,
    // );
    // const existingUser = await findUser.json();

    // if (findUser.ok && existingUser) {
    //   return {
    //     message: "User already exist.",
    //   };
    // }

    console.log(user);

    // create user
    const response = await fetch(`${process.env.NEXTAUTH_URL}/api/users`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    });

    if (!response.ok) {
      return {
        message: "Failed to create user",
      };
    }

    //   console.log(await response.json());
    return await response.json();
  } catch (error) {
    return {
      message: "Something went wrong",
      error,
    };
  }
};
