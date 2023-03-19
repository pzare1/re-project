import React from 'react'
import CustomForm from './CustomForm';

function Main() {
  const handleLogout = () => {
    localStorage.removeItem("token");
    window.location.reload();
  }
  return (
    <>
    <section  className='bg-gray-50'>
    <button onClick={handleLogout} className=' bg-blue-600 text-white text-md p-2 mx-auto items-center w-full'>Logout</button>
    <CustomForm/>
    </section>
    </>
  )
}

export default Main