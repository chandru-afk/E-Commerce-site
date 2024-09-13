using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using UserService.Data;
using UserService.Models;


namespace UserService.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class UserController : ControllerBase
    {
        private readonly ApplicationDbContext _context;

        public UserController(ApplicationDbContext context)
        {
            _context = context;
        }
        [HttpGet]
        public async Task<ActionResult<User>> Get()
        {
            var Users = await _context.Users.ToListAsync();
            var User = await _context.Users.Where(x => x.Id>5).ToListAsync();
            var squaredNumbers = _context.Users.Select(n => n.Id * n.Id);
            var orderedNumbers = _context.Users.OrderBy(n => n.Id);
            int count = _context.Users.Count(n => n.Id > 3);
            int sum = _context.Users.Sum(user => user.Id);

            return Ok(Users);
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<User>> GetById(int id)
        {
            var users = await _context.Users.FindAsync(id);
            if(users == null) return NotFound();
            return Ok(users);
        }

        [HttpPost]
        public  void Post([FromBody]User user)
        {
            _context.Users.Add(user);
            _context.SaveChangesAsync();
            // var url = Url.Action("Get", new { id = user.Id });
            // if(string.IsNullOrEmpty(url))
            // {
            //     return StatusCode(StatusCodes.Status500InternalServerError, "Failed to generate URL for the created resource.");
            // }
            // return Created(url,user);
        }


    }
}