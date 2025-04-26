'use client';
import React from 'react';
import { usePathname } from 'next/navigation';
import Navbar from '../../components/Navbar'; 

const Layout = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname();

  // Define paths where you want to HIDE the Navbar
  const hideNavbarPaths = ['/login', '/signup', '/forgotPassword', '/resetPassword'];

  const shouldShowNavbar = !hideNavbarPaths.includes(pathname);

  return (

    <html lang='en'>
      <body>
        {shouldShowNavbar && <Navbar />}
        <main>{children}</main>
      </body>
    </html>

  );
};

export default Layout;



























// import type { Metadata } from "next";
// import { Geist, Geist_Mono } from "next/font/google";
// import "./globals.css";
// import AppWrapper from "../../components/AppWrapper";

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

// export const metadata: Metadata = {
//   title: "VMTpay",
//   description: "A Fintech App for Fast Transactions",
// };

// export default function RootLayout({
//   children,
// }: Readonly<{
//   children: React.ReactNode;
// }>) {
//   return (
//     <html lang="en">
//       <body className={`${geistSans.variable} ${geistMono.variable}`}>
//         <AppWrapper>{children}</AppWrapper>



//       </body>

//     </html>
//   );
// }


