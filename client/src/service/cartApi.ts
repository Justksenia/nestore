
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { ICartDevice, IFavorite, IFavoriteBody} from '../types/DeviceTypes'

interface IBodyDeleteDevice {
    userId:number,
    id:number
}

export const cartApi = createApi({
    reducerPath: 'cartApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:5000/api/' }),
    tagTypes:["Cart"],
    endpoints: (builder) => ({
    
      fetchCart:builder.query<ICartDevice[],number>({
        query:(id)=>({
          url:`user/${id}/basket`
        }),
       
        providesTags:result=>["Cart"]
      }), 
      deleteCartDevice: builder.mutation<ICartDevice, {userId:number, id:number}>({
        query({userId,id}) {
          return {
            url: `user/${userId}/basket/device`,
            method: 'DELETE',
            body: {"id":id},
          };
        },
        invalidatesTags:["Cart"]
      }),
      addOneCartDevice:builder.mutation<ICartDevice, {deviceId:number, userId:number}>({
        query({userId,deviceId}) {
            return {
              url: `user/${userId}/basket/device`,
              method: 'POST',
              body: {"deviceId":deviceId,"userId":userId},
            };
          },
          invalidatesTags:["Cart"]
      })
 
    
    }),
  })

function setFavorites(data: IFavorite[]): any {
    throw new Error('Function not implemented.');
}
