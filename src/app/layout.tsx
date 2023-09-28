import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import store from '@/redux/store';
import { Providers } from './provider';
import SideMenu from '@/components/SideMenu/SideMenu';

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          <div className="flex flex-row min-h-screen w-screen bg-neutral-600 " >
          <SideMenu/>
          {children}
          </div>
      </Providers>
      </body>
    </html>
  )
}
