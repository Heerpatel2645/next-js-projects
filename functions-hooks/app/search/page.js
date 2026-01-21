"use client"
import React from 'react'
import { useSearchParams } from 'next/navigation'

const SearchPage = () => {

    const searchaParams = useSearchParams()

    const query = searchaParams.get("q")
    const category = searchaParams.get("category")
    const page = searchaParams.get("page")

    const allparams = Array.from(searchaParams.entries())

    console.log(allparams)
  return (
    <div>
        <h1>Search Result for: {query}</h1>

        <p>Category: {category}</p>
        <p>Page: {page}</p>
    </div>
  )
}

export default SearchPage