import React from 'react'
import { Roboto, Poppins, Jockey_One } from 'next/font/google'

const roboto = Roboto({
    weight:["100", "200", "300", "400", "500","600","700","800","900"],
    subsets:["latin"]
})

const poppins = Poppins({
    weight:["100", "200", "300", "400", "500","600","700","800","900"],
    subsets:["latin"]
})

const jockey_one = Jockey_One({
    weight:[ "400"],
    subsets:["latin"]
})

const FontExample = () => {
  return (
    <div>
        <h1 className={`text-4xl ${jockey_one.className}`}>
  lorem dcbh hiudi by d78eydhej huehddn h7ed7ey7 bdun
</h1>


        <p ClassName={`text-4xl ${poppins.className}`}>lorem bhd hdjd ndjd mnjdhd mdnchduchd dndhuhdhdgd beghgvd dftfgybd ycgdgcbd dcygycgdhnddb7gbdh b7egbdbgyegb  beb bey h ctbjnh8n niuhr ygeeb</p>
    </div>
  )
}

export default FontExample