import { configureStore } from "@reduxjs/toolkit";
import CounterReducer from "./reducers/counterSlice";
import UsersReducer from "./reducers/usersSlice";

export const store = configureStore({
    reducer: {
        counter: CounterReducer,
        users: UsersReducer
    }
})