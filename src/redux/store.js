import { configureStore } from '@reduxjs/toolkit';
import { projectReducer } from './reducers/projectReducer';
import { cardReducer } from './reducers/cardReducer';
import { userReducer } from './reducers/userReducer';

const store = configureStore({
    reducer: {
        projects: projectReducer,
        // cards: cardReducer,
        user: userReducer,
    }
})

export default store

export const server = "https://iit-collaboration-backend-3.vercel.app/api/v1"
