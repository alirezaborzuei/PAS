import React from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import Image from 'next/image';
import ServerErr from '@/Images/500.svg';

function CustomNotFound() {
  const router = useRouter()

  return (
    <div className="w-screen h-screen flex flex-col items-center text-center pt-10">
      <Head>
        <title>500</title>
      </Head>
      <Image src={ServerErr} alt="" width={600} height={600} />
      <span className="mt-4 font-bold text-3xl md:text-7xl text-blue">Error Number 500</span>

      <span className="mt-4 font-bold text-3xl md:text-7xl text-blue">Internal Server Error</span>

    </div>
  );
}

export default CustomNotFound;
