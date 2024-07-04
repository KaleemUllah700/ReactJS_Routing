import { Link } from "react-router-dom";

const Navbar = ()=>{
    return (
        <div className="w-[100%] h-[80px] bg-black flex items-center justify-center">
            <nav className="text-white p-4 text-xl flex gap-4">
                <Link to="/">Home</Link>
                <Link to="/signup">Signup</Link>
                <Link to="/signin">Signin</Link>
                <Link to="/products">Products</Link>
                <Link to="/category">Category</Link>
            </nav>
        </div>
    )
}

export default Navbar;