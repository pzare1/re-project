import React from 'react'

function Main() {
  const handleLogout = () => {
    localStorage.removeItem("token");
    window.location.reload();
  }
  return (
    <button onClick={handleLogout} className=' bg-red-600 text-white text-xl p-3 mx-auto items-center'>Logout</button>
  )
}

export default Main