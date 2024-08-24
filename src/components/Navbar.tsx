import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <div className='flex gap-5 px-8 justify-between w-full border border-blue-300'>
      <Link href={"/"}>Home</Link>
      <Link href={"/todo"}>Todo</Link>
    </div>
  )
}

export default Navbar