// app/layout.js or wherever your RootLayout is defined
import './globals.css';
import { raleway, lato } from '../style/fonts.js';

export default function RootLayout({ children }) {
  return (
    <>
      <html lang="en" className={`${raleway.variable} ${lato.variable}`}>
        <body>{children}</body>
      </html>
    </>
  );
}
