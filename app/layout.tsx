import "./globals.css";
import type { Metadata } from "next";

import NavBar from "@components/NavBar";
import Footer from "@components/Footer";

export const metadata: Metadata = {
  title: "Matrix Gym",
  description: "Entrena en el mejor gimnasio del Perú",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen">
        <NavBar />
        <main className="flex-grow">{children}</main>
        <Footer />
        <div className="fixed bottom-0 w-full bg-yellow-500 text-black p-6 flex items-center justify-between z-50">
          <div>
          <span className="font-bold">¡Empieza a entrenar hoy!</span>
          <span className="ml-1">Aprovecha nuestras promociones.</span>
          </div>
          <button
            type="button"
            // onClick={() => {}}
            className="bg-black text-yellow-500 px-4 py-2 rounded-md"
          >
            Matricularme
          </button>
        </div>
      </body>
    </html>
  );
}
