import './globals.css'

import Link from 'next/link'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

const links = [
  { href: '/', label: 'Home' },
  { href: '/docs', label: 'Docs' },
  { href: '/todos', label: 'Todos' },
]

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">

      <body className={inter.className}>


        <header className=' bg-gray-200 flex flex-col items-center justify-center'>


          <nav className='justify-center items-center m-2 p-2'>
            <h1>Welcome to To-Do Application</h1>
            <ul className='flex items-center'>
              {links.map((link) => (
                <li className='m-2 p-2' key={link.href}>
                  <Link href={link.href}>{link.label}</Link>
                </li>
              ))}
            </ul>
          </nav>


        </header>


        <main>{children}</main>


      </body>
    </html>
  )
}
