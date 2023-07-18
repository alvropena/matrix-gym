import React from "react";
import { Subscriptions } from "@constant/index";
import Link from "next/link";

const Planes = () => {
  return (
    <div>
      This is where the blog will be located.
      <div>
        <ul className="xl:flex hidden text-small gap-7">
          {Subscriptions.map((subscription, key) => (
            <div key={key} className="flex flex-col">
              <p className="text-4xl">{subscription.key}</p>
              <p className="text-2xl">{subscription.body}</p>
              <Link href={subscription.href} className="text-xl">
                Precio: {subscription.price}
              </Link>
            </div>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Planes;
