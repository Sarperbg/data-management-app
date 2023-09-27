import { Route, Routes } from "react-router-dom";
import HomePage from "../apps/profile/components/HomePage";
import TablePage from "../apps/profile/components/TablePage";
import AddProduct from "../apps/profile/AddProduct";
import EditProduct from "../apps/profile/EditProduct";
import Product from "../apps/profile/Product";


const PrivateRoutes = () => {
  return (

    <Routes>

      <Route path="/*" element={<HomePage />} />
      <Route path="/home-page" element={<HomePage />} />
      <Route path="/table-page" element={<TablePage />} />
      <Route path="product/:id" element={<Product />} />
      <Route path="add-product" element={<AddProduct />} />
      <Route path="edit-product/:id" element={<EditProduct />} />
    </Routes>
  )
}

export default PrivateRoutes