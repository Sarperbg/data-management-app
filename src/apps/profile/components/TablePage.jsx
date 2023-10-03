import axios from 'axios';
import React, { useEffect, useState, useTransition } from 'react'
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { CSVLink } from "react-csv";
import TablePagination from '@mui/material/TablePagination';
import { AiOutlineSearch } from "react-icons/ai"

import { AiOutlineFileExcel } from "react-icons/ai"
import { useTranslation } from 'react-i18next';
import '../../../i18n';


const TablePage = () => {

  const [data, setData] = useState([]);
  const [value, setValue] = useState("");

  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  const [sortBy, setSortBy] = useState(null);
  const [sortOrder, setSortOrder] = useState('asc');

  const { t, i18n } = useTranslation();

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const slicedData = data.slice(
    page * rowsPerPage,
    page * rowsPerPage + rowsPerPage
  );

  const handleSortIconClick = (property) => {
    if (property === sortBy) {
      setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
    } else {
      setSortBy(property);
      setSortOrder('asc');
    }
    const sortedData = sortData(data, property, sortOrder);
    setData(sortedData);
  };

  const sortData = (dataToSort, sortBy, sortOrder) => {
    const sortedData = [...dataToSort];
    sortedData.sort((a, b) => {
      if (sortOrder === 'asc') {
        if (a[sortBy] < b[sortBy]) return -1;
        if (a[sortBy] > b[sortBy]) return 1;
      } else {
        if (a[sortBy] < b[sortBy]) return 1;
        if (a[sortBy] > b[sortBy]) return -1;
      }
      return 0;
    });
    return sortedData;
  };

  const loadDatas = () => {
    axios.get("http://localhost:3003/products").then((res) => {
      const responseData = res.data;
      setData(responseData.reverse());
    })
      .catch(error => {
        console.error('API data could not be fetched:', error);
        toast.error(`API data could not be fetched. ${error.message}`);

      });
  }

  const handleDelete = (id) => {
    axios.delete(`http://localhost:3003/products/${id}`)
      .then(() => {
        loadDatas();
      })
      .catch((error) => {
        console.error('Delete request failed:', error);
        toast.error(`Delete request failed. ${error.message}`);
      });
  };

  useEffect(() => {
    loadDatas();
  }, []);

  const handleSearch = async (e) => {
    e.preventDefault();
    return await axios
      .get(`http://localhost:3003/products?q=${value}`)
      .then((response) => {
        setData(response.data);
        setValue("");
      })
      .catch((err) => console.log(err));
  };

  const clickHandle = async lang => {
    await i18n.changeLanguage(lang, (err, t) => {
      if (err) return console.log('Error loading resources:', err);
    });
  };


  return (
    <div className='flex flex-col w-screen h-screen bg-[#b7bfca]'>

      <div className='flex h-20 bg-blue-600  items-center justify-between w-full p-8'>

        <h1 className='text-black text-4xl font-semibold font-Inter p-8 m-4'>{t('Product Table')}</h1>

        <Link to="/add-product" className='w-52 bg-white text-blue-600 font-semibold text-2xl h-12 rounded-lg 
flex items-center justify-center'>{t('Add Product')}</Link>
      </div>

      <div className="w-full h-full border-gray-300 border-2 bg-[#b7bfca]">
        <div className="flex w-full h-full min-w-fit sm:px-6 lg:px-8">
          <div className="w-full flex-grow overflow-hidden flex flex-col mx-auto">

            <form
              className='flex items-center justify-start mt-4 '
              onSubmit={handleSearch}
            >
              <input
                value={value}
                onChange={(e) => setValue(e.target.value)}
                type="text"
                placeholder={t('Type to Search...')}
                className="font- bg-[#FFFFFF] flex justify-center  w-[300px] h-[50px]
      rounded-[8px] items-center outline-none focus:border-black border placeholder-black text-sm px-4 border-gray-300"
              />

              <AiOutlineSearch className='relative -left-12 hover:scale-95 max-xs:-top-11 max-xs:-relative max-xs:left-20
    max-sm:-top-20 max-sm:-relative max-sm:left-20 max-md:-top-11 max-md:-relative max-md:left-20
     'size={24} />

              <button
                type='submit'
                className='bg-blue-600 rounded-md p-2 m-2 font-bold tracking-wider text-white'>
                {t('Search')}
              </button>
              <button
                className='mx-2 bg-red-600 rounded-md p-2 m-2 font-bold tracking-wider text-white'
              >
                {t('Reset')}
              </button>

              <div>
                <h3>Aktif Dil: {i18n.language} <br /></h3>
                <nav className='flex justify-between w-full gap-x-4 '>
                  <button className="bg-blue-600 rounded-xl p-2" onClick={() => clickHandle('tr')}>Türkçe</button>
                  <button className="bg-blue-600 rounded-xl p-2" onClick={() => clickHandle('en')}>English</button>
                </nav>
                <h3>{t('welcome')}</h3>
              </div>


            </form>
            <table className="w-full max-lg:w-[800px] max-md:w-[600px]
             mt-8  mx-auto text-center text-sm font-medium  border border-black">
              <thead
                className=" bg-neutral-800 font-bold text-white dark:border-neutral-600 dark:bg-neutral-900">
                <tr>
                  <th className="whitespace-pre px-4 py-2 flex justify-between" onClick={() => handleSortIconClick('id')}>
                    {t('ID')} {sortBy === 'id' && sortOrder === 'asc' ? '▲' : '▼'}
                  </th>
                  <th className="whitespace-pre px-4 py-2" onClick={() => handleSortIconClick('title')}>
                    {t('Title')} {sortBy === 'title' && sortOrder === 'asc' ? '▲' : '▼'}
                  </th>
                  <th className="whitespace-pre px-4 py-2" onClick={() => handleSortIconClick('price')}>
                    {t('Price')} {sortBy === 'Price' && sortOrder === 'asc' ? '▲' : '▼'}
                  </th>
                  <th className="whitespace-pre px-4 py-2" onClick={() => handleSortIconClick('category')}>
                    {t('Category')} {sortBy === 'category' && sortOrder === 'asc' ? '▲' : '▼'}
                  </th>

                  <th scope="col" className="px-4 py-2">  {t('Image')}</th>
                  <th scope="col" className="px-4 py-2">  {t('Action')}</th>


                </tr>
              </thead>
              <tbody>
                {slicedData && slicedData.map((item, index) => (

                  <tr key={index} className="border-b dark:border-neutral-500">
                    <td className="text-lg text-gray-900  px-4 py-2 font-medium">
                      {item.id}
                    </td>
                    <td className="text-lg text-gray-900  px-4 py-2">
                      {item.title}
                    </td>
                    <td className="text-lg text-red-600  px-4 py-2">
                      {item.price}
                    </td>
                    <td className="text-lg text-gray-900 px-4 py-2">
                      {item.category}
                    </td>
                    <td className="text-lg text-gray-900  px-4 py-2">
                      <p>
                        <img
                          src={item.image}
                          alt={"test"}
                          style={{ width: "60px", height: "60px" }}
                        />
                      </p>
                    </td>
                    <td className='flex justify-center items-center whitespace-nowrap space-x-4 p-4'>
                      <Link to={`/product/${item.id}`} className='text-white bg-black font-normal rounded-lg px-4 py-2'>
                        {t('View')}
                      </Link>

                      <Link to={`/edit-product/${item.id}`}
                        className='whitespace-nowrap text-white bg-blue-600 font-normal rounded-lg px-4 py-2'>
                        {t('Edit')}
                      </Link>

                      <button
                        onClick={() => handleDelete(item.id)}
                        className='whitespace-nowrap text-white bg-red-600 font-normal rounded-lg px-4 py-2'>
                        {t('Delete')}
                      </button>
                    </td>
                  </tr>
                ))}
                <ToastContainer />

              </tbody>
            </table>

            <div className='flex w-full justify-between items-center mt-4'>
              <div className='flex gap-x-4 justify-center'>
                <CSVLink data={data}
                  separator={""}
                  filename={"products-list.csv"}
                  className='flex justify-center items-center w-[199px] h-[44px] 
        bg-blue-600 rounded-[4px] text-[#FFFFFF]
      transition-all hover:scale-95 cursor-pointer'>
                  {t('Download Data')}
                  <AiOutlineFileExcel size={24} className='flex items-center justify-center ml-4' />

                </CSVLink>

              </div>



              <TablePagination
                component="div"
                className='flex justify-center items-center'
                rowsPerPageOptions={[5, 10, 20, 40]}
                count={data.length}
                page={page}
                onPageChange={handleChangePage}
                rowsPerPage={rowsPerPage}
                onRowsPerPageChange={handleChangeRowsPerPage}
              />
            </div>



          </div>
        </div>
      </div>

    </div>

  )
}

export default TablePage