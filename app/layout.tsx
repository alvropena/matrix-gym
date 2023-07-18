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
      <body>
        <NavBar />
        <main>{children}</main>
        <Footer />
        <div className="fixed bottom-0 w-full bg-yellow-500 text-black text-center p-6 ">
          ¡Empieza a entrenar hoy! Aprovecha nuestras promociones
          <button>
            <p>Matricularme</p>
          </button>
        </div>
      </body>
    </html>
  );
}
