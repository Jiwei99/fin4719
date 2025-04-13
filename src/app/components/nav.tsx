"use client";

import Link from "next/link";
import Image from "next/image";

export default function Navbar() {

  const prefix = process.env.NODE_ENV === 'production' ? "/fin4719" : "";

  const data = [
    { name: "Home", anchor: "home" },
    { name: "Trade Crypto", anchor: "crypto" },
    { name: "Request for Quote", anchor: "quote" },
    { name: "Security Tokens", anchor: "tokens" },
    { name: "Art Financing", anchor: "art" }
  ]

  return (
    <nav className="fixed w-full z-50 shadow-md">
      <div className="bg-white text-black dark:bg-gray-900 dark:text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between h-16">
            {/* Left Side: Name */}
            <div className="flex items-center space-x-4">
            <Image src={`${prefix}/dbs.svg`} alt="Logo" width={100} height={100} />
            <h1 className="text-2xl font-bold">
              Digital Exchange
              </h1>
              </div>
            {/* <IconTyped /> */}

            {/* Right Side: Links */}
            <div className="flex items-center">
              <div className="hidden md:flex space-x-8">
                {data.map((item) => ( // Data sorted before passing to Navbar
                  <Link
                    key={item.name}
                    href={`#${item.anchor}`}
                    className="hover:text-slate-500 dark:hover:text-slate-400"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}