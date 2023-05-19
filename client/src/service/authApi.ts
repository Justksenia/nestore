import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';


import { IUser, IUserLogin } from '../types/UserTypes';
import { setUser } from '../stores/reducers/UserSlice';
import jwtDecode from 'jwt-decode';
import jwt_decode from "jwt-decode";


const BASE_URL = "http://localhost:5000" as string;

export const authApi = createApi({
  reducerPath: 'authApi',
  baseQuery: fetchBaseQuery({
    baseUrl: `${BASE_URL}/api/user/`,
  }),
  endpoints: (builder) => ({
    registrationUser: builder.mutation<IUser, IUserLogin>({
      query(data) {
        return {
          url: 'registration',
          method: 'POST',
          body: data,
        };
      },
      async onQueryStarted(args, { dispatch, queryFulfilled }) {
        try {
          const {data}=await queryFulfilled;
          dispatch(setUser(data));
        } catch (error) {}
      },
    }),
    loginUser: builder.mutation<any, IUserLogin>({
      query(data) {
        return {
          url: 'login',
          method: 'POST',
          body: data,
        };
      },
      async onQueryStarted(args, { dispatch, queryFulfilled }) {
        try {
          const {data}=await queryFulfilled;
          dispatch(setUser(jwtDecode(data.jwt)));
          localStorage.setItem("token",data.jwt);
        } catch (error) {
            console.log(error)
        }
      },
    }),

    checkUser: builder.query<any, null>({
        query() {
          return {
            url: 'auth',
            headers: {
                "Authorization": `Bearer ${localStorage.getItem("token")}`
            }
          };
        },

        async onQueryStarted(args, { dispatch, queryFulfilled }) {
          try {
            const {data}=await queryFulfilled;
            dispatch(setUser(jwt_decode(data.jwt)));
            console.log(jwt_decode(data.jwt))
          } catch (error) {}
        },
      }),

  
  }),
});


