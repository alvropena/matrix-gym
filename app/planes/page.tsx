import React from "react";
import { Subscriptions } from "@constant/index";
import Link from "next/link";

const Planes = () => {
  return (
    <div className="flex flex-grow min-h-screen px-20 ">
      <p className="">Elige el plan que más se ajuste a tus necesidades:</p>
      <ul className="flex text-small gap-7">
        {Subscriptions.map((subscription, key) => (
          <li key={key} className="flex flex-col">
            <p className="text-4xl">{subscription.key}</p>
            <p className="text-2xl">{subscription.body}</p>
            <Link href={subscription.href} className="text-xl">
              Precio: {subscription.price}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Planes;
