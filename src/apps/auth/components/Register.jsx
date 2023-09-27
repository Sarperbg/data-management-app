import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import FirebaseContext from '../../../context/FirebaseContext'
import background from '../../../assets/images/bg.jpg'

const Register = () => {
  const navigate = useNavigate();
  const { register } = useContext(FirebaseContext)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  return (
    <div className="flex justify-center items-center bg-cover bg-center h-screen w-screen"
      style={{ backgroundImage: `url(${background})` }}>
      <div className='flex justify-center w-[600px] h-[600px] items-center'>
        <form className=''>
          <div className='flex flex-col gap-y-16'>
            <h1 className='text-4xl font-bold text-black -tracking-tighter text-center'>Register Form Example</h1>
            <div className='flex justify-center items-center gap-x-4'>
              <button
                onClick={(e) => {
                  e.preventDefault()
                  navigate('/auth/login')
                }}
                className='text-2xl font-semibold text-black -tracking-tighter text-center'>
                Already Have an account ?
              </button>

              <button
                onClick={(e) => {
                  e.preventDefault()
                  navigate('/auth/login')
                }}
                className='text-2xl font-semibold -tracking-tighter text-center text-green-800  '>
                Login
              </button>


            </div>

          </div>
          <div className='flex flex-col justify-center items-center mt-4'>
            <input
              placeholder='Email'
              type='text'
              autoComplete='off'
              onChange={(e) => setEmail(e.target.value)}
              className='w-[90%] h-12 rounded-3xl p-2 mt-4 bg-transparent/20 outline-none placeholder-white pl-4 text-xl'
            />
            <input
              placeholder='Password'
              onChange={(e) => setPassword(e.target.value)}
              type='password'
              autoComplete='off'
              className='w-[90%] h-12 rounded-3xl p-2 mt-4 bg-transparent/20 outline-none placeholder-white pl-4 text-xl'
            />
            <button
              onClick={(e) => {
                e.preventDefault()
                register(email, password)
              }}
              className='w-[90%] h-12 bg-[#f4cfb7] rounded-3xl mt-8 text-2xl'>
              Register
            </button>
          </div>




        </form>
      </div>
    </div >
  )
}

export default Register
