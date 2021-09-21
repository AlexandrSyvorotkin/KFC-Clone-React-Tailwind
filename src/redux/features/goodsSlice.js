import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";

export const fetchGoods = createAsyncThunk(
    'goods/fetchGoods',
    async function () {
        const response = await fetch('http://localhost:3001/db.json')

        const data = await response.json()
        return data
    }
)


const goodsSlice = createSlice({
    name: 'goods',
    initialState: {
        goods: [],
        status: null
    },
    extraReducers: {
        [fetchGoods.pending]: (state) => {
            state.status = 'loading';
        },
        [fetchGoods.fulfilled]: (state, action) => {
            state.status = 'resolved';
            state.goods = action.payload;
        },
        [fetchGoods.rejected]: (state) => {
            state.status = 'failed';
        },
    },
})

export default goodsSlice.reducer