import React from 'react'
import Link from 'next/Link'

function Header() {
  return (
    <header className='w-full p-4  flex '>
        <Link href='/'>
            <a className="text-3xl text-bold text-left text-indigo-700" >
                Travel App
            </a>
        </Link>
    </header>
  )
}

export default Header