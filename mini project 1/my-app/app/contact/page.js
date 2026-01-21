import React from 'react'

const Contact = () => {
  return (
    <div className='max-w-4xl mx-auto px-4 py-12'>
        <div className='text-center mb-12'>
            <h1 className='text-4xl font-boldtext-gray-900 mb-4'>Contact Us</h1>
            <p className='text-xl text-gray-600'>
                we'd love to hear from you. Send us the message and we will respond as soon as possible
            </p>
        </div>

        <div className='grid md:grid-cols-2 gap-12'>
            <div className='bg-white rounded-lg border-gray-200 shadow-md border p-8'>
                <h2 className='text-2xl font-semibold text-gray-900 mb-8'>Send ud a message</h2>
                <form className='space-y-6'>
                    <label htmlFor='name' className='block text-sm font-medium text-gray-700 mb-2'>
                        Full Name
                    </label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        />


                </form>
            </div>
        </div>
    </div>
  )
}

export default Contact