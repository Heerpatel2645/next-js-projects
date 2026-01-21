import { NextResponse } from "next/server";
import { headers } from "next/headers";

export async function GET(request){

    const headerList = await headers()
    const authHeader = headerList.get("Authorization")
    //Access request Headers
    // const requestHeaders = new Headers(request.headers);

    // const authHeader = requestHeaders.get("Authorization")

    console.log("Auth Header", authHeader)
    
    //return NextResponse.json({ success:true, data:"hello world from profile!"})

    // return new Response("<h1>Profile api data</h1>", {
    //     headers:{
    //         "Content-Type":"text/html",
    //         "X-Custom-Header":"Next.js Tutorial",
    //     }
    //})

    const response = NextResponse.json({message:"Hello with Headers"})

    response.headers.set("X-Powered-By", "Next.js 15");
    response.headers.set("Cache-Control", "no-store");

    return response
}