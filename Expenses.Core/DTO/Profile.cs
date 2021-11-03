using System;

namespace ChatApp.Core.DTO
{
    public class Profile
    {
        public int Id { get; set; }
        public string Description { get; set; }
        public double Amount { get; set; }

        public string Firstname { get; set; }
        public string Lastname { get; set; }
        public string Email { get; set; }
        public string Phoneno { get; set; }
        public string Address { get; set; }
        public string Teacherstudentid{ get; set; }
        public string Studentclass { get; set; }
        public string Gender { get; set; }

        public string Position { get; set; }
        public string Title { get; set; }


        public static explicit operator Profile(DB.Profile e) => new Profile
        {
            Id = e.Id,
            Description = e.Description,
            Amount = e.Amount,
            Firstname = e.Firstname,

            Lastname = e.Lastname,
            Email = e.Email,
            Phoneno = e.Phoneno,
            Address = e.Address,
            Teacherstudentid = e.Teacherstudentid,
            Studentclass = e.Studentclass,

            Gender = e.Gender,
            Position = e.Position,
            Title = e.Title,



        };
    }
}
