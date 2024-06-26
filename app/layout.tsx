'use client'
import type { Metadata } from "next";
import { Inter, Karla } from "next/font/google";
import "./globals.css";
import Sidebar from "@/components/sidebar";
import Header from "@/components/header";
import PageWrapper from "@/components/pagewrapper";

// const inter = Inter({ subsets: ["latin"] });
const karla = Karla({ 
  weight:["200","300","400","500","600","700","800"],
  subsets: ["latin"],
  variable:"--font-karla"
})



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  // const [toggleCollapse, setToggleCollapse] = useState(false)
  return (
    <html lang="en">
      <body className={karla.className}>
      <div className="flex min-h-screen">

      <Sidebar ></Sidebar>
      <Header />
      <PageWrapper>{children}</PageWrapper>
      </div>
      </body>
    </html>
  );
}
