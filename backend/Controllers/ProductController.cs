using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http.HttpResults;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using UserService.Data;
using UserService.Models;

namespace UserService.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class ProductController : ControllerBase
    {
        private readonly ApplicationDbContext _context;
        public ProductController(ApplicationDbContext context)
        {
            _context=context;
        }

        [HttpGet]
        public async Task<ActionResult> Get()
        {
            var product = await _context.Products.ToListAsync();
            return Ok(product);
        }

        [HttpGet("{id}")]
        public async Task<ActionResult> GetByid(int id)
        {
            var product = await _context.Products.Where(x => x.Id==id).ToListAsync();
            return Ok(product);
        }

        [HttpPost]
        public async void Post(Products c)
        {
             await _context.Products.AddAsync(c);
             await _context.SaveChangesAsync();
        }

    }
}