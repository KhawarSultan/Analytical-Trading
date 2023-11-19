import { Fragment, useContext, useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { UserContext } from "../../Contexts/user.context";
import { useNavigate } from "react-router";

const NavBar = () => {
    const navigate = useNavigate();


    const { user } = useContext(UserContext);
    const location = useLocation();

    const [darkMode, setDarkMode] = useState(false);

    useEffect(() => {
        if (darkMode) {
            document.querySelector("body").setAttribute("data-theme", "dark");
        } else {
            document.querySelector("body").setAttribute("data-theme", "light");
        }
    }, [darkMode])

    return (
        <Fragment>
            <div className="navbar flex gap-3 p-4 items-center w-full justify-between">
                <div>
                <div className="text-center flex items-center justify-start gap-3 ">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M15 15.5C15 19.09 12.09 22 8.5 22C4.91 22 2 19.09 2 15.5C2 11.91 4.91 9 8.5 9C8.67 9 8.85 9.01 9.02 9.02C12.19 9.27 14.73 11.81 14.98 14.98C14.99 15.15 15 15.33 15 15.5Z" fill="#F37E25" />
                            <path d="M22.0001 8.5C22.0001 11.76 19.6001 14.45 16.4801 14.92V14.86C16.1701 10.98 13.0201 7.83 9.11008 7.52H9.08008C9.55008 4.4 12.2401 2 15.5001 2C19.0901 2 22.0001 4.91 22.0001 8.5Z" fill="#F37E25" />
                            <path d="M5.59 2H3C2.45 2 2 2.45 2 3V5.59C2 6.48 3.08 6.93 3.71 6.3L6.3 3.71C6.92 3.08 6.48 2 5.59 2Z" fill="#F37E25" />
                            <path d="M18.4097 22.0003H20.9997C21.5497 22.0003 21.9997 21.5503 21.9997 21.0003V18.4103C21.9997 17.5203 20.9197 17.0703 20.2897 17.7003L17.6997 20.2903C17.0797 20.9203 17.5197 22.0003 18.4097 22.0003Z" fill="#F37E25" />
                        </svg>
                        <b className="text-xl  hover:cursor-pointer" onClick={() => navigate(`/`)}><span className=" text-orange-500">Analytical</span> Trading </b>
                    </div>
                </div>
                <div className="md:flex hidden justify-center items-center gap-4">
                    <button onClick={() => { setDarkMode((e) => !e) }}>Toggle Modes</button>
                    <Link to="/"><div className={"nav-item" + (location.pathname === "/" ? " active" : "")}>Home</div></Link>
                    {user &&
                        <Link to="/Dashboard"><div className={"nav-item" + (location.pathname === "/Dashboard" ? " active" : "")}>Dashboard</div></Link>
                    }
                    <Link to="/Cryptos"><div className={"nav-item" + (location.pathname.includes("/Cryptos") ? " active" : "")}>Cryptocurrencies</div></Link>
                    <Link to="/CoinAnalysis"><div className={"nav-item" + (location.pathname.includes("/CoinAnalysis") ? " active" : "")}>Coin Analysis</div></Link>
                    <Link to="/News"><div className={"nav-item" + (location.pathname.includes("/News") ? " active" : "")}>News</div></Link>
                    <Link to="/Publications"><div className={"nav-item" + (location.pathname.includes("/Publications") ? " active" : "")}>Publications</div></Link>
                    <Link to="/Crypto-Dictionary"><div className={"nav-item" + (location.pathname.includes("/Crypto-Dictionary") ? " active" : "")}>Crypto Dictionary</div></Link>
                    {user ?
                        <Link to="/Profile"><img className="rounded-xl" src={user.photoURL} width={40} /></Link>
                        :
                        <Link to="/Auth"><div className={"nav-item" + (location.pathname === "/Auth" ? " active" : "")}>Login/signup</div></Link>
                    }
                </div>
            </div>
        </Fragment>
    )
}

export default NavBar;