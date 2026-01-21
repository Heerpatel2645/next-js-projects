import React from "react";


const page = async() => {

  const response = await fetch("http://localhost:3000/api/timer", {
    //cache:"no-cache" ,
    cache:"force-cache" ,
    next:{
      revalidate:3600,
      tags:["timer"]
    }
  });
  const data = await response.json()
  return (
    <div>
      <h1>Next.js Response ( default )</h1>
      <p>Time: {data.readable}</p>
      <p>Request Id: {data.requestId}</p>
    </div>
  )
}

export default page