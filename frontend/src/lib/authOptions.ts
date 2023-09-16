import { AuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { prisma } from "./prsima";
import { compareSync } from "bcrypt";

export const authOptions: AuthOptions = {
  providers: [
    CredentialsProvider({
      name: "Admin Account",
      id: "admin-account",
      type: "credentials",
      credentials: {
        email: {
          label: "Email,",
          placeholder: "youremail@email.com",
        },
        password: {
          label: "Password,",
          placeholder: "*********",
          type: "password",
        },
      },
      authorize: async (credentials) => {
        const user = await prisma.adminUser.findUnique({
          where: { email: credentials?.email },
          include: { role: { include: { permissions: true } } },
        });

        const userRole = user?.role?.id || "";
        const userPermissions =
          user?.role?.permissions.map((permission) => permission.id) || [];
        if (user) {
          const isPasswordValid = compareSync(
            credentials?.password as string,
            user.password
          );

          if (!isPasswordValid) {
            return null;
          }
          return {
            id: user,
            name: user.firstName + " " + user.lastName,
            email: user.email,
            type: "admin",
            role: userRole,
            permissions: userPermissions,
          };
        } else {
          return null;
        }
      },
    }),
    CredentialsProvider({
      name: "User Account",
      id: "user-account",
      type: "credentials",
      credentials: {
        email: {
          label: "Email,",
          placeholder: "youremail@email.com",
        },
        password: {
          label: "Password,",
          placeholder: "*********",
          type: "password",
        },
      },
      authorize: (credentials) => {
        //   const user = await prisma.adminUser.findUnique({
        //     where: { email: credentials?.email },
        //     include: { role: { include: { permissions: true } } },
        //   });

        //   const userRole = user?.role?.id || "";
        //   const userPermissions =
        //     user?.role?.permissions.map((permission) => permission.id) || [];
        //   if (user) {
        //     // Any object returned will be saved in `user` property of the JWT
        //     const isPasswordValid = compareSync(
        //       credentials?.password as string,
        //       user.password
        //     );

        //     if (!isPasswordValid) {
        //       return null;
        //     }
        //     return {
        //       id: user,
        //       name: user.firstName + " " + user.lastName,
        //       email: user.email,
        //       type: "admin",
        //       role: userRole,
        //       permissions: userPermissions,
        //     };
        //   } else {
        return null;

        //   }
      },
    }),
  ],
};
