const Page = async ({ params }) => {
  const { slug } = await params

  return (
    <div>
      <h1>Welcome to Docs</h1>
        {slug?.join('/')}
    </div>
  )
}

export default Page
