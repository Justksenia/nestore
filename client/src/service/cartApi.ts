
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { IFavorite, IFavoriteBody} from '../types/DeviceTypes'

interface IBodyDeleteDevice {
    userId:number,
    id:number
}

export const cartApi = createApi({
    reducerPath: 'cartApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:5000/api/' }),
    tagTypes:["Cart"],
    endpoints: (builder) => ({
    
      fetchCart:builder.query<IFavorite[],number>({
        query:(id)=>({
          url:`user/${id}/basket`
        }),
        async onQueryStarted(args, { dispatch, queryFulfilled }) {
            try {
              const {data}=await queryFulfilled;
              await dispatch(setFavorites(data));
            } catch (error) {}
          },
        providesTags:result=>["Cart"]
      }), 
      deleteCartDevice: builder.mutation<IFavorite, IBodyDeleteDevice>({
        query({userId,id}) {
          return {
            url: `${userId}/basket/device`,
            method: 'DELETE',
            body: {"id":id},
          };
        },
        invalidatesTags:["Cart"]
      }),
      addToFavorite:builder.mutation<IFavorite, IFavoriteBody>({
        query(body) {
            return {
              url: 'favorite',
              method: 'POST',
              body: body,
            };
          },
          invalidatesTags:["Cart"]
      })
 
    
    }),
  })

function setFavorites(data: IFavorite[]): any {
    throw new Error('Function not implemented.');
}
