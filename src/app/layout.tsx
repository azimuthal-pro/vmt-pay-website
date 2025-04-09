import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import AppWrapper from "../../components/AppWrapper";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "VmtPAY",
  description: "A Fintech App for Fast Transactions",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <AppWrapper>{children}</AppWrapper>



      </body>

    </html>
  );
}


// 'use client';

// import type { Metadata } from "next";
// import { Geist, Geist_Mono } from "next/font/google";
// import "./globals.css";
// import Navbar from "../../components/Navbar";
// import { usePathname } from 'next/navigation';

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

// export const metadata: Metadata = {
//   title: "VmtPAY",
//   description: "Travel UI/UX App for Camping",
// };

// export default function RootLayout({
//   children,
// }: Readonly<{
//   children: React.ReactNode;
// }>) {
//   const pathname = usePathname();
//   const hideNavbar = pathname === "/signup"; // Add more routes if needed

//   return (
//     <html lang="en">
//       <body className={`${geistSans.variable} ${geistMono.variable}`}>
//         {!hideNavbar && <Navbar />}
//         <main style={{ paddingTop: !hideNavbar ? "80px" : "0px" }} className="relative overflow-hidden">
//           {children}
//         </main>
//       </body>
//     </html>
//   );
// }
