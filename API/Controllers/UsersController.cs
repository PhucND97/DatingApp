using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using API.Dtos;
using API.Interfaces;
using API.Models;
using AutoMapper;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers
{
    [Authorize]
    public class UsersController : BaseApiController
    {
        private readonly IDatingRepository<User> _userRepo;
        private readonly IMapper _mapper;
        public UsersController(IDatingRepository<User> userRepo, IMapper mapper)
        {
            _mapper = mapper;
            _userRepo = userRepo;
        }

        [HttpGet]
        public async Task<ActionResult<ICollection<UserForListDto>>> GetUsers()
        {
            return Ok((await _userRepo.GetUsers())
                        .Select(u => _mapper.Map<User, UserForListDto>(u)));
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<UserForDetailedDto>> GetUser(int id)
        {
            var user = await _userRepo.GetUser(id);
            if (user is null)
            {
                return BadRequest();
            }
            return Ok(_mapper.Map<User, UserForDetailedDto>(user));
        }

        [HttpDelete("{id}")]
        public async Task<ActionResult> DeleteUser(int id)
        {
            var user = await _userRepo.GetUser(id);
            if (user is null)
            {
                return BadRequest();
            }
            return await _userRepo.Delete(user) ? NoContent() : StatusCode(500);
        }

        [HttpPost]
        public async Task<ActionResult> AddUser()
        {
            throw new NotImplementedException();
        }
    }
}