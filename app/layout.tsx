import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { Navigation } from "@/components/navigation"
import { Toaster } from "sonner"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Barry Paul",
  description: "Personal portfolio of Barry Paul, a software engineer, student, and problem solver.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={
        `${inter.className} bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-purple-900`
      }>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
          <Navigation />
          <main>{children}</main>
          <footer className="mt-16">
        <div className="w-32 mx-auto">
          <hr className="border-t border-black dark:border-white mb-6" />
        </div>
        <div className="text-center text-black dark:text-white text-sm pb-8 font-mono">
          made by barry
        </div>
      </footer>
          <Toaster richColors position="top-center" />
        </ThemeProvider>
      </body>
    </html>
  )
}
