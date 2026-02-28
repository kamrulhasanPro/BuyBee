import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";

if (!process.env.GOOGLE_CLIENT_ID || !process.env.GOOGLE_CLIENT_SECRET) {
  throw new Error("Missing Google OAuth environment variables");
}

const users = [
  { id: 1, email: "jalil@gmail.com", password: "1234" },
  { id: 2, email: "kamrul@gmail.com", password: "1234" },
  { id: 3, email: "rahat@gmail.com", password: "1234" },
];

export const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),

    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: {
          label: "Email",
          type: "email",
          placeholder: "Enter Your Email",
          required: true,
        },
        password: { label: "Password", type: "password", required: true },
      },
      async authorize(credentials, req) {
        // validation
        if (!credentials) return null;

        // check email
        const user = users.find((u) => u.email === credentials?.email);
        if (!user) {
          return null;
        }

        // password check
        const isRightPassword = user.password === credentials?.password;
        if (!isRightPassword) {
          return null;
        }

        console.log("user correct", user);
        // Return null if user data could not be retrieved
        return {
          id: String(user?.id),
          email: user?.email,
        };
      },
    }),
  ],
});
