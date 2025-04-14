import { configureStore } from "@reduxjs/toolkit";
import { cryptoApi } from "../services/CryptoApi";
import { cryptoNewsApi } from "../services/cryptoNewsApi";
import { cryptoExchangeApi } from "../services/CryptoExchangeApi";
export default configureStore({
    reducer:{
        [cryptoApi.reducerPath]:    cryptoApi.reducer,
        [cryptoNewsApi.reducerPath]:    cryptoNewsApi.reducer,
        [cryptoExchangeApi.reducerPath]:cryptoExchangeApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(cryptoApi.middleware, cryptoNewsApi.middleware,cryptoExchangeApi.middleware),
    }
)