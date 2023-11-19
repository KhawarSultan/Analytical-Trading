import {configureStore} from "@reduxjs/toolkit";

// import {cryptoApi} from '../services/cryptoApi';
import {cryptoNewsApi} from '../Components/News/CryptoNewsapi';

export default configureStore({
    reducer: {
        // [cryptoApi.reducerPath]: cryptoApi.reducer,
        [cryptoNewsApi.reducerPath]: cryptoNewsApi.reducer,
    },
})
