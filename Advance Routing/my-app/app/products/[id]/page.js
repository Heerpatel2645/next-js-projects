import React from 'react'

const Page = async ({params}) => {
  const resolvedparams = await params
  return (
    <div>Page {resolvedparams.id}</div>
  )
}

export default Page