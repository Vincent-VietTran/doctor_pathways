import type { Metadata } from 'next'
import '../styles/globals.css'

export const metadata: Metadata = {
  title: 'Doctor Pathways - Medical Specialty Training in Australia',
  description: 'Navigate your journey from medical school to specialty training in Australia. Discover pathways, requirements, and application processes for medical specialties.',
  openGraph: {
    title: 'Doctor Pathways',
    description: 'Your guide to medical specialty training in Australia',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
