import { MicrophoneIcon, SearchIcon, XIcon } from "@heroicons/react/solid";
import Image from "next/image";
import { useRouter } from "next/router";
import React, { useRef } from "react";
import { Avatar } from "./Avatar";
import HeaderOptions from "./HeaderOptions";

function Header() {
  const router = useRouter();
  const searchInputRef = useRef(null);

  const search = (e) => {
    e.preventDefault();
    const term = searchInputRef.current.value;
    if (!term) return;

    router.push(`/search?term=${term}`);
  };

  return (
    <header className="sticky top-0 bg-white">
      <div className="flex items-center p-6 w-full">
        <Image
          onClick={() => router.push("/")}
          src="https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg"
          alt="Google-logo"
          width={120}
          height={40}
          className="cursor-pointer"
        />
        <form
          className="flex flex-grow border ml-10 mr-5 border-gray-200 rounded-full
       max-w-3xl px-6 py-3 items-center shadow-lg"
        >
          <input
            ref={searchInputRef}
            type="text"
            className="flex-grow focus:outline-none w-full"
            onChange={(e) => e.preventDefault()}
            value={router.query.term}
          />
          <XIcon
            className="h-7 text-gray-500 sm:mr-3 cursor-pointer
           transition duration-100 hover:scale-125"
            onClick={() => (searchInputRef.current.value = "")}
          />
          <MicrophoneIcon
            className="h-6 mr-3 hidden sm:inline-flex text-blue-500
         border-l-2 border-gray-300 pl-4"
          />
          <SearchIcon
            className="h-6 mr-3 hidden sm:inline-flex
         text-blue-500 "
          />
          <button type="submit" hidden onClick={search}>
            Search
          </button>
        </form>
        <Avatar
          url="https://i.ibb.co/yN3BSLJ/IMG-20210315-171207.jpg"
          className="ml-auto"
        />
      </div>
      {/* Header Options */}
      <HeaderOptions />
    </header>
  );
}

export default Header;
