import Head from "next/head";
import { Avatar } from "../components/Avatar";
import { ViewGridIcon, MicrophoneIcon } from "@heroicons/react/solid";
import { SearchIcon } from "@heroicons/react/outline";
import Image from "next/image";
import Footer from "../components/Footer";
import { useRef } from "react";
import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();
  const searchInputRef = useRef(null);

  const search = (e) => {
    e.preventDefault();
    const term = searchInputRef.current.value;
    if (!term) return;
    router.push(`/search?term=${term}`);
    
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <Head>
        <title>Google</title>
      </Head>
      <header className="flex w-full p-5 justify-between text-gray-700 text-sm">
        <div className="flex space-x-4 items-center absolute right-8 top-3  w-fit">
          {/* right */}
          <p className="link">Gmail</p>
          <p className="link">Images</p>
          {/* icon */}
          <ViewGridIcon className="h-10 w-10 p-2 rounded-full 
          cursor-pointer hover:bg-gray-100" />
          {/* avatar */}
          <Avatar url="https://i.ibb.co/yN3BSLJ/IMG-20210315-171207.jpg" />
        </div>
      </header>

      <form className="flex flex-col items-center mt-44 flex-grow w-4/5">
        <Image
          src="https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg"
          alt="Google-logo"
          width={300}
          height={100}
        />
        <div className="flex w-full hover:shadow-lg focus-within:shadow-lg border border-gray-200  mt-5 max-w-md rounded-full px-5 py-3 items-center sm:max-w-xl lg:max-w-2xl">
          <SearchIcon className="h-5 mr-3 text-gray-500" />
          <input
            type="text"
            ref={searchInputRef}
            className="focus:outline-none flex-grow"
          />
          <MicrophoneIcon className="h-5  text-gray-500" />
        </div>
        <div className="flex flex-col space-y-2 justify-center mt-8 w-1/2 sm:space-y-0 sm:flex-row sm:space-x-2">
          <button className="btn" onClick={search}>
            Google Search
          </button>
          <button className="btn" onClick={search}>
            I&apos;m Feeling Lucky
          </button>
        </div>
      </form>
      <Footer />
    </div>
  );
}
