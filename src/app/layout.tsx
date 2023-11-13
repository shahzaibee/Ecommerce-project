"use client";

import { theme } from "@/theme";
import { CacheProvider } from "@chakra-ui/next-js";
import { Box, ChakraProvider } from "@chakra-ui/react";
import Navbar from "@src/components/Navbar/navbar";

// import type { Metadata } from 'next'
// import { Inter } from 'next/font/google'
// import './globals.css'

// const inter = Inter({ subsets: ['latin'] })

// export const metadata: Metadata = {
//   title: 'MS BUY',
//   description: 'Online shopping made easy',
// }

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <title>MS BUY 2</title>
        <meta title="description" content="Buy online anything"></meta>
        <link
          rel="icon"
          href="shopping_cart.png"
          type="image/png"
          sizes="32x32"
        />
      </head>
      <body>
        <CacheProvider>
          <ChakraProvider theme={theme}>
            <Navbar/>
            {children}
            </ChakraProvider>
        </CacheProvider>
      </body>
    </html>
  );
}
