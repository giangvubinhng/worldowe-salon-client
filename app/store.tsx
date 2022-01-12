import { Action, configureStore, ThunkAction } from '@reduxjs/toolkit';
import userReducer from '../features/userSlice';
import { createWrapper, HYDRATE } from 'next-redux-wrapper';
export const store = () =>
	configureStore({
		reducer: {
			user: userReducer,
		},
	});

type AppStore = ReturnType<typeof store>;
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore['getState']>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = AppStore['dispatch'];
export type AppThunk<ReturnType = void> = ThunkAction<
	ReturnType,
	RootState,
	unknown,
	Action
>;
export const wrapper = createWrapper<AppStore>(store);
