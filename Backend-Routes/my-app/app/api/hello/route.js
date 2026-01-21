import { NextResponse } from 'next/server';


export const users = [
  {
    id: 1,
    name: "John Doe",
    email: "johndoe@gmail.com",
    age: 25
  },
  {
    id: 3,
    name: "Bob Johnson",
    email: "bobjohnson@gmail.com",
    age: 28
  },
  {
    id: 2,
    name: "Jane Smith",
    email: "janesmith@gmail.com",
    age: 30
  }
];

export async function GET(request) {
    try {

        const searchParams = request.nextUrl.searchParams;

        const name = searchParams.get("name")
        const age = searchParams.get("age")
        
        let filteredUsers = users;

        if(age){
          filteredUsers = filteredUsers.filter((user)=>user.age === Number(age))
        }

        if(name){
          filteredUsers = filteredUsers.filter((user)=>user.name.toLowerCase().includes(name.toLowerCase()))
        }
        return NextResponse.json({
          success: true,
          data: filteredUsers,
          total: filteredUsers.length
        });


        return NextResponse.json({
            success:true,
            data:users,
            total:users.length
        })
    } catch (error) {
        return NextResponse.json({
            success:false , error:"Failed to get users",
            
        },
        {status:500}
    )
    }
}