import { Link, useParams } from "react-router-dom";
import { useState,useEffect } from 'react';
import axios from 'axios';
import 'react-toastify/dist/ReactToastify.css';

const Product = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get(`http://localhost:3003/products/${id}`).then((res) => {
      setData(res.data);
    });
  }, []);

  const { id } = useParams()

  return (
    <div className="flex justify-center items-center mx-auto">
      <div className="flex flex-col w-full">
        <Link
          to={`/table-page`}
          className="hover:bg-teal-600 flex justify-center items-center w-52 mx-auto bg-white hover:shadow-md  outline-none rounded-xl font-bold border mt-8 hover:text-teal-200 text-teal-600 border-zinc-400 py-4 px-4 pl-4"
        >
          Back To Home
        </Link>
        {data && (
          <div className="w-[700p]  px-12 py-8 flex flex-row shadow-xl rounded-xl justify-center items-center bg-blue-700 mt-16 border-teal-800 border-2">
            <div className="w-5/12  flex flex-col space-y-4 whitespace-nowrap">
              <h2 className="flex justify-center items-center h-20 text-white font-bold text-3xl border-black border-b-2">
                Id :
              </h2>
              <h2 className="flex justify-center items-center h-28 text-white font-bold text-3xl border-black border-b-2">
                Title :
              </h2>
              <h2 className="flex justify-center items-center h-20 text-white font-bold text-3xl border-black border-b-2">
                Price :
              </h2>
              <h2 className="flex justify-center items-center h-20 text-white font-bold text-3xl border-black border-b-2">
              Category :
              </h2>
              <h2 className="flex justify-center items-center h-20 text-white font-bold text-3xl border-black border-b-2">
              Image : 
              </h2>         
            </div>

            <div className="w-7/12  flex flex-col space-y-4  ">
              <h2 className="flex justify-center items-center h-20 text-teal-200 font-bold text-2xl border-black border-b-2">
                {data.id}
              </h2>
              <h2 className="flex justify-center items-center  h-28 text-teal-200 font-bold text-2xl border-black border-b-2">
                {data.title}
              </h2>
              <h2 className="flex justify-center items-center  h-20 text-teal-200 font-bold text-2xl border-black border-b-2">
                {data.price}
              </h2>
             
              <h2 className="flex justify-center items-center h-20 text-teal-200 font-bold text-2xl border-black border-b-2">
                {data.category}
              </h2>
              <h2 className="text-teal-200 flex justify-center items-center h-20 font-bold text-2xl border-black border-b-2">
                <p>
                  <img
                    src={data.image}
                    className="w-20 h-20 m-auto"
                    alt={"test"}
                  />
                </p>
              </h2>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Product