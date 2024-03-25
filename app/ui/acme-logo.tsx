import { lusitana } from '@/app/ui/fonts';
import { GlobeAltIcon } from '@heroicons/react/24/outline';

export function AcmeLogo_Primary() {
  return (
    <div
      className={`${lusitana.className} flex flex-row items-center leading-none text-white font-serif text-sm font-thin  max-w-fit 	px-2 rounded-2xl`}
    >
      <GlobeAltIcon className="h-5 w-7 rounded-lg text-white" />
      <p className="text-[20px] text-green-600">Finzy</p>
    </div>
  );
}


export  function AcmeLogo_Secondary() {
  return (
    <div
      className={`${lusitana.className} flex flex-row items-center leading-none text-white gap-3`}
    >
      <GlobeAltIcon className="h-12 w-12  gap-5 bg-white rounded-lg" />
      <p className="text-[44px] text-white">Finzy</p>
    </div>
  );
}

