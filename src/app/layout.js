import './globals.css'
import {raleway} from './fonts.js'

export default function RootLayout({ children }) {
  return (
    <>
      <html lang="en" className={raleway.className}>
        <body>{children}</body>
      </html>
    </>
  )
}