
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { IBrand, IDevice, IFavorite, IType } from '../types/DeviceTypes'

interface IDeviceParams {
  limit:number,
  typeId?:number,
  brandId?:number
}

export const deviceApi = createApi({
    reducerPath: 'deviceApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:5000/api/' }),
    tagTypes:["Device"],
    endpoints: (builder) => ({
      fetchAllDevice: builder.query<{count:number, rows:IDevice[]},IDeviceParams>({
        query: ({limit,typeId, brandId}) => ({
            url:"device",
            params:{
                limit, typeId, brandId
            }
        }),
        
      }),
      fetchOneDevice:builder.query<IDevice,number>({
        query:(id)=>({
          url:`device/${id}`
        })
      }),
      fetchTypes: builder.query<IType[],any> ({
        query:()=>({
            url:"type"
        })
      }),
      fetchBrands: builder.query<IBrand[],any> ({
        query:()=>({
            url:"brand"
        })
      }),

  
 
    
    }),
  })