import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import FirebaseContext from '../../../context/FirebaseContext'
import background from '../../../assets/images/bg.jpg'
import 'react-toastify/dist/ReactToastify.css';


const Login = () => {
  const navigate = useNavigate();
  const { login } = useContext(FirebaseContext)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };
  return (

      <div className="flex justify-center items-center bg-cover bg-center h-screen w-screen"
        style={{ backgroundImage: `url(${background})` }}>
        <div className='flex justify-center w-[600px] h-[600px] items-center'>
          <form className=''>
            <div className='flex flex-col gap-y-8'>
              <h1 className='text-4xl font-bold text-black -tracking-tighter text-center'>Login Form Example</h1>
              <div className='flex justify-center items-center gap-x-4'>
                <button className='text-2xl font-semibold text-black -tracking-tighter text-center'>Don't Have an account ?</button>

                <button
                  className='text-2xl font-semibold -tracking-tighter text-center text-green-800'
                  onClick={(e) => {
                    e.preventDefault()
                    navigate('/auth/register')
                  }}>
                  Sign Up
                </button>
              </div>

            </div>
            <div className='flex flex-col justify-center items-center mt-4'>
              <input
                placeholder='Email'
                type='text'
                autoComplete='off'
                onChange={(e) => setEmail(e.target.value)}
                className='w-[90%] h-12 rounded-3xl p-2 mt-4 bg-transparent/20 outline-none placeholder-white pl-4'
              />
              <input
                placeholder='Password'
                onChange={(e) => setPassword(e.target.value)}
                type='password'
                autoComplete='off'
                className='w-[90%] h-12 rounded-3xl p-2 mt-4 bg-transparent/20 outline-none placeholder-white pl-4'
              />
              <button
                onClick={(e) => {
                  e.preventDefault()
                  login(email, password)
                }}
                className='w-[90%] h-12 bg-[#f4cfb7] rounded-3xl mt-4'>
                SIGN IN
              </button>
            </div>
            <div className='w-[90%] mx-auto flex justify-between items-center text-white mt-4 text-lg'>
              <label className='flex gap-x-2'>
                <input
                  type="checkbox"
                  checked={isChecked}
                  onChange={handleCheckboxChange}
                  className=''
                />
                Remember Me
              </label>
              <label className=''>
                Forgot Password
              </label>
            </div>
            <div className='flex w-[90%] justify-center mx-auto text-white mt-4 text-xl'>
              <span>--</span>
              <label>Or Sign In With</label>
              <span>--</span>

            </div>
            <div className='flex w-[90%] justify-center mx-auto text-white mt-4 text-xl gap-x-8'>
              <button className='bg-white text-black p-2 rounded-xl'>GitHub</button>
              <button className='bg-white text-black p-2 rounded-xl'>Google

              </button>
            </div>

          </form>
        </div>
      </div >

  )
}

export default Login
