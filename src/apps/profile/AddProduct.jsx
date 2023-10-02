import axios from 'axios';
import React from 'react'
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';

const AddProduct = () => {
  const [id, setId] = useState("");
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [image, setImage] = useState("");

  const navigate = useNavigate();

  const data = {
    id: id,
    title: title,
    price: price,
    category: category,
    image: image
  }

  function Submit(e) {
    e.preventDefault()

    axios
      .post("http://localhost:3003/products", data)

      .then(navigate('/table-page'));
  }

  return (
    <div className='flex flex-col bg-white w-screen h-full justify-center items-center'>

      <form className='flex flex-col w-[80%] px-8 py-4 shadow-xl rounded-xl justify-center
       items-center bg-gray-600  border-teal-800 border-2'>
        <h1 className='flex justify-center items-center mt-2 text-white text-3xl
           font-semibold '>Add Product</h1>
        <div className='flex flex-col w-full justify-center items-center mb-8 mt-8'>
          <input
            value={id}
            onChange={(e) => setId(e.target.value)}
            type='number'
            placeholder='Enter Your Id'
            className='w-[80%] bg-white/90 text-xl font-normal outline-none mt-4  py-4 pl-6 border border-zinc-400'

          />
          <input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            type='text'
            placeholder='Enter Your Title'
            className='w-[80%] bg-white/90 text-xl font-normal outline-none mt-4  py-4 pl-6 border border-zinc-400'

          />
          <input
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            type='number'
            placeholder='Enter Your Price'
            className='w-[80%] bg-white/90 text-xl font-normal outline-none mt-4  py-4 pl-6 border border-zinc-400'

          />
          <input
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            type='text'
            placeholder='Enter Your Category'
            className='w-[80%] bg-white/90 text-xl font-normal outline-none mt-4  py-4 pl-6 border border-zinc-400'

          />
          <input
            value={image}
            onChange={(e) => setImage(e.target.value)}
            type='text'
            placeholder='Enter Your Image'
            className='w-[80%] bg-white/90 text-xl font-normal outline-none mt-4  py-4 pl-6 border border-zinc-400'

          />
          <button
            onClick={Submit}
            className='w-[80%] bg-blue-600 text-white text-xl font-normal outline-none mt-4  py-4 pl-6'>
            Add Product
          </button>
        </div>


        <Link
          to={`/table-page`}
          className="hover:bg-teal-600 flex justify-center items-center w-52 mx-auto bg-white hover:shadow-md  outline-none rounded-xl font-bold border mt-8 hover:text-teal-200 text-teal-600 border-zinc-400 py-4 px-4 pl-4"
        >
          Back To Home
        </Link>
      </form>

    </div>
  )
}

export default AddProduct