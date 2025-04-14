
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
const cryptoNewsHeaders =  {
    'x-rapidapi-key': '8d2f35bdaamshb0d377f095a917cp1168a3jsn328deb44f874',
    'x-rapidapi-host': 'cryptocurrency-news2.p.rapidapi.com'
}

const baseUrl='https://cryptocurrency-news2.p.rapidapi.com';

const createRequest=(url)=>({url, headers:cryptoNewsHeaders})


export const cryptoNewsApi=createApi({
    reducerPath:'cryptoNewsApi',
    baseQuery:fetchBaseQuery({baseUrl}),
    endpoints:(builder)=>({
        getCryptoNews:builder.query({
            query:()=>createRequest(`/v1/cryptodaily`)
        })
    })
})
export const {
    useGetCryptoNewsQuery,
 
}=cryptoNewsApi;