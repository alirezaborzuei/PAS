import { createSlice, createAsyncThunk, createAction } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  loading: false,
  error: null,
  status: null,
  responseStatus: null,
  mobile: null,

};

export const setResponseStatus = createAction('data/setResponseStatus');
export const setMobile = createAction('data/setMobile');

export const sendDataToServer = createAsyncThunk(
  'data/sendDataToServer',
  async ({ mobile, status, address, lat, lang }) => {
    console.log('status :', status)
    try {
      const response = await axios.get(`https://she.unilever.ir:5335/smsReceived.asmx/Crisis_Response_Add?Mobile=${mobile}&status=${status}&Location=${address}&lat=${lat}&lang=${lang}`);
      return response.data;
    } catch (error) {
      throw error;
    }
  }
);

const dataSlice = createSlice({
  name: 'data',
  initialState,
  reducers: {
    setResponseStatus(state, action) {
      state.status = action.payload;
    },
    setMobile(state, action) {
      state.mobile = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(sendDataToServer.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(sendDataToServer.fulfilled, (state) => {
        state.loading = false;
        state.error = null;
      })
      .addCase(sendDataToServer.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(setResponseStatus, (state, action) => {
        state.responseStatus = action.payload;
      });
  },
});

export default dataSlice.reducer;
