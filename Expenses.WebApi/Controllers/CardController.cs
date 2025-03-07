﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.IO;
using Microsoft.AspNetCore.Hosting;
using ChatApp.DB;

namespace EmployeeRegisterAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CardController : ControllerBase
    {
        private readonly AppDbContext _context;
        private readonly IWebHostEnvironment _hostEnvironment;

        public CardController(AppDbContext context, IWebHostEnvironment hostEnvironment)
        {
            _context = context;
            this._hostEnvironment = hostEnvironment;
        }

        // GET: api/Employee
        [HttpGet]
        public async Task<ActionResult<IEnumerable<CardList>>> GetEmployees()
        {
            return await _context.CardLists
                .Select(x => new CardList()
                {
                    CardID = x.CardID,
                    CardName = x.CardName,
                    Occupation = x.Occupation,
                    ImageName = x.ImageName,
                    ImageSrc = String.Format("{0}://{1}{2}/Images/{3}", Request.Scheme, Request.Host, Request.PathBase, x.ImageName)
                })
                .ToListAsync();
        }

        // GET: api/Employee/5
        [HttpGet("{id}")]
        public async Task<ActionResult<CardList>> GetEmployeeModel(int id)
        {
            var employeeModel = await _context.CardLists.FindAsync(id);

            if (employeeModel == null)
            {
                return NotFound();
            }

            return employeeModel;
        }

        // PUT: api/Employee/5
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPut("{id}")]
        public async Task<IActionResult> PutEmployeeModel(int id, [FromForm] CardList employeeModel)
        {
            if (id != employeeModel.CardID)
            {
                return BadRequest();
            }

            if (employeeModel.ImageFile != null)
            {
                DeleteImage(employeeModel.ImageName);
                employeeModel.ImageName = await SaveImage(employeeModel.ImageFile);
            }

            _context.Entry(employeeModel).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!EmployeeModelExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/Employee
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPost]
        public async Task<ActionResult<CardList>> PostEmployeeModel([FromForm] CardList employeeModel)
        {
            employeeModel.ImageName = await SaveImage(employeeModel.ImageFile);
            _context.CardLists.Add(employeeModel);
            await _context.SaveChangesAsync();

            return StatusCode(201);
        }

        // DELETE: api/Employee/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<CardList>> DeleteEmployeeModel(int id)
        {

            var employeeModel = await _context.CardLists.FindAsync(id);
            if (employeeModel == null)
            {
                return NotFound();
            }
            DeleteImage(employeeModel.ImageName);
            _context.CardLists.Remove(employeeModel);
            await _context.SaveChangesAsync();

            return employeeModel;
        }

        private bool EmployeeModelExists(int id)
        {
            return _context.CardLists.Any(e => e.CardID == id);
        }

        [NonAction]
        public async Task<string> SaveImage(IFormFile imageFile)
        {
            string imageName = new String(Path.GetFileNameWithoutExtension(imageFile.FileName).Take(10).ToArray()).Replace(' ', '-');
            imageName = imageName + DateTime.Now.ToString("yymmssfff") + Path.GetExtension(imageFile.FileName);
            var imagePath = Path.Combine(_hostEnvironment.ContentRootPath, "Images", imageName);
            using (var fileStream = new FileStream(imagePath, FileMode.Create))
            {
                await imageFile.CopyToAsync(fileStream);
            }
            return imageName;
        }

        [NonAction]
        public void DeleteImage(string imageName)
        {
            var imagePath = Path.Combine(_hostEnvironment.ContentRootPath, "Images", imageName);
            if (System.IO.File.Exists(imagePath))
                System.IO.File.Delete(imagePath);
        }
    }
}
