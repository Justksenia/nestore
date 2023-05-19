
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { IFavorite, IFavoriteBody} from '../types/DeviceTypes'



export const favoriteApi = createApi({
    reducerPath: 'favoriteApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:5000/api/' }),
    tagTypes:["Favorite"],
    endpoints: (builder) => ({
    
      fetchFavorite:builder.query<IFavorite[],number>({
        query:(id)=>({
          url:`favorite/${id}`
        }),
        async onQueryStarted(args, { dispatch, queryFulfilled }) {
            try {
              const {data}=await queryFulfilled;
              await dispatch(setFavorites(data));
            } catch (error) {}
          },
        providesTags:result=>["Favorite"]
      }), 
      deleteFavorite: builder.mutation<IFavorite, number>({
        query(id) {
          return {
            url: 'favorite',
            method: 'DELETE',
            body: {"id":id},
          };
        },
        invalidatesTags:["Favorite"]
      }),
      addToFavorite:builder.mutation<IFavorite, IFavoriteBody>({
        query(body) {
            return {
              url: 'favorite',
              method: 'POST',
              body: body,
            };
          },
          invalidatesTags:["Favorite"]
      })
 
    
    }),
  })

function setFavorites(data: IFavorite[]): any {
    throw new Error('Function not implemented.');
}
