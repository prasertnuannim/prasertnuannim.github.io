import httpClient from '@/utils/httpClient';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { RootState } from '../store';

export interface LineNotifyState {
    name: string
    telephone:string
    message: string
    status?: "idle" | "loading" | "succeeded" | "failed"
}

const initialState: LineNotifyState = {
    name:'',
    telephone:'',
    message: '',
    status: "idle"
}

export const lineNotify = createAsyncThunk(
    "line/lineNotify",
    async (notifyMessage: LineNotifyState, { rejectWithValue }) => {
        try {
            const response = await httpClient.post("/lineNotify", {
                name: notifyMessage.name,
                telephone: notifyMessage.telephone,
                message: notifyMessage.message
            })
            const data = await response.data;
            return data;
        } catch (err: any) {
            return rejectWithValue(err.response.data.message);
        }
    }
);

export const counterSlice = createSlice({
    name: 'lineNotify',
    initialState,
    reducers: {
        lineNotifySucceeded: (state) => {
            state.status = 'idle'
        }
    },

    extraReducers: (builder) => {
        builder
            .addCase(lineNotify.pending, (state) => {
                state.status = "loading"
            })
            .addCase(lineNotify.fulfilled, (state) => {
                state.status = "succeeded"
            })
            .addCase(lineNotify.rejected, (state) => {
                state.status = "failed"
            })
    }
})

export const { lineNotifySucceeded } = counterSlice.actions
export const lineNotifySelector = (state: RootState) => state.lineNotify
export default counterSlice.reducer