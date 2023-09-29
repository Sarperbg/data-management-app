import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import { useContext } from "react";

import FirebaseContext from "./context/FirebaseContext";

import PrivateRoutes from "./routes/PrivateRoutes"
import PublicRoutes from "./routes/PublicRoutes"
import SidebarComponents from "./apps/profile/components/SidebarComponents";

function App() {

  const { authToken } = useContext(FirebaseContext);

  if (!authToken) {
    return (
      <Router>
        <Routes>
          <Route path='/*' element={<Navigate to={'auth'} />} />
          <Route path='auth/*' element={<PublicRoutes />} />
        </Routes>
      </Router>
    )
  }
  return (


      <Router>
        <div className="flex w-screen h-screen">
          <SidebarComponents />
          <Routes>
            <Route path='/*' element={<PrivateRoutes />} />
          </Routes>
        </div>

      </Router>


  )
}


export default App;