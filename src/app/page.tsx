"use client";

import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { useGetAllUsers } from "@/hooks/admin.hook";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Alert>
        <AlertTitle>Heads up!</AlertTitle>
        <AlertDescription>You can add components and dependencies to your app using the cli.</AlertDescription>
      </Alert>
    </main>
  );
}
