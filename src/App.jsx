import { Outlet, useLocation, useNavigate } from 'react-router-dom'
import './App.css'
import NavBar from './Components/NavBar/NavBar.component'
import { useContext, useEffect } from 'react'
import { UserContext } from './Contexts/user.context'
import { FetchDBData } from './Helpers/API_Calls'
import Footer from './External/FooterPage'
function App() {
  const { user, db_user, setDBUser, refresh, setUserCreated, userCreated } = useContext(UserContext);

  const navigate = useNavigate();

  const location = useLocation();
  useEffect(() => {
      window.scrollTo(0, 0);
  }, []);


    useEffect(() => {
      if (user) {
        if (location.pathname != "/CompleteRegisteration") {
          if (!db_user) {
            if (!userCreated) {
              console.log("called")
              FetchDBData(user.uid).then((res) => {
                console.log(res)
                if (!res) {
                  setUserCreated(false);
                  navigate("/CompleteRegisteration")
                } else {
                  setUserCreated(true);
                }
                return res
              })
            }
          }

        }
      }
    }, [user, userCreated, location])

    useEffect(() => {
      if (user) {
        FetchDBData(user.uid).then((res) => {
          setDBUser(res);
        })
      }

    }, [user, location, refresh])

    return (
      <>
        <NavBar />
        <div className="main-wrapper flex flex-col">
          <Outlet />
        </div>
        <Footer />
      </>
    )
  }

export default App;
