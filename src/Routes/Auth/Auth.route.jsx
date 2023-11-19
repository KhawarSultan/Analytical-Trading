import { useContext, useEffect } from "react";
import { signInwithGooglePopup } from "../../Utils/firebase";
import { UserContext } from "../../Contexts/user.context";
import { useNavigate } from "react-router";

const AuthRoute = () => {

    const { user } = useContext(UserContext);
    const navigate = useNavigate();

    useEffect(() => {
        if (user) {
            navigate("/Dashboard")
        }
    }, [user])


    return (
        <div className="flex my-20 justify-center items-center">
            <div className="auth flex flex-col justify-center gap-4 p-20 w-max items-center border-2 border-orange-500 bg-gray-200 rounded-xl">
                <div className="text-xl  font-extrabold text-orange-500">Login</div>
                <button className="login" onClick={() => { signInwithGooglePopup() }}>Sign in with google</button>
                <input type="text" placeholder="Email" />
                <input type="password" placeholder="Password" />
                <button className="login">Login</button>
                <button>Not a member? Signup</button>
            </div>
        </div>
    )
}

export default AuthRoute;