import { createSlice } from "@reduxjs/toolkit"


const initialState = {
    value:0
}

export const counterSlice = createSlice({
    name :'counter',
    initialState,
    reducers : {
        incrementState: (state)=>{
            state.value += 1
        },
        decrementState: (state)=>{
            state.value +=1
        },
        incrementByValue :(state,action) =>{
            state.value += action.payload 
        }
    }
}
)

export const {incrementState,decrementState,incrementByValue} =counterSlice.actions;

export default counterSlice.reducer;

