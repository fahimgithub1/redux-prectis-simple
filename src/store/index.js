import { createSlice, configureStore } from '@reduxjs/toolkit';

const initialCounterState = { counter: 0, showCounter: true };

const counterSlice = createSlice({
  name: 'counter',
  initialState: initialCounterState,
  reducers: {
    increment(state) {
      state.counter++;
    },
    decrement(state) {
      state.counter--;
    },
    increase(state, action) {
      state.counter = state.counter + action.payload;
    },
    toggleCounter(state) {
      state.showCounter = !state.showCounter;
    },
  },
});

const initialAuth = {
    isAuthenticated: false
}

const authClise = createSlice({
    name : 'authentication',
    initialState : initialAuth,
    reducers:{
        login(state){
            state.isAuthenticated = true
        },
        logout(state){
            state.isAuthenticated = false
        }
    }
})

const store = configureStore({
    // reducer: counterSlice.reducer
  reducer: { counter: counterSlice.reducer, auth: authClise.reducer}
});

export const counterActions = counterSlice.actions;
export const authActons = authClise.actions;

export default store;


// const counterReducer = (state = reducerObject, action)=>{

//     if(action.type === 'increment'){
//         return ({
//             counter : state.counter + action.value,
//             ShowCounter : state.ShowCounter
//         })
//     }
    
//     if(action.type === 'disincrement'){
//         return ({
//             counter : state.counter - action.value,
//             ShowCounter : state.ShowCounter
//         })
//     }
    
//     if(action.type === 'clear'){
//         return ({
//             counter :0,
//             ShowCounter : state.ShowCounter
//         })
//     }

//     if(action.type === 'Toggle'){
//         return ({
//             ShowCounter : !state.ShowCounter,
//             counter: state.counter
//         })
//     }

//     return state;
// }

// const store = createStore(counterReducer);

// export default store;
