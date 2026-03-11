import { Routes, Route } from "react-router-dom"
import UserDetail from "./users/UserDetail"
import CreateUser from "./users/CreateUser"
import UserList from "./users/UserList"
import { useNavigate } from "react-router-dom"
import Home from "./pages/Home"
import Login from "./pages/Login"
import ProtectedRoutes from "./routes/ProtectedRoutes"

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        {/*Rutas Protegidas*/}
        <Route element={<ProtectedRoutes />}>
          <Route path='/users' element={<UserList />} />
          <Route path='/createUser' element={<CreateUser />} />
          <Route path='/userDetail/:id' element={<UserDetail />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
