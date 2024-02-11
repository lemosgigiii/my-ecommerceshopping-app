import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { base_url } from "../firebase/database";

export const shopApi = createApi({
  reducerPath: "shopApi",
  baseQuery: fetchBaseQuery({ baseUrl: base_url }),
  endpoints: (builder) => ({
    getCategories: builder.query({
      query: () => 'categories.json',
    }),

    getProducts: builder.query({
      query: () => 'products.json',
    }),

    getProductsByCategory: builder.query({
      query: (category) => `products.json?orderBy="category"&equalTo="${category}"`,
    }),
    postOrder: builder.mutation({
      query: ({...order}) => ({
        url: 'orders.json',
        method: 'POST',
        body: order

     })
    }),
    getProfilePicture: builder.query({
      query: (localId) => `profilePictures/${localId}.json` 
    }),
    putProfilePicture: builder.mutation({
      query: ({image, localId})=>({
          url:  `profilePictures/${localId}.json`,
          method: 'PUT',
          body: {
              image: image,
          }
      })
  }),
     getUserLocation: builder.query({
    query: (localId) => `locations/${localId}.json` 
  }),
  putUserLocation : builder.mutation({
    query: ({location, localId})=>({
      url: `locations/${localId}.json` ,
      method: 'PUT',
      body: {
        latitude: location.latitude,
        longitue: location.longitude,
        address: location.address

    }
    
    })

  })


  
})
})


export const {useGetCategoriesQuery, useGetProductsQuery, useGetProductsByCategoryQuery, usePostOrderMutation,useGetOrdersQuery,usePutProfilePictureMutation,useGetProfilePictureQuery,useGetUserLocationQuery,usePutUserLocationMutation,} = shopApi