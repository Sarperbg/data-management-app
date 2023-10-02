import { Link } from "react-router-dom";
import { AiOutlineHome } from "react-icons/ai"
import { BsDatabaseCheck } from "react-icons/bs"
import { ImExit } from "react-icons/im"
import { useContext, useState } from "react";
import FirebaseContext from '../../../context/FirebaseContext'
import { MdDarkMode } from "react-icons/md";

const SidebarComponents = () => {

  const { handleLogout, changeTheme, user } = useContext(FirebaseContext)


  return (
    <div className="flex flex-col h-screen w-1/6 bg-gray-700 
     text-white min-w-fit p-4 transition-all duration-300 dark:bg-black dark:text-white">

      <div className='flex flex-col justify-center items-center'>
        <img src='https://avatars.githubusercontent.com/u/47990987?v=4' alt='test' className='w-40 h-40 rounded-xl' />
        <h3 className='mt-8 text-xl text-center whitespace-nowrap'>Front End Developer</h3>
      <div className="flex flex-col justify-center items-center text-center text-sm w-[50%]">Welcome : <h1>{user.email}</h1></div>
      </div>


      <div className='flex justify-center items-center mt-4'>
        <ul className='flex flex-col gap-y-4'>
          <li className="flex justify-between gap-x-4 items-center p-4 border-gray border-[1px]  hover:bg-gray-600 rounded-xl">
            <AiOutlineHome size={24} className='flex items-center justify-center' />
            <Link to="/homepage" className="text-xl">HomePage</Link>
          </li>
          <li className="flex justify-between gap-x-4 items-center p-4 border-gray border-[1px]  hover:bg-gray-600 rounded-xl">
            <BsDatabaseCheck size={24} className='flex items-center justify-center' />
            <Link to="/table-page" className="text-xl">Table Page</Link>
          </li>

          <li className="flex justify-between items-center p-4 border-gray border-[1px]  hover:bg-gray-600 rounded-xl mt-16">
            <ImExit size={24} className='flex items-center justify-center' />
            <button
              className="text-xl"
              onClick={(e) => {
                e.preventDefault()
                handleLogout()
              }}>
              Log Out
            </button>

          </li>
          <li className="flex justify-between items-center p-4 border-gray border-[1px]  hover:bg-gray-600 rounded-xl mt-8">
            <MdDarkMode size={32} className="text-white" />
            <button
              onClick={changeTheme}
              className="text-white text-xl ">Dark Mode</button>
          </li>
        </ul>
      </div>

    </div>
  )
}

export default SidebarComponents
