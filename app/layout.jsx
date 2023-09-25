import '@radix-ui/themes/styles.css';
import './globals.css'
import { Inter } from 'next/font/google'
import { Theme } from '@radix-ui/themes'
import { ClerkProvider } from '@clerk/nextjs';
import { dark } from "@clerk/themes";
import Navbar from './components/Navbar';

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Design-UI',
  description: 'Created by Alabere Using Radix-ui Theme',
}

export default function RootLayout({ children }) {
  return (
    <ClerkProvider appearance={{
      baseTheme: dark,
    }}>
      <html lang="en">
        <body className={inter.className}>
          <Theme>
            <Navbar />
            {children}
          </Theme>
        </body>
      </html>
    </ClerkProvider>
  )
}
