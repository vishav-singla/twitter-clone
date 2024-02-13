"use client";

import { BsBell, BsBookmark, BsEnvelope, BsTwitter } from "react-icons/bs";
import React, { useCallback } from "react";
import { BiHash, BiHomeCircle, BiUser } from "react-icons/bi";
import FeedCard from "./components/FeedCard";
import { CredentialResponse, GoogleLogin } from "@react-oauth/google";


interface TwitterSidebarButton {
    title: String;
    icon: React.ReactNode;
}

const SidebarMenuItems: TwitterSidebarButton[] = [
    {
        title: "Home",
        icon: <BiHomeCircle />,
    },
    {
      title: "Explore",
      icon: <BiHash />
    },
    {
      title: "Notifications",
      icon: <BsBell />
    },
    {
      title: "Messages",
      icon: <BsEnvelope />
    },
    {
      title: "Bookmarks",
      icon: <BsBookmark />
    },
    {
      title: "Profile",
      icon: <BiUser />
    },
];

export default function Home() {

  const handleLoginWithGoogle = useCallback((cred: CredentialResponse) => {

  }, [])


    return (
        <div className="">
            <div className="h-screen w-screen grid grid-cols-12 pr-56 pl-36">
                <div className="col-span-3 pb-8 px-4 hidden md:block"> {/* Hide the sidebar on small screens */}
                    <div className="mt-1 text-4xl h-fit w-fit hover:bg-gray-800 rounded-full p-4 cursor-pointer transition-all">
                        <BsTwitter className="" />
                    </div>
                    <div className="mt-4 text-2xl font-semibold pr-4">  
                      <ul>
                        {SidebarMenuItems.map((item, index) => (
                            <li className="flex justify-start items-center gap-4 mt-2 hover:bg-gray-800 rounded-full pl-5 px-6 py-2 w-fit cursor-pointer" key={index}>
                                <span>{item.icon}</span>
                                <span>{item.title}</span>
                            </li>
                        ))}
                      </ul>
                      <div className="">
                      <button className="bg-[#1d9bf0] text-lg mt-5 p-4 rounded-full w-full font-semibold">Tweet</button>
                      </div>
                    </div>
                </div>
                <div className="col-span-6 border-r-[1px] border-l-[1px] border-gray-700 h-screen overflow-y-auto"> {/* Remove the scrollbars */}
                  <div className="grid grid-cols-1 gap-4 p-4">
                    <FeedCard/>
                    <FeedCard/>
                    <FeedCard/>
                    <FeedCard/>
                    <FeedCard/>
                    <FeedCard/>
                    <FeedCard/>
                    <FeedCard/>
                    <FeedCard/>
                    <FeedCard/>
                    <FeedCard/>
                    <FeedCard/>
                    <FeedCard/>
                  </div>
                </div>
                <div className="col-span-3">
                  <div className="h-[200px]">
                  <GoogleLogin onSuccess={(cred) => console.log(cred)}/>
                  </div>
                </div>
            </div>
        </div>
    );
}

