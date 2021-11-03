using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;

namespace ChatApp.DB
{
    public class AppDbContext : DbContext
    {
        public DbSet<Profile> Profiles { get; set; }
        public DbSet<User> Users { get; set; }
       
        public DbSet<CardList> CardLists { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            optionsBuilder.UseSqlServer(
                @"Server=(localdb)\mssqllocaldb;Database=ProfilesDB;Integrated Security=True");
        }
    }
}
