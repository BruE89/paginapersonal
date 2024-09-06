import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Bruno Estala - FullStack Developer",
  description: "Desarrollo Back-End y Front-End con las últimas tecnologías",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        { /* EDITAR ACA LA METADATA PARA EL LINK COMPARTIDO */ }
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
