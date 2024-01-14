import type { Metadata } from 'next'
import { Montserrat } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/components/theme-provider'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const inter = Montserrat({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'D-AFYA',
  description: 'Your health, your data, your control',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider
        attribute="class"
        defaultTheme="system"
        enableSystem
        disableTransitionOnChange
        >
          <Navbar />
        {children}
        <Footer  />
        </ThemeProvider>
        </body>
    </html>
  )
}
