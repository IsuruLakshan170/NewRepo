﻿  using System.ComponentModel.DataAnnotations;

namespace ChatApp.DB
{
    public class User
    {
        [Key]
        public int Id { get; set; }
        public string Username { get; set; }
        public string Password { get; set; }
        public string Email { get; set; }
        public string VM { get; set; }
        public string ExternalId { get; set; }
        public string ExternalType { get; set; }
    }
}
