"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

function NavBar() {
  const [navbar, setNavbar] = useState(false);
  return (
    <div>
      <nav className="w-full py-3 md:border-b sticky top-0 left-0 right-0 z-10 border-b-primary">
        <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
          <div>
            <div className="flex items-center justify-between py-3 md:py-5 md:block">
              {/* LOGO */}
              <Link href="/">
                <Image src="logo.svg" width={80} height={80} alt="brand logo" />
              </Link>
              {/* HAMBURGER BUTTON FOR MOBILE */}
              <div className="md:hidden">
                <button
                  className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                  onClick={() => setNavbar(!navbar)}
                >
                  {navbar ? (
                    <Image src="/close.svg" width={30} height={30} alt="logo" />
                  ) : (
                    <Image
                      src="/hamburger-menu.svg"
                      width={30}
                      height={30}
                      alt="logo"
                      className="focus:border-none active:border-none"
                    />
                  )}
                </button>
              </div>
            </div>
          </div>
          <div>
            <div
              className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
                navbar ? "p-12 md:p-0 block" : "hidden"
              }`}
            >
              <ul className="h-screen md:h-auto items-center justify-center md:flex ">
                <li className="pb-3 text-xl text-secondary py-2 md:px-6 text-center">
                  <Link
                    style={{
                      borderBottom: navbar ? "none" : "2px solid #532F82",
                    }}
                    href="/business"
                    onClick={() => setNavbar(!navbar)}
                  >
                    Business Directory
                  </Link>
                </li>
                <li className="pb-3 text-xl text-secondary py-2 px-6 text-center">
                  <Link
                    style={{
                      borderBottom: navbar ? "none" : "2px solid #532F82",
                    }}
                    href="/features"
                    onClick={() => setNavbar(!navbar)}
                  >
                    Features
                  </Link>
                </li>
                <li className="pb-3 text-xl text-secondary py-2 px-6 text-center">
                  <Link href="/pricing" onClick={() => setNavbar(!navbar)}>
                    Pricing
                  </Link>
                </li>
                <li className="pb-3 text-xl text-secondary py-2 px-6 text-center">
                  <Link href="/blog" onClick={() => setNavbar(!navbar)}>
                    Blog
                  </Link>
                </li>
                <li className="pb-3 text-xl text-secondary py-2 px-6 text-center">
                  <Link href="/login" onClick={() => setNavbar(!navbar)}>
                    Login
                  </Link>
                </li>
                <li className="pb-3 text-xl text-secondary px-6 text-center btn-primary">
                  <Link href="/signup" onClick={() => setNavbar(!navbar)}>
                    Signup
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default NavBar;
