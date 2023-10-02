import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams, Link } from 'react-router-dom';

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
        navigate("/table-page")
      )
  }

  return (
    <div className="flex flex-col justify-center items-center mx-auto w-1/2">
      <div className="flex flex-col w-full">

        <Link
          to={`/table-page`}
          className="hover:bg-teal-600 flex justify-center items-center w-52 mx-auto bg-white hover:shadow-md  outline-none rounded-xl font-bold border mt-8 hover:text-teal-200 text-teal-600 border-zinc-400 py-4 px-4 pl-4"
        >
          Back To Home
        </Link>



        <form className='flex flex-col px-12 py-8 shadow-xl rounded-xl justify-center
       items-center bg-gray-600 mt-16 border-teal-800 border-2'>
          <h1 className='flex justify-center items-center mt-4 text-white text-3xl font-semibold '>Edit Product</h1>
         
          <div className='flex flex-col w-full justify-center items-center mb-8 mt-8'>

            <input
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              type='text'
              placeholder='Enter Your Title'
              className='w-[80%] bg-white/70 text-xl font-normal outline-none mt-4  py-4 pl-6 border border-zinc-400'

            />
            <input
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              type='number'
              placeholder='Enter Your Price'
              className='w-[80%] bg-white/70 text-xl font-normal outline-none mt-4 py-4 pl-6 border border-zinc-400'

            />
            <input
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              type='text'
              placeholder='Enter Your Category'
              className='w-[80%] bg-white/70 text-xl font-normal outline-none mt-4  py-4 pl-6 border border-zinc-400'

            />
            <input
              value={image}
              onChange={(e) => setImage(e.target.value)}
              type='text'
              placeholder='Enter Your Image'
              className='w-[80%] bg-white/70  text-xl font-normal outline-none mt-4  py-4 pl-6 border border-zinc-400'

            />
            <button
              onClick={Update}
              className='w-[80%] bg-blue-600 text-white text-xl font-normal outline-none mt-4  py-4 pl-6'>
              Update Product
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default EditProduct