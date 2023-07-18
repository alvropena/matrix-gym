import React from "react";
import { Locations } from "@constant/index";
import Link from "next/link";
import Image from "next/image";

const Sedes = () => {
  return (
    <div className="flex flex-grow min-h-screen px-20 pt-3">
      <div className="m-auto">
        <p className="py-4">¡Encuentra el gimnasio más cerca a ti!</p>
        <form>{/* Search form code here */}</form>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6 p-6">
          {Locations.map((location, key) => (
            <div key={key} className="relative">
              <Image
                src={location.photo}
                alt={location.key}
                width={300}
                height={300}
                className="rounded-xl object-cover"
              />
              <p className="absolute top-2 left-2 text-white font-bold p-2 text-xl ">
                {location.key}
              </p>
              <div className="flex flex-col mt-2">
                <p className="text-2xl">{location.address}</p>
                <p className="text-xl">{location.postcode}</p>
                <Link
                  href={"/Hi"}
                  className="bg-red-600 rounded-xl text-white text-xl items-center p-3 mt-2 flex justify-center"
                >
                  ¡Empieza hoy!
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sedes;
