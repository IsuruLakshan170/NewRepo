using ChatApp.Core;
using ChatApp.Core.DTO;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace ChatApp.WebApi.Controllers
{
    [Authorize]
    [ApiController]
    [Route("[controller]")]
    public class ProfilesController : ControllerBase
    {
        private IProfileServices _profileServices;
        public ProfilesController(IProfileServices profileServices)
        {
            _profileServices = profileServices;
        }

        [HttpGet]
        public IActionResult GetProfiles()
        {
            return Ok(_profileServices.GetProfiles());
        }

        [HttpGet("{id}", Name = "GetProfile")]
        public IActionResult GetProfile(int id)
        {
            return Ok(_profileServices.GetProfile(id));
        }

        [HttpPost]
        public IActionResult CreateProfile(DB.Profile profile )
        {
            var newProfile= _profileServices.CreateProfile(profile);
            return CreatedAtRoute("GetProfile", new { newProfile.Id }, newProfile);
        }

        [HttpDelete]
        public IActionResult DeleteProfile(Profile profile)
        {
            _profileServices.DeleteProfile(profile);
            return Ok();
        }

        [HttpPut]
        public IActionResult EditProfile(Profile profile)
        {
            return Ok(_profileServices.EditProfile(profile));
        }
    }
    
}
