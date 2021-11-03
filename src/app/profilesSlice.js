import { createSlice, createAction } from '@reduxjs/toolkit';

export const setProfilesError = createAction('setProfilesError');
export const newProfileError = createAction('newProfileError');
export const editProfileError = createAction('editProfileError');
export const deleteProfileError = createAction('deleteProfileError');

export const profilesSlice = createSlice({
    name: 'profiles',
    initialState: {
        profiles: [],
    },
    reducers: {
        setProfiles: (state, action) => {
            return { ...state, profiles: [...action.payload] };
        },
        newProfile: (state, action) => {
            return { ...state, profiles: [action.payload, ...state.profiles] }
        },

       

        editProfile: (state, action) => {
            const profiles = state.profiles.map(profile => {
                if (profile.id === action.payload.id) {
                    profile = action.payload;
                }
                return profile;
            });
            return { ...state, profiles: [...profiles] };
        },
        deleteProfile: (state, action) => {
            const profiles = state.profiles.filter(profile =>
                profile.id !== action.payload.id);
            return { ...state, profiles: [...profiles] };
        },

        enableProfile: (state, action) => {
            const profiles = state.profiles.filter(profile =>
               true);
            return { ...state, profiles: [...profiles] };
        },

        dissableProfile: (state, action) => {
            const profiles = state.profiles.filter(profile =>
               true);
            return { ...state, profiles: [...profiles] };
        }
    }
});

export const { dissableProfile,enableProfile,  setProfiles, newProfile, editProfile, deleteProfile } = profilesSlice.actions;

export default profilesSlice.reducer;