import { Prisma } from "@/lib/prisma";
import { currentUser } from "@clerk/nextjs/server";
import React from "react";

const layout = async ({ children }: { children: React.ReactNode }) => {
  const user = await currentUser();
  if (!user) return null;
  const loggedInUser = await Prisma.user.findUnique({
    where: {
      clerkUserId: user.id,
    },
  });

  if (!loggedInUser) {
    await Prisma.user.create({
      data: {
        name: user.fullName,
        clerkUserId: user.id,
        email: user.emailAddresses[0].emailAddress,
        imageUrl: user.imageUrl,
      },
    });

    return <div>{children}</div>;
  }
};
export default layout;
