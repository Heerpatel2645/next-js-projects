"use client"
import React from 'react'
import { useRouter } from 'next/navigation'

const Login = () => {
    const router = useRouter()

    const handleClick = ()=>{
        router.replace("/products")
    }
  return (
    <div>
        <button onClick={handleClick}>Products Page</button>
    </div>
  )
}

export default Login