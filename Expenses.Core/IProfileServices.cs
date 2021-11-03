using ChatApp.Core.DTO;
using System.Collections.Generic;

namespace ChatApp.Core
{
    public interface IProfileServices
    {
        List<Profile> GetProfiles();
        Profile GetProfile(int id);
        Profile CreateProfile(DB.Profile profile);
        void DeleteProfile(Profile profile);
        Profile EditProfile(Profile profile);
    }
}
