"use client";
import React, { useState } from "react";
import { ModeToggle } from "./ModeToggle";
import { AuthClient } from "@dfinity/auth-client";
import Image from "next/image";
import Logo from '../public/dafya.png'

// types
export type StoredKey = string | CryptoKeyPair;
export interface AuthClientStorage {
  get(key: string): Promise<StoredKey | null>;

  set(key: string, value: StoredKey): Promise<void>;

  remove(key: string): Promise<void>;
}

const Navbar = () => {
  const [isLoggedIn, setIsLoggedIn] = React.useState(false);
  const [authClient, setAuthClient] = React.useState<AuthClient | null>(null);

  const handleAuthenticated = (authClient: AuthClient) => {
    console.log("User is authenticated");
    setIsLoggedIn(true);
    setAuthClient(authClient);
    // You can perform any additional actions after authentication here
  };

  const handleLogoutClick = () => {
    if (authClient) {
      authClient.logout();
      setIsLoggedIn(false);
    }
  };

  const noStorageImpl = {
    get(key: string) {
      return Promise.resolve(null);
    },
    set(key: string, value: StoredKey) {
      return Promise.resolve();
    },
    remove(key: string) {
      return Promise.resolve();
    },
  };

  const handleLoginClick = async () => {
    try {
      const client = await AuthClient.create({
        storage: noStorageImpl,
      });

      client.login({
        // 7 days in nanoseconds
        maxTimeToLive: BigInt(7 * 24 * 60 * 60 * 1000 * 1000 * 1000),
        onSuccess: async () => {
          handleAuthenticated(client);
        },
      });
    } catch (error) {
      console.error("Authentication failed:", error);
      // Handle the error as needed
    }
  };

  // ... (existing code)

  return (
    <nav className="py-3 px-7 flex items-center justify-between fixed w-full">
      <div>
        {/* image */}
        <Image src={Logo} width={213} height={72} alt="" />
      </div>className=" font-medium text-slate-700"
      <div className="flex gap-2 justify-between items-center w-[250px]">
        <span className=" font-medium text-slate-700">
          {/* home */}
          Home
        </span>
        {isLoggedIn ? (
          <button className=" font-medium text-slate-700" onClick={handleLogoutClick}>
            {/* logout */}
            Logout
          </button>
        ) : (
          <button onClick={handleLoginClick}>
            {/* login */}
            Login
          </button>
        )}
        {/* mode toggle */}
        <span>
          <ModeToggle />
        </span>
      </div>
    </nav>
  );
};

export default Navbar;

