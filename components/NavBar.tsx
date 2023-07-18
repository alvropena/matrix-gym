"use client";
import Link from "next/link";
import * as React from "react";
import { NavLinks } from "@constant/index";
import { Dialog, Transition } from "@headlessui/react";

const Navbar = () => {
  let [isOpen, setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <nav className="flex w-full bg-black py-3 px-6">
      <div className="flex items-center justify-start w-1/2">
        <Link href="/" className="text-yellow-500 font-bold text-xl">
          MATRIX GYM
        </Link>
      </div>
      <div className="flex items-center justify-end w-1/2">
        {NavLinks.map((navLink, index) => (
          <Link
            key={index}
            href={navLink.href}
            className="mx-4 text-white border-white"
          >
            {navLink.key}
          </Link>
        ))}
        <button
          type="button"
          onClick={openModal}
          className="mx-4 text-white border-white border-2 px-5 py-2 rounded-xl hover:bg-gray-800"
        >
          Iniciar sesión
        </button>
        <button className="px-5 py-2 bg-white rounded-xl hover:bg-gray-200">
          ¡Empieza hoy!
        </button>
        <Transition appear show={isOpen} as={React.Fragment}>
          <Dialog
            as="div"
            className="fixed inset-0 z-10 overflow-y-auto"
            onClose={closeModal}
          >
            <div className="min-h-screen px-4 text-center">
              <Transition.Child
                as={React.Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <Dialog.Overlay className="fixed inset-0 bg-black bg-opacity-25" />
              </Transition.Child>

              <span
                className="inline-block h-screen align-middle"
                aria-hidden="true"
              >
                &#8203;
              </span>
              <Transition.Child
                as={React.Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <div className="inline-block w-full max-w-md p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl">
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-medium leading-6 text-gray-900"
                  >
                    Iniciar sesión
                  </Dialog.Title>
                  <div className="mt-4">
                    <form>
                      <div className="mb-4">
                        <label htmlFor="email" className="login_text">
                          Correo electrónico
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          className="login_button"
                        />
                      </div>
                      <div className="mb-4">
                        <label htmlFor="password" className="login_text">
                          Contraseña
                        </label>
                        <input
                          type="password"
                          id="password"
                          name="password"
                          className="login_button"
                        />
                      </div>
                      <div className="flex items-center justify-between">
                        <button
                          type="button"
                          className="inline-flex justify-center px-4 py-2 text-sm font-medium text-blue-900 bg-blue-100 border border-transparent rounded-md hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                          onClick={closeModal}
                        >
                          Iniciar sesión
                        </button>
                        <button
                          type="button"
                          className="text-sm text-blue-500 hover:underline"
                          onClick={closeModal}
                        >
                          ¿Olvidaste tu contraseña?
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </Transition.Child>
            </div>
          </Dialog>
        </Transition>
      </div>
    </nav>
  );
};

export default Navbar;
