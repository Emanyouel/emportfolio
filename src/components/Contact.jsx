import React from 'react'

const Contact = () => {
  return (
    <section id='contact' className="scroll-m-20 bg-white py-16">
    <div className='container mx-auto px-20 - flex flex-col items-center justify-center text-center
'>
      <form className='max-w-5xl '>
        <h3 className='text-2xl font-bold text'>Contact Form</h3>
        <label htmlFor="name" className="block text-gray-700 font-medium mb-2">Name:</label>
        <input type="text" id="name" name="name" required className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-sky-500"/>
        <br />
        <label htmlFor="email" className="block text-gray-700 font-medium mb-2">Email:</label>   
        <input type="email" id="email" name="email" required className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-sky-500"
/>
        <br />
        <label htmlFor="message" className="block text-gray-700 font-medium mb-2">Message:</label>
        <textarea id="message" name="message" required className="w-full border border-gray-300 rounded-md px-4 py-2 h-32 resize-none focus:outline-none focus:ring-2 focus:ring-sky-500"
></textarea>
        <br />
        <button type="submit" className="w-full bg-sky-600 text-white font-semibold py-2 px-4 rounded-md hover:bg-sky-700 transition"
>Submit</button>
      </form>
    </div>
    </section>
  )
}

export default Contact
