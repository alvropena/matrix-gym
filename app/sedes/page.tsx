import React from "react";
import { Locations } from "@constant/index";
import Link from "next/link";
import Image from "next/image";

const Sedes = () => {
  return (
    <div className="flex flex-grow min-h-screen">
      These are all the locations available:
      <div>
        <ul className="flex xl:flex text-small gap-7 p-6">
          {Locations.map((location, key) => (
            <div key={key} className="flex flex-col">
              <p className="text-4xl p-3">{location.key}</p>
              <p className="text-2xl p-3">{location.address}</p>
              <Image
                src={location.photo}
                alt={location.key}
                width={500}
                height={500}
                className="rounded-xl object-contain"
              />
              <p className="text-xl p-3">{location.postcode}</p>
              <Link
                href={"/Hi"}
                className="bg-red-600 rounded-xl text-white text-xl items-center p-3"
              >
                ¡Empieza hoy!
              </Link>
            </div>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Sedes;
