"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function WrappedPage() {
  const router = useRouter();
  
  useEffect(() => {
    router.push("/wrapped/stats");
  }, [router]);

  return null;
}
