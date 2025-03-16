import AuthTemplate from '@/components/AuthTemplate'
import React from 'react'

export default function layout({children}) {
  return (
    <div className='grid grid-cols-3'>
        <AuthTemplate/>
        <main className='col-span-2 p-20'>
        {children}
        </main>
    </div>
  )
}
