"use client"
import React from 'react'

const Form = () => {

    const [state, formAction] = useFormState(createUser , {})
  return (
    <form action={formAction}>
        <input name="email" placeholder="JohnDoe@gmail.com" />
      <button type="submit">Submit</button>
      {state.error && <p>{state.error}</p>}
    </form>>
  )
}

export default Form