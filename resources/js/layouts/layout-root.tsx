import Toast from '@/components/toast'
import { ThemeProvider } from '@/providers/ThemeProvider'
import React, { PropsWithChildren } from 'react'
import { Toaster } from 'sonner'

const LayoutRoot = ({ children }: PropsWithChildren) => {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <div className='min-h-screen w-screen bg-muted/30 '>
        {children}
        <Toaster position="top-right" closeButton />
        <Toast />
      </div>
    </ThemeProvider>
  )
}

export default LayoutRoot