
import {Providers} from "./providers";
import "./globals.css";



export const metadata = {
  title: "GraveYard",
  description: "A Social Media For Dead Ambitions",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className='dark'>
      <body>
      <Providers>
        {children}
        </Providers>
        </body>
    </html>
  );
}
