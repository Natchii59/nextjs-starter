'use client'

import { Button, toast } from '@/components/ui'

export default function Page() {
  return (
    <main className='flex h-screen w-screen flex-col items-center justify-center gap-4'>
      <h1 className='font-heading text-4xl'>Next.js Starter</h1>
      <Button
        onClick={() =>
          toast({
            title: 'Hello World',
            description: 'This is a toast'
          })
        }
      >
        Show Toast
      </Button>
    </main>
  )
}
