import axios from 'axios';
import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom';

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
      <h1 className='text-black text-3xl font-semibold'>Add Product</h1>

      <form className='w-[80%] flex flex-col justify-center items-center'>
        <input
          value={id}
          onChange={(e) => setId(e.target.value)}
          type='number'
          placeholder='Enter Your Id'
          className='w-[80%] text-black bg-white/10 text-xl font-normal outline-none mt-4  py-4 pl-6 border border-zinc-400'

        />
        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          type='text'
          placeholder='Enter Your Title'
          className='w-[80%] text-red bg-white/10 text-xl font-normal outline-none mt-4  py-4 pl-6 border border-zinc-400'

        />
        <input
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          type='number'
          placeholder='Enter Your Price'
          className='w-[80%] bg-white/10 text-xl font-normal outline-none mt-4 py-4 pl-6 border border-zinc-400'

        />
        <input
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          type='text'
          placeholder='Enter Your Category'
          className='w-[80%] bg-white/10 text-xl font-normal outline-none mt-4  py-4 pl-6 border border-zinc-400'

        />
        <input
          value={image}
          onChange={(e) => setImage(e.target.value)}
          type='text'
          placeholder='Enter Your Image'
          className='w-[80%] bg-white/10 text-xl font-normal outline-none mt-4  py-4 pl-6 border border-zinc-400'

        />
        <button
          onClick={Submit}
          className='w-[80%] bg-blue-600 text-white text-xl font-normal outline-none mt-4  py-4 pl-6'>
          Add Product
        </button>
      </form>

    </div>
  )
}

export default AddProduct