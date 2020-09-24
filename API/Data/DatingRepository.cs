using System.Collections.Generic;
using System.Threading.Tasks;
using API.Interfaces;
using API.Models;
using Microsoft.EntityFrameworkCore;

namespace API.Data
{
    public class DatingRepository<T> : IDatingRepository<T> where T : class
    {
        private readonly DataContext _context;
        public DatingRepository(DataContext context)
        {
            _context = context;
        }
        public async Task Add(T Entity)
        {
            await _context.Set<T>().AddAsync(Entity);
            await SaveChanges();
        }

        public async Task<bool> Delete(T Entity)
        {
            return await Task.Run(() =>
            {
                _context.Set<T>().Remove(Entity);
                return SaveChanges();
            });
        }

        public async Task<User> GetUser(int id)
        {
            return await _context.Users.Include(u => u.Photos).FirstOrDefaultAsync(u => u.Id == id);
        }

        public async Task<IEnumerable<User>> GetUsers()
        {
            return await _context.Users.Include(u => u.Photos).ToListAsync();
        }

        public async Task<bool> SaveChanges()
        {
            return await _context.SaveChangesAsync() > 0;
        }
    }
}