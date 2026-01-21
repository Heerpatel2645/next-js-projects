import React from 'react'
import Link from 'next/link'

const Section = () => {
  return (
    <div>
        <h1>Section</h1>
        <Link href={"/admin"}>Go to Admin</Link>
    </div>
  )
}

export default Section