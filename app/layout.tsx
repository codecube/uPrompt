import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { TemplateBuilderProvider } from '@/context/TemplateBuilderContext'
import { Header } from '@/components/Header'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'uPrompt - AI Prompt Builder',
  description: 'Build and manage AI prompts with ease',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.className} bg-background text-foreground`}>
        <TemplateBuilderProvider>
          <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex-grow">
              {children}
            </main>
          </div>
        </TemplateBuilderProvider>
      </body>
    </html>
  )
}

