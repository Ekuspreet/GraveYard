'use client'

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

export default function Profile() {
  const router = useRouter()

  useEffect(() => {
    router.push("/profile/raghavrana")
  }, [])

  return (
    <>
      <h1>Profile</h1>
    </>
  );
}
