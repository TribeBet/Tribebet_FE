"use client"
import Wallet from "./Wallet";
import Image from "next/image";
import Link from "next/link";
import Router, { useRouter } from "next/navigation";
import React, { useState } from "react";
// import tatrixLogo from '../assets/tatrixLogo.png'
import { AiOutlineSearch } from "react-icons/ai";
import { CgProfile } from "react-icons/cg";
import { MdOutlineAccountBalanceWallet } from "react-icons/md";
import logo from "../public/logo/logobig.png"
import { GiHamburgerMenu } from "react-icons/gi";





export default function NavBar() {
	const router = useRouter();
	const [searchQuery, setSearchQuery] = useState("");
	const [navbar, setNavbar] = useState(false);
  return (
    <div>
      <nav className="w-full bg-black fixed top-0 left-0 right-0 z-10">
        <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
          <div>
            <div className="flex items-center justify-between py-3 md:py-5 md:block">
              {/* LOGO */}
              <Link href="/">
                
			  <Image src={logo} width={130} height={130} className="rounded-full"/>
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
                      className="color-gray focus:border-none active:border-none"
                    />
                  )}
                </button>
              </div>
			  	
            </div>
			
          </div>
		  
          <div>
            <div
              className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
                navbar ? 'p-12 md:p-0 block' : 'hidden'
              }`}
            >
              <ul className="h-screen md:h-auto items-center justify-center md:flex ">
                <li className="pb-6 text-xl text-white py-2 md:px-6 text-center border-b-2 md:border-b-0  hover:bg-gray-600  border-gray-600  md:hover:text-gray-600 md:hover:bg-transparent">
                  <Link href="#about" onClick={() => setNavbar(!navbar)}>
                    About
                  </Link>
                </li>
                <li className="pb-6 text-xl text-white py-2 px-6 text-center  border-b-2 md:border-b-0  hover:bg-gray-600  border-gray-600  md:hover:text-gray-600 md:hover:bg-transparent">
                  <Link href="#blog" onClick={() => setNavbar(!navbar)}>
                    Blogs
                  </Link>
                </li>
                <li className="pb-6 text-xl text-white py-2 px-6 text-center  border-b-2 md:border-b-0  hover:bg-gray-600  border-gray-600  md:hover:text-gray-600 md:hover:bg-transparent">
                  <Link href="#contact" onClick={() => setNavbar(!navbar)}>
                    Contact
                  </Link>
                </li>
                <li className="pb-6 text-xl text-white py-2 px-6 text-center  border-b-2 md:border-b-0  hover:bg-gray-600  border-gray-600  md:hover:text-gray-600 md:hover:bg-transparent">
                  <Link href="#projects" onClick={() => setNavbar(!navbar)}>
                    Projects
                  </Link>
                </li>
				         
                <li className="pb-2 pt-2 mb-4 text-xl items-center rounded-fulln text-white py-2 px-6 text-center  border-b-2 md:border-b-0  bg-purple-600  border-purple-600 rounded-full md:hover:bg-purple-600  md:hover:text-gray-600 md:hover:bg-transparent">
				        <Wallet className="w-2/3"/>
				        </li>
              </ul>
			  
            </div>
			
  			</div>
			  
          </div>

      </nav>
    </div>
  );
}

