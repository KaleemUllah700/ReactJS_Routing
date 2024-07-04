import { Routes, Route } from "react-router-dom";
import SignUp from "../pages/SignUp.jsx"
import Products from "../pages/products.jsx";
import Category from "../pages/Categories.jsx";
import SignIn from "../pages/SignIn.jsx";
import Home from "../pages/Home.jsx";
import UserAuth from "../pages/UserAuth.jsx";


const App = ()=>{
  return (
    <div>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/products" element={<Products/>} />
      <Route path="/category" element={<Category />} />
      <Route path="/signin" element={<SignIn />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="products/:catergoryName" element={<Products />} />
      <Route path="/user-auth" >
        <Route index element={<UserAuth />} />
        <Route path="signin" element={<SignIn />} />
        <Route path="signup" element={<SignUp />} />
      </Route>
    </Routes>
    </div>
  )
}

export default App;