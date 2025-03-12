import { ThemeProvider } from '@/providers/ThemeProvider'
import React, { PropsWithChildren } from 'react'
import { Toaster } from 'sonner'

const LayoutRoot = ({ children }: PropsWithChildren) => {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <div className='min-h-screen w-screen '>
        <div
          className="fixed inset-0 -z-10 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)]
            bg-[size:24px_24px]">
        </div>
        <div className="fixed -z-10 h-screen w-full bg-[radial-gradient(circle_800px_at_100px_100px,#9333ea0d,transparent)]">
        </div>
        <div className="fixed -z-10 h-screen w-full bg-[radial-gradient(circle_800px_at_80%_80%,#3b82f610,transparent)]"></div>
        {children}
        <Toaster position="top-right" closeButton />
      </div>
    </ThemeProvider>
  )
}

export default LayoutRoot