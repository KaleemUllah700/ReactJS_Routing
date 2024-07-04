import { Navigate } from "react-router-dom";

const PrivateRoute = ({Children})=>{
    const isLogin = true;
    return(
        <>
        {
            isLogin ? Children:(
                <>
                    <Navigate to="/user-auth/login" />
                </>
            )
        }
        </>
    )
}

export default PrivateRoute;