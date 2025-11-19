"use client";

import { useTheme } from "next-themes";
import Image from "next/image";

export default function ProfileImage() {
  const { theme } = useTheme();
  return (
    <Image
      src={
        theme === "light"
          ? "/images/profile-light.png"
          : "/images/profile-dark.png"
      }
      alt="JJH"
      width={144}
      height={144}
      className="object-cover"
    />
  );
}
