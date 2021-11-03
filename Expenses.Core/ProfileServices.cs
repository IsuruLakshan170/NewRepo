using ChatApp.Core.DTO;
using Microsoft.AspNetCore.Http;
using System.Collections.Generic;
using System.Linq;

namespace ChatApp.Core
{
    public class ProfileServices : IProfileServices
    {
        private readonly DB.AppDbContext _context;
        private readonly DB.User _user;

        public ProfileServices(DB.AppDbContext context, IHttpContextAccessor httpContextAccessor)
        {
            _context = context;
            _user = _context.Users
                .First(u => u.Username == httpContextAccessor.HttpContext.User.Identity.Name);
        }

        public Profile CreateProfile(DB.Profile profile)
        {
         
            //db.profile.imagfile
            profile.User = _user;
    
            _context.Add(profile);
            _context.SaveChanges();

            return (Profile)profile;
        }

        public void DeleteProfile(Profile profile)
        {
            var dbExpense = _context.Profiles.First(e => e.User.Id == _user.Id && e.Id == profile.Id);
            _context.Remove(dbExpense);
            _context.SaveChanges();
        }

        public Profile EditProfile(Profile profile)
        {
            var dbExpense = _context.Profiles
                 .Where(e => e.User.Id == _user.Id && e.Id == profile.Id)
                         .First();
                  
                    dbExpense.Description = profile.Description;
                    dbExpense.Amount = profile.Amount;
                    dbExpense.Firstname = profile.Firstname;
                    dbExpense.Lastname = profile.Lastname;
                    dbExpense.Email = profile.Email;
                    dbExpense.Phoneno = profile.Phoneno;
                    dbExpense.Address = profile.Address;
                    dbExpense.Teacherstudentid = profile.Teacherstudentid;
                    dbExpense.Studentclass = profile.Studentclass;
                    dbExpense.Gender = profile.Gender;
                    dbExpense.Position = profile.Position;
                    dbExpense.Title = profile.Title;


            _context.SaveChanges();

            return profile;
        }

        public Profile GetProfile(int id) =>
            _context.Profiles
                .Where(e => e.User.Id == _user.Id && e.Id == id)
                .Select(e => (Profile)e)
                .First();

        public List<Profile> GetProfiles() =>
            _context.Profiles
                .Where(e => e.User.Id == _user.Id)
                .Select(e => (Profile)e)
                .ToList();
    }
}
