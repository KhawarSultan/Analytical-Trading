import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import CryptoRoute from './Routes/Cryptos/Cryptos.route.jsx';
import { Provider } from 'react-redux';
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import ViewCoin from './Routes/ViewCoin/ViewCoin.component.jsx';
import AuthRoute from './Routes/Auth/Auth.route.jsx';
import { UserProvider } from './Contexts/user.context.jsx';
import ProfileRoute from './Routes/Profile/Profile.route.jsx';
import DashboardRoute from './Routes/Dashboard/Dashboard.component.jsx';
import { CreateDBUser } from './Routes/CreateDBUser/CreateDBUser.route.jsx';
import HomePage from './External/HomePage.jsx';
import Knowledgebas from './External/Knowledgebase.jsx';
import CryptoBasics from './External/LearnPages/CryptoBasics.jsx';
import News from './Components/News/News.jsx';
import store from './app/store.js';
import CoinAnalysis from './External/CoinAnalysis.jsx'
import CryptoDictionary from './External/CryptoDictionary.jsx';
import PublicationsPage from './External/PublicationsPage.jsx';
import SinglePublicationsPage from './External/SinglePublicationsPage.jsx';
const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: "Cryptos",
                element: <CryptoRoute />,
            },
            {
                path: "Cryptos/:uid",
                element: <ViewCoin />,
            },
            {
                path: "Auth",
                element: <AuthRoute />,
            },
            {
                path: "Profile",
                element: <ProfileRoute />,
            },
            {
                path: "Dashboard",
                element: <DashboardRoute />,
            },
            {
                path: "CompleteRegisteration",
                element: <CreateDBUser />,
            },
            {
                path: "/",
                element: <HomePage />,
            },
            {
                path: "knowledge-base",
                element: <Knowledgebas />,
            },
            {
                path: `/crypto-basics/:CryptoBasicsID`,
                element: <CryptoBasics />,
            },
            {
                path: "/trade-crypto/:TradeCryptoID",
                element: <Knowledgebas />,
            },
            {
                path: "/use-crypto/:UseCrptoID",
                element: <Knowledgebas />,
            },
            {
                path: "News",
                element: <News  />,
            },
            {
                path: "CoinAnalysis",
                element: <CoinAnalysis />,
            },
            {
                path: "Publications",
                element: <PublicationsPage />,
            },
            {
                path: "Crypto-Dictionary",
                element: <CryptoDictionary />,
            },
            {
                path: "/cryptos-publications/:publicationid",
                element: <SinglePublicationsPage />,
            },
        ],
    },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
    <UserProvider>
        <Provider store={store}>
            <RouterProvider router={router} />,
        </Provider>
    </UserProvider>
);
