import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { IUserLogin } from '../../utils/TypeScript';
import { IAuth } from '../types/authType';
import http from '../../apis/http';

export const loginAsync = createAsyncThunk(
  'auth/login',
  async (userLogin: IUserLogin, thunkAPI) => {
    try {
      const res = await http.post('login', userLogin);
      return res.data;
    } catch (error: any) {
      // Return the error message to be handled in the rejected case
      console.log(error.response.data.msg)
      // return thunkAPI.rejectWithValue(error.resonse.data.msg);
    }
  }
);

const userSlice = createSlice({
  name: 'auth',
  initialState: {} as IAuth,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(loginAsync.fulfilled, (state, action) => {
      state.token = action.payload.access_token;
      state.user = action.payload.user;
    });
    builder.addCase(loginAsync.rejected, (state, action) => {
      state.error = action.payload; // Store the error message in the state
    });
  },
});

export default userSlice.reducer;
