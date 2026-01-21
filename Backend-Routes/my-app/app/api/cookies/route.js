import { NextResponse } from "next/server";
import { cookies } from "next/headers";

export async function GET(request){

    // const theme = request.cookies.get("theme")

    const cookieStore = await cookies(); 
    //const resultPerPage = cookieStore.get("resultsPerPage"); 

    //cookieStore.set("score", "100")
    cookieStore.delete("score")

    //console.log("cookies", resultPerPage); 

    // return new Response("Setting cookies", {
    //   headers: {
    //     //"Set-Cookie": "theme=dark"
    //     "Set-Cookie": "resultsPerPage=20"
    //   }
    // });

    return NextResponse.json({message:"cookie deleted!"})
}
