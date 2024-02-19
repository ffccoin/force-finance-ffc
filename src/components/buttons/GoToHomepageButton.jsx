"use client";

import { useRouter } from "next/navigation";
import Button from "./Button";
const GoToHomepageButton = () => {
  const router = useRouter();
  return (
    <Button
      className="mt-11"
      title="Back to home page"
      onClick={() => router.push("/")}
    />
  );
};

export default GoToHomepageButton;
