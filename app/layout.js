import {  Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import Header from "@/components/header";
import { ClerkProvider } from "@clerk/nextjs";
import { dark } from "@clerk/themes";
import { Toaster } from "sonner";

const inter = Inter({
  subsets: ["latin"],
});

export const metadata = {
  title: " MEDIMEET - Doctors Online Appointment App",
  description: "Book your appointment with doctors online",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider appearance={{
      baseTheme: dark,
    }}>
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.className}`}
      >
       

         <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
            {/*header */}
            <Header/>

        <main className="min-h-screen">
              {children}
        </main>
        
        <Toaster richColors/>
        {/* footer */}
        <footer>
          <div className="bg-gray-800 text-white text-center py-4">
            <p>&copy; {new Date().getFullYear()} MEDIMEET Doctors Online Appointment App</p>
            <p>All rights reserved.</p>
          </div>
        </footer>

          </ThemeProvider>
      </body>
    </html>
    </ClerkProvider>
  );
}
