import image from "@/public/business_chart.svg";
import { ArrowRightIcon } from '@heroicons/react/24/outline';
import Image from 'next/image';
import Link from 'next/link';
import { AcmeLogo_Primary } from "./ui/acme-logo";
import { lusitana } from "./ui/fonts";

export default function Page() {
  return (
    <main className="flex min-h-screen flex-col p-6">
      {/* <div className="flex h-10 shrink-0 items-end rounded-lg bg-grey p-4 md:h-32">
    </div> */}
        <AcmeLogo_Primary /> 
    
      <div className="mt-4 flex grow flex-col gap-4 md:flex-row">
        <div className="flex flex-col justify-center gap-6 rounded-lg bg-gray-50 px-6 py-10 md:w-2/5 md:px-20">

            <h1 className="text-6xl  font-black  tracking-widest">Welcome to Finzy.</h1> 

          <p className={`text-xl marker:font-thin	 text-gray-500 md:text-2xl md:leading-normal ${lusitana.className}`}>
           
        Empower Your Business with Finzy: Streamline Invoicing, Boost Sales, and Effortlessly Manage Your Operation s.
          </p>
          <Link
            href="/login"
            className="flex items-center gap-5 self-start rounded-lg  px-6 py-3 text-lg font-medium transition-colors bg-green-500 text-white hover:bg-green-400 hover:text-white duration-200"
          >
            <span className="text-white ">Log in</span> <ArrowRightIcon className="text-white bg-white w-5 md:w-6 p-1 "  />
          </Link>
        </div>
        <div className="flex items-center justify-center  md:w-3/5 md:px-28 md:py-12">
          {/* Add Hero Images Here */}
          <Image src={image } alt="landing page image" 
          // fill={true}
          // object-fit="contain"
              width={1000}
        height={760}
            //  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          {/* <Image
        src="/hero-desktop.png"
        width={1000}
        height={760}
        className="hidden md:block"
        alt="Screenshots of the dashboard project showing desktop version"
      /> */}
        </div>
      </div>
    </main>
  );
}
