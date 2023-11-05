"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Image from "next/image";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

import { getAllUsers } from "@/api/admin.api";
import { useQuery } from "@tanstack/react-query";
import { useReactQuery } from "@/hooks/useReactQuery";

export default function Home() {
  useReactQuery(["getAllUsers"], getAllUsers);
  // const data = useQuery({
  //   queryKey: ["getAllUsers"],
  //   queryFn: () => getAllUsers(),
  // });

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Alert>
        <AlertTitle>Heads up!</AlertTitle>
        <AlertDescription>
          You can add components and dependencies to your app using the cli.
        </AlertDescription>
      </Alert>
    </main>
  );
}
