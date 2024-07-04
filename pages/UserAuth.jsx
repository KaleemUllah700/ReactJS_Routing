import { Outlet } from "react-router-dom";

const UserAuth = ()=>{
    return (
        <div>
            this is auth page
            <Outlet />
        </div>
    )
}

export default UserAuth;