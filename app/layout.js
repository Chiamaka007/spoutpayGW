import Head from "./head";
import Providers from "./redux/provider";
import "./styles/globals.css";
import { Varela_Round } from "next/font/google";

const varela = Varela_Round({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "Spoutpay",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head />
      <body className={varela.className} suppressHydrationWarning={true}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
