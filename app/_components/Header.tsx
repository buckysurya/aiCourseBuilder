"use client";

import { Button } from "@/components/ui/button";
import ShinyButton from "@/components/ui/shiny-button";
import { useUser } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";

const Header = () => {
  const { user } = useUser();

  return (
    <div className="flex justify-between items-center p-2 pl-3 pr-4 shadow-sm">
      
      <Image
        src={"/logo.png"}
        alt="logo"
        width={200}
        height={100}
        priority
        className="object-cover"
      />

      {/* Right Side Buttons */}
      <div className="flex items-center gap-4">
        {!user ? (
          <Link href="/sign-up">
            <ShinyButton text="Sign Up" />
          </Link>
        ) : (
          <div className="justify-end items-center gap-4 flex">
            <Link href="http://localhost:3000">
              <Button>AI Career Coach</Button>
          </Link>
          <Link href="/dashboard">
            <Button>Dashboard</Button>
          </Link>
          </div>
        )}

      </div>

    </div>
  );
};

export default Header;