import { newProfile, editProfile, deleteProfile,dissableProfile, enableProfile,
    setProfilesError, newProfileError, editProfileError, deleteProfileError } from '../app/profilesSlice';
import { toast } from 'react-toastify';

const ToastMiddleware = () => next => action => {
    switch(action.type) {
        case newProfile.type:
            toast.success('New Profile added successfully');
            break;
        case editProfile.type:
            toast.success('Profile saved successfully');
            break;
        case deleteProfile.type:
            toast.success('Profile deleted successfully');
            break;
        case enableProfile.type:
            toast.success('Profile enabled successfully');
            break; 
        case dissableProfile.type:
            toast.error('Profile dissabled successfully');
            break;    
        case setProfilesError.type:
            toast.error('Error loading Profile');
            break;
        case newProfileError.type:
            toast.error('Error adding new Profile');
            break;
        case editProfileError.type:
            toast.error('Error editing expense');
            break;
        case deleteProfileError.type:
            toast.error('Error deleting Profile');
            break;
        default:
            break;
    }
    return next(action);
}

export default ToastMiddleware;