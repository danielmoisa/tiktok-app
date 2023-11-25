import './globals.css'

import Navbar from './Navbar'
import Sidebar from '../components/UI/Sidebar'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="snap-y snap-mandatory">

      <head />
      <body>
        <Navbar />
        <div className='flex flex-col'>
          <Sidebar />
          <div className="px-4 py-12 pt-0 max-w-[820px] mx-auto sm:pt-32">
            {children}
          </div>
        </div>
      </body>
    </html>
  )
}
