import {
  ThirdwebAuthProvider,
  authSession,
} from "@thirdweb-dev/auth/next-auth";
import NextAuth from "next-auth";
import { connectToDB } from "../../../utils/database";
import User from "../../../models/user";

export default NextAuth({
  providers: [
    ThirdwebAuthProvider({
      domain: process.env.NEXT_PUBLIC_THIRDWEB_AUTH_DOMAIN || "",
    }),
    // GoogleProvider({
    //   clientId: process.env.GOOGLE_CLIENT_ID || "",
    //   clientSecret: process.env.GOOGLE_CLIENT_SECRET || "",
    // }),
  ],
  callbacks: {
    async session({ session, token }) {
      const sessionWithAddress = authSession({ session, token });
      await connectToDB();
      const sessionUser = await User.findOne({
        // @ts-ignore
        address: sessionWithAddress.user.address,
      });
    //   @ts-ignore
      sessionWithAddress.user.id = sessionUser._id.toString();
      return sessionWithAddress;
    },

    async signIn({ user }) {
      try {
        await connectToDB();
        const userExists = await User.findOne({
          address: user.id,
        });

        if (!userExists) {
          await User.create({
            address: user.id,
          });
        }

        return true;
      } catch (error) {
        console.log(error);
        return false;
      }
    },
  },
});
