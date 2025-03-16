import Link from 'next/link'
import React from 'react'

export default function AuthTemplate() {
  return (
    <div className='flex flex-col gap-10 p-10 pt-20'>
        <div>
            <h3 className='text-2xl mb-8 font-medium'><Link href='/'>Logo</Link></h3>
            <span>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat amet doloremque fugit, consequatur nesciunt at reiciendis tenetur commodi nulla incidunt odit illo dolorem corrupti voluptate quaerat necessitatibus quisquam quas alias.
            </span>
        </div>
        <div className='size-40 bg-slate-300'>
          
        </div>
    </div>
  )
}
