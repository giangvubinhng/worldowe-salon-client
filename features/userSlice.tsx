import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '@/app/store';
import { IUserBody } from '@/interfaces/IUser';
import { fetchUser } from '@/services/user.service';

const initialStateValue: IUserBody = {
	email: '',
	first_name: '',
	last_name: '',
	user_id: '',
	profile_image: '',
	is_loggedIn: false,
};

export const fetchCurrentUserAsync = createAsyncThunk(
	'users/fetch',
	async () => {
		return fetchUser();
	}
);

export const userSlice = createSlice({
	name: 'user',
	initialState: { value: initialStateValue },
	reducers: {
		fetchCurrentUser: (state: any, action: PayloadAction<IUserBody>) => {
			state.value = action.payload;
			if (state.value) state.value.is_loggedIn = true;
		},
	},
	extraReducers: (builder) => {
		builder.addCase(fetchCurrentUserAsync.fulfilled, (state, { payload }) => {
			state.value = payload;
		});
	},
});

export const { fetchCurrentUser } = userSlice.actions;
export const selectCount = (state: RootState) => state.user.value;
export default userSlice.reducer;
