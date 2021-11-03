using Microsoft.AspNetCore.Http;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace ChatApp.DB
{
    public class Profile
    {

        [Key]
        [ForeignKey("User")]
        public int Id { get; set; }
        public string Description { get; set; }
       
        public double Amount { get; set; }

        public string Firstname { get; set; }
          
        public string Lastname { get; set; }    
        public string Email { get; set; }
        public string Phoneno { get; set; }  
        public string Address { get; set; }
        public string Teacherstudentid { get; set; }
        public string Studentclass { get; set; }

        public string Gender { get; set; }
        public string Title { get; set; }

        public string Position { get; set; }

        public User User { get; set; }
    }
}
