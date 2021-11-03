using Microsoft.AspNetCore.Http;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text;

namespace ChatApp.DB
{
    public class CardList
    {
        [Key]
        public int CardID { get; set; }

        [Column(TypeName = "nvarchar(50)")]
        public string CardName { get; set; }

        [Column(TypeName = "nvarchar(50)")]
        public string Occupation { get; set; }

        [Column(TypeName = "nvarchar(100)")]
        public string ImageName { get; set; }

        [NotMapped]
        public IFormFile ImageFile { get; set; }

        [NotMapped]
        public string ImageSrc { get; set; }

        //Pascal(EmployeeName) -> Camel EmployeeID ->employeeID
        //Camel(employeeName) -> Pascal
    }
}
