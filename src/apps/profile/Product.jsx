import { Link, useParams } from "react-router-dom";
import { useState, useEffect } from 'react';
import axios from 'axios';
import 'react-toastify/dist/ReactToastify.css';
import { useTranslation } from "react-i18next";

const Product = () => {
  const [data, setData] = useState([]);
  const { t, i18n } = useTranslation();

  useEffect(() => {
    axios.get(`http://localhost:3003/products/${id}`).then((res) => {
      setData(res.data);
    });
  }, []);

  const { id } = useParams()

  return (
    <div className="flex justify-center items-center mx-auto w-1/2">
      <div className="flex flex-col w-full">
        <Link
          to={`/table-page`}
          className="flex justify-center items-center hover:bg-teal-600  w-52 h-16 mx-auto
           bg-white hover:shadow-md  outline-none rounded-xl font-bold border mt-8
            hover:text-teal-200 text-teal-600 border-zinc-400"
        >
          {t('Back to Home')} 

        </Link>
        {data && (
          <div className="w-[700p] px-12 py-8 flex flex-row shadow-xl rounded-xl justify-center items-center bg-gray-600 mt-16 border-teal-800 border-2">
            <div className="w-5/12  flex flex-col space-y-4 whitespace-nowrap">
              <h2 className="flex justify-center items-center h-20 text-white font-bold text-3xl border-black border-b-2">
                {t('ID')} :
              </h2>
              <h2 className="flex justify-center items-center h-28 text-white font-bold text-3xl border-black border-b-2">
                {t('Title')} :
              </h2>
              <h2 className="flex justify-center items-center h-20 text-white font-bold text-3xl border-black border-b-2">
                {t('Price')} :
              </h2>
              <h2 className="flex justify-center items-center h-20 text-white font-bold text-3xl border-black border-b-2">
                {t('Cateogry')} :
              </h2>
              <h2 className="flex justify-center items-center h-20 text-white font-bold text-3xl border-black border-b-2">
                {t('Image')} :
              </h2>
            </div>

            <div className="w-7/12  flex flex-col space-y-4  ">
              <h2 className="flex justify-center items-center h-20 text-white/95 font-bold text-2xl border-black border-b-2">
                {data.id}
              </h2>
              <h2 className="flex justify-center items-center  h-28 text-white/95 font-bold text-2xl border-black border-b-2">
                {data.title}
              </h2>
              <h2 className="flex justify-center items-center  h-20 text-white/95 font-bold text-2xl border-black border-b-2">
                {data.price}
              </h2>

              <h2 className="flex justify-center items-center h-20 text-white/95 font-bold text-2xl border-black border-b-2">
                {data.category}
              </h2>
              <h2 className="text-teal-200 flex justify-center items-center h-20 font-bold text-2xl border-black border-b-2">
                <p>
                  <img
                    src={data.image}
                    className="w-20 h-20 rounded-2xl m-auto"
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