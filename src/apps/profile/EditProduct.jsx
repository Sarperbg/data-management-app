import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';

const EditProduct = () => {

  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [image, setImage] = useState("");

  const navigate = useNavigate();
  const { id } = useParams();


  useEffect(() => {
    axios.get(`http://localhost:3003/products/${id}`)
      .then((res) => {
        setTitle(res.data.title);
        setPrice(res.data.price);
        setCategory(res.data.category);
        setImage(res.data.image);
      });
  }, []);

  const data = {
    title: title,
    price: price,
    category: category,
    image: image
  }

  function Update(e) {
    e.preventDefault()
    axios.put(`http://localhost:3003/products/${id}`, data)

      .then(
        navigate("/home")
      )
  }

  return (
    <div className='flex flex-col w-screen h-full justify-center items-center'>
      <h1 className='text-black text-3xl font-semibold'>Edit Product</h1>

      <form className='w-[80%] flex flex-col justify-center items-center'>

        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          type='text'
          placeholder='Enter Your Title'
          className='w-[80%] bg-white/10 text-xl font-normal outline-none mt-4  py-4 pl-6 border border-zinc-400'

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
          onClick={Update}
          className='w-[80%] bg-blue-600 text-white text-xl font-normal outline-none mt-4  py-4 pl-6'>
          Update Product
        </button>
      </form>

    </div>
  )
}

export default EditProduct