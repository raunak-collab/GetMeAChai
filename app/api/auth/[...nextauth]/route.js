import NextAuth from 'next-auth'
// import AppleProvider from 'next-auth/providers/apple'
// import FacebookProvider from 'next-auth/providers/facebook'
// import GoogleProvider from 'next-auth/providers/google'
// import EmailProvider from 'next-auth/providers/email'
import GitHubProvider from "next-auth/providers/github";
import mongoose from 'mongoose';
import User from '@/models/User';
import Payment from '@/models/Payment';
import connectDB from '@/db/connectDb';

export const authoptions = NextAuth({
  providers: [
    // OAuth authentication providers...
    GitHubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET
    })

    // AppleProvider({
    //   clientId: process.env.APPLE_ID,
    //   clientSecret: process.env.APPLE_SECRET
    // }),
    // FacebookProvider({
    //   clientId: process.env.FACEBOOK_ID,
    //   clientSecret: process.env.FACEBOOK_SECRET
    // }),
    // GoogleProvider({
    //   clientId: process.env.GOOGLE_ID,
    //   clientSecret: process.env.GOOGLE_SECRET
    // }),
    // // Passwordless / email sign in
    // EmailProvider({
    //   server: process.env.MAIL_SERVER,
    //   from: 'NextAuth.js <no-reply@example.com>'
    // }),
  ],



  // Callbacks are functions that run during the authentication process to handle specific tasks.
  callbacks: {
    // This function runs when a user signs in using GitHub:
    async signIn({ user, account, profile, email, credentials }) {
      if (account.provider == "github") {
        // connect to the database
        await connectDB();
        // Check if the user already exists in the database
        const currentUser = await User.findOne({ email: email })
        if (!currentUser) {
          // Create a new user
          const newUser = await User.create({
            email: user.email,
            username: user.email.split("@")[0]
          })

        }


        // console.log("User signed :", user);
        // It allows the sign-in if everything is fine, returning 
        return true
      }
    },

    // This function runs when the session is created or checked.
    async session({ session, user, token }) {
      const dbUser = await User.findOne({ email: session.user.email })
      // console.log(dbUser);
      session.user.name = dbUser.username
      return session;
    },
  }
})


// This line exports the authoptions object for both GET and POST HTTP methods:
export { authoptions as GET, authoptions as POST };



// Summary:
// The app allows users to sign in with GitHub.
// It checks if the user already exists in a MongoDB database.
// If the user is new, it creates a new record in the database.
// It adds the username to the session so the app can use it during the user’s session.