import { useContext, useEffect } from "react";
import { signOutOfApp } from "../../Utils/firebase";
import { UserContext } from "../../Contexts/user.context";
import { useNavigate } from "react-router";

const ProfileRoute = () => {

    const { user, setUserCreated, setDBUser } = useContext(UserContext);

    const navigate = useNavigate();

    useEffect(() => {
        if (!user) {
            navigate("/Auth")
        }
    }, [user])

    return (
        <div className="profile-route   text-center py-16  ">
            <button className="login  rounded-full" onClick={() => {
                signOutOfApp()
                setUserCreated(false)
                setDBUser(null)
            }}>Logout</button>
        </div>
    )
}

export default ProfileRoute;