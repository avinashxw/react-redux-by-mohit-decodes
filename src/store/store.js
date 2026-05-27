import { configureStore } from "@reduxjs/toolkit";
import counterReducer from '../features/counter/counterSlice';
import authReducer from '../features/auth/authSlice';
import userReducer from '../features/users/userSlice';

const loggerMiddleware = (store) => (next) => (action) =>{
    console.log('Dispatching action:', action);
    const result = next(action);
    console.log('Next state:', store.getState());
    return result;
}

export const store = configureStore({
    reducer: {
        counter: counterReducer,
        auth: authReducer,
        users: userReducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(loggerMiddleware)
});