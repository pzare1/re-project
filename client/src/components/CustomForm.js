import React from 'react'
import { AiOutlinePlus } from 'react-icons/ai';

function CustomForm() {
  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log("sa")
  }
  return (
    <section className="bg-gray-50 dark:bg-gray-900">
    <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
      <h2 className="flex items-center mb-6 text-2xl font-bold text-blue-600">
        Memory App
      </h2>
      <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0">
        <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
          <form className="space-y-4 md:space-y-6" onSubmit={handleFormSubmit}>
            <div>
              <label
                htmlFor="task"
                className="block mb-2 text-sm font-medium text-gray-900 "
              >
                Add New Task
              </label>
              <div className=' flex justify-center'>
              <input
                type="text"
                name="task"
                id="task"
                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-md rounded-tr-none rounded-br-none focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
                placeholder="buy some fruits ..."
                required=""
              />
              <button className=' bg-blue-600 text-white p-2 rounded-md rounded-tl-none rounded-bl-none'><AiOutlinePlus/></button>
             </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>
  )
}

export default CustomForm