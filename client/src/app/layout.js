import './globals.css'
import { Inter } from 'next/font/google'
import Navbar from '../../components/Navbar'
import 'bootstrap/dist/css/bootstrap.css'
import Footer from '../../components/Footer'



const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Nexentis',
  description: 'Development Agency',
}

export default function RootLayout({ children }) {

  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        {children}
        <Footer/>
        </body>
    </html>
  )
}
