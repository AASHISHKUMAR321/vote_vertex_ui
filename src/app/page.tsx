"use client";

import { useGetAllUsers } from "@/hooks/admin.hook";
import { useTheme } from "next-themes";
import { useEffect } from "react";

export default function Home() {
  const { setTheme } = useTheme();
  useEffect(() => {
    setTheme("dark");
  }, []);
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24"></main>
  );
}
