import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { deviceApi } from "../service/deviceApi";
import {authApi} from "../service/authApi"
import userReducer from "../stores/reducers/UserSlice"
import { favoriteApi } from "../service/favoriteApi";
import { cartApi } from "../service/cartApi";


const rootReducer=combineReducers({
   [deviceApi.reducerPath]:deviceApi.reducer,
   [authApi.reducerPath]:authApi.reducer,
   [favoriteApi.reducerPath]:favoriteApi.reducer,
   [cartApi.reducerPath]:cartApi.reducer,
    userReducer
})

export const stores=configureStore({
        reducer:rootReducer,
        middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({}).concat([deviceApi.middleware, authApi.middleware, favoriteApi.middleware, cartApi.middleware]),
    })

export type RootState=ReturnType<typeof rootReducer>
export type AppStore=ReturnType<typeof stores.getState>
export type AppDispatch=typeof stores.dispatch


