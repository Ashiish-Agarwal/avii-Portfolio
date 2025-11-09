import React from 'react'
import Image from 'next/image'

const Certificates = () => {




  return (
    <div className=' h-screen w-full flex flex-col items-center justify-center '>Certificates

      <Image className='border-2 border-black p-2  rounded-md  bg-zinc-500/10 ' src="/isroCertificate.png" alt="certificate" width={500} height={500}/>
    </div>
  )
}

export default Certificates