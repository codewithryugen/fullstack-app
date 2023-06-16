import Navbar from '@/components/navbar/Navbar'
import './globals.css'
import {Poppins} from 'next/font/google'
import Footer from '@/components/footer/Footer'
import { ThemeProvider } from '../context/ThemeContext';
import AuthProvider from '@/components/AuthProvider/AuthProvider';

const poppins = Poppins({ weight: ['100','200','300','400','500','600','700','800','900'],subsets:['latin']});

export const metadata = {
  title: 'My portofolio ',
  description: 'learn nextjs',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.className}>
          <ThemeProvider>
            <AuthProvider>
              <div className="container">
                <Navbar/>
                {children}
                <Footer/>
              </div>
            </AuthProvider>
          </ThemeProvider>
        </body>
    </html>
  )
}
