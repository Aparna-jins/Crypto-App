
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
const cryptoExchangeHeaders =   {
    'x-rapidapi-key': '8d2f35bdaamshb0d377f095a917cp1168a3jsn328deb44f874',
    'x-rapidapi-host': 'crypto-arbitrage5.p.rapidapi.com'
}

const baseUrl='https://thingproxy.freeboard.io/fetch/https://crypto-arbitrage5.p.rapidapi.com';

const createRequest=(url)=>({url, headers:cryptoExchangeHeaders})


export const cryptoExchangeApi=createApi({
    reducerPath:'cryptExchangeApi',
    baseQuery:fetchBaseQuery({baseUrl}),
    endpoints:(builder)=>({
        getCryptoExchange:builder.query({
            query:()=>createRequest(`/arb`)
        })
    })
})
export const {
    useGetCryptoExchangeQuery,
 
}=cryptoExchangeApi;

