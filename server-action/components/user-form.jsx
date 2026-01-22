import React from 'react'
import createUser from "../actions";

const UserForm = () => {

  // async function createUser(fromData){
  //   "use server"
    
  //   const name = fromData.get("name")

  //   console.log("Create User", name)
  // }
  return (
    <form action={createUser}>
      <input name="name" placeholder="John Doe" />
      <button type="submit">Create</button>
    </form>
  )
}

export default UserForm
