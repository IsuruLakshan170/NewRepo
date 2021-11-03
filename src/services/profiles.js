import profile from '../components/Profile';

import {
  
    dissableProfile, enableProfile,  setProfiles, newProfile, editProfile, deleteProfile,
    setProfilesError, editProfileError, newProfileError, deleteProfileError
} from '../app/profilesSlice';
import * as axios from 'axios';

const axiosInstance = axios.create({    
    baseURL: `${process.env.REACT_APP_BASE_URL}/Profiles`,
})

axiosInstance.interceptors.request.use((config) => {
    config.headers = { authorization: 'Bearer ' + sessionStorage.getItem('token') };
    return config;
});

export const GetProfiles = async (dispatch) => {
    try {
        // api call
        const { data } = await axiosInstance.get();
        dispatch(setProfiles(data));
    } catch {
        dispatch(setProfilesError());
    }
}

export const NewProfile = async (dispatch, profile) => {
    try {
        // api call
        const { data } = await axiosInstance.post('', profile);
        dispatch(newProfile(data));
    } catch {
        dispatch(newProfileError());
    }
}

export const EnableProfile = async (dispatch,profile) => {
    try {
        // api call
      //  await axiosInstance.put('', profile);

        dispatch(enableProfile(profile));
    } catch {
       // dispatch(setProfilesError());
    }
}
export const DissableProfile = async (dispatch,profile) => {
    try {
        // api call
      //  await axiosInstance.put('', profile);

        dispatch(dissableProfile(profile));
    } catch {
       // dispatch(setProfilesError());
    }
}


export const EditProfile = async (dispatch, profile) => {
    try {
        // api call
        await axiosInstance.put('', profile);
        dispatch(editProfile(profile));
    } catch {
        dispatch(editProfileError());
    }
}

export const DeleteProfile = async (dispatch, profile) => {
    
  <h1>text</h1>
    try {
        // api call
        await axiosInstance.delete('', { data: { ...profile } });
        dispatch(deleteProfile(profile));
    } catch {
        dispatch(deleteProfileError());
    }
}