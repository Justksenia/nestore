import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import jwt_decode from "jwt-decode";
import { IUser } from "../../types/UserTypes";
import { IFavorite } from "../../types/DeviceTypes";

interface IUserState {
  user: IUser | null;
  isAdmin: boolean;
  isAuth: boolean;
  favorites: IFavorite | null;
}

const initialState: IUserState = {
  user: null,
  isAdmin: false,
  isAuth: false,
  favorites: null,
};

export const userSlice = createSlice({
  initialState,
  name: "user",
  reducers: {
    logout: (state) => {
      state.user = null;
      state.isAdmin = false;
      state.isAuth = false;
      localStorage.removeItem("token");
    },
    setUser: (state, action: PayloadAction<IUser>) => {
      state.user = action.payload;
      state.isAuth = true;
    },
    setToken: (state) => {
      const token = localStorage.getItem("token");
      if (token) {
        const decode: IUser = jwt_decode(token);
        state.user = decode;
        if (decode.role === "ADMIN") {
          state.isAdmin = true;
        } else {
          state.isAuth = true;
        }
      }
    },
    setFavorites:(state, action:PayloadAction<IFavorite>)=>{
        state.favorites=action.payload
    }
  },
});

export default userSlice.reducer;

export const { logout, setUser, setToken } = userSlice.actions;
