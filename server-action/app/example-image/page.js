import React from 'react'
import Image from 'next/image'

const ExampleImage = () => {
  return (
    <div>
        <Image className='flex flex-col items-center justify-center h-screen'
            src={"vercel.svg"}
            alt={"Vercel Logo"}
            width={100}
            height={100}
        />
    </div>
  )
}

export default ExampleImage