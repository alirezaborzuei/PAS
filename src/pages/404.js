import React from "react";
import Head from "next/head";
import Image from 'next/image';
import NotFound from '@/Images/404.svg';
import { useRouter } from "next/router";

function CustomNotFound() {
  const router = useRouter()

  return (
    <div className="w-screen h-screen flex flex-col items-center text-center pt-10 ">
      <Head>
        <title>404</title>
      </Head>
      <Image src={NotFound} alt="" width={600} height={600} />
      <span className="mt-4 font-bold text-5xl md:text-7xl text-blue">Page not found</span>
      
    </div>
  );
}

export default CustomNotFound;
